import { boardService } from '../services/board.service'

export const boardStore = {
    state: {
        isActivitiesOpen: false,
        currBoard: null,
        boards: [],
        isTaskDetails: false,
        isBoardActivities: false,
        isCloseScreen: false,
        isNotificationsOpen: false
    },
    getters: {
        isNotificatiosOpen(state) {
            return state.isNotificationsOpen
        },
        isCloseScreen(state) {
            return state.isCloseScreen
        },
        boardMembers(state) {
            return state.currBoard.members
        },
        currBoardId(state) {
            return state.currBoard._id
        },
        boardForDisplay(state) {
            return state.currBoard
        },
        boards(state) {
            return state.boards;
        },
        statuses(state) {
            return state.currBoard.statuses;
        },
        priorities(state) {
            return state.currBoard.priorities;
        },
        isTaskDetails(state) {
            return state.isTaskDetails
        },
        isBoardActivities(state) {
            return state.isBoardActivities
        },
        boardActivities(state) {
            if (!state.currBoard) return
            return state.currBoard.activities
        }
    },
    mutations: {
        openNotifications(state) {
            state.isNotificationsOpen = true
        },
        closeNotifications(state) {
            state.isNotificationsOpen = false
        },
        shutCloseScreen(state) {
            state.isCloseScreen = false
        },
        toggleCloseScreen(state) {
            state.isCloseScreen = !state.isCloseScreen
        },
        toggleIsDetails(state) {
            state.isTaskDetails = !state.isTaskDetails
        },
        toggleIsBoardActivities(state) {
            state.isBoardActivities = !state.isBoardActivities
        },
        setBoard(state, { board }) {
            state.currBoard = board
        },
        setBoards(state, { boards }) {
            state.boards = boards;
        },
        saveTask(state, { task, groupId }) {
            const groupIdx = state.currBoard.groups.findIndex(
                g => g.id === groupId
            );
            const taskIdx = state.currBoard.groups[groupIdx].tasks.findIndex(
                t => t.id === task.id
            );
            state.currBoard.groups[groupIdx].tasks.splice(taskIdx, 1, task)
        }
    },
    actions: {
        async loadBoard(context, { boardId }) {
            try {
                const board = await boardService.getBoard(boardId);
                context.commit({ type: 'setBoard', board })
                return board
            } catch (err) {
                console.log('boardStore: Error in loadBoard', err)
                throw err
            }
        },
        async loadBoards(context) {
            try {
                const boards = await boardService.query();
                context.commit({ type: 'setBoards', boards });
                return boards
            } catch (err) {
                console.log('boardStore: Error in loadBoards', err);
                throw err;
            }
        },
        async saveBoard(context, { boardToSave }) {
            try {
                const boardToSend = JSON.parse(JSON.stringify(boardToSave))
                const savedBoard = await boardService.update(boardToSend);
                context.commit({ type: 'setBoard', board: savedBoard });
                context.dispatch({ type: 'sendBoard', board: savedBoard })
                return savedBoard
            } catch (err) {
                console.log('boardStore: Error in saveBoard', err);
                throw err;
            }
        },
        async addNewBoard(context) {
            try {
                var newBoard = boardService.getEmptyBoard();
                newBoard.createdBy = context.getters.loggedInUser;
                const addedBoard = await boardService.add(newBoard);
                return addedBoard
            } catch (err) {
                console.log('boardStore: Error in Adding New Board', err)
                throw err
            }
        },
        async removeBoard(context, boardId) {
            try {
                await boardService.remove(boardId);
                await context.dispatch('loadBoards');
            } catch (err) {
                console.log('Couldn`t delete board', err);
                throw err;
            }
        },
        async getTask({ state }, { taskId, groupId }) {
            try {
                const groupIdx = state.currBoard.groups.findIndex(
                    g => g.id === groupId
                );
                const taskIdx = state.currBoard.groups[groupIdx].tasks.findIndex(
                    t => t.id === taskId
                );
                const taskToShow = JSON.parse(JSON.stringify(state.currBoard.groups[groupIdx].tasks[taskIdx]))
                return taskToShow

            } catch (err) {
                console.log('err:', err)
                throw err
            }
        },
        async getTaskActivities({ state }, { taskId }) {
            try {
                var boardActivities = JSON.parse(JSON.stringify(state.currBoard.activities))
                const taskActivities = boardActivities.filter(a => {
                    if (a.task) return a.task.id === taskId
                })
                return taskActivities

            } catch (err) {
                console.log('err:', err)
                throw err
            }
        },
        async saveTask({ state }, { task, groupId }) {
            try {
                this.commit({ type: 'saveTask', task, groupId })
                const savedTask = await this.dispatch({ type: 'saveBoard', boardToSave: JSON.parse(JSON.stringify(state.currBoard)) })
                return savedTask

            } catch (err) {
                console.log('err:', err)
                throw err
            }
        },
        async saveStatuses(context, statuses) {
            try {
                const boardToSave = {...context.state.currBoard };
                boardToSave.statuses = [...statuses];
                await context.dispatch('saveBoard', { boardToSave })
                return statuses;
            } catch (err) {

            }
        },
        async savePriorities(context, priorities) {
            try {
                const boardToSave = { ...context.state.currBoard };
                boardToSave.priorities = [...priorities];
                await context.dispatch('saveBoard', { boardToSave })
                return priorities;
            } catch (err) {

            }
        }
    }
}