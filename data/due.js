const board = {
    "_id": "b101",
    "title": "Robot dev proj",
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u101",
        "fullname": "Abi Abambi",
        "imgUrl": "http://some-img"
    },
    "members": [{
        "_id": "u101",
        "fullname": "Tal Tarablus",
        "imgUrl": "https://www.google.com"
    }],
    "groups": [{
            "id": "g101",
            "title": "Group 1",
            "tasks": [{
                    "id": "c101",
                    "title": "Replace logo"
                },
                {
                    "id": "c102",
                    "title": "Add Samples"
                }
            ],
            "style": {}
        },
        {
            "id": "g102",
            "title": "Group 2",
            "tasks": [{
                    "id": "c103",
                    "title": "Do that"
                },
                {
                    "id": "c104",
                    "title": "Help me with Atlas",
                    "statusId": "statusId",
                    "comments": [{
                        "id": "ZdPnm",
                        "txt": "also @yaronb please CR this",
                        "createdAt": 1590999817436.0,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        }
                    }],
                    "members": [{
                        "_id": "u101",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                    }],
                    "createdAt": 1590999730348,
                    "dueDate": 16156215211,
                    "byMember": {
                        "_id": "u101",
                        "username": "Tal",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                    },
                    "style": {
                        "bgColor": "#26de81"
                    }
                }
            ],
            "style": {}
        }
    ],
    "statuses": [{
        "id": "udm876",
        "title": "Done",
        "color": "#ffffff"
    }],
    "activities": [{
        "id": "a101",
        "txt": "Changed Color",
        "createdAt": 154514,
        "byMember": {
            "_id": "u101",
            "fullname": "Abi Abambi",
            "imgUrl": "http://some-img"
        },
        "task": {
            "id": "c101",
            "title": "Replace Logo"
        }
    }]
}



const user = {
    "_id": "u101",
    "fullname": "Abi Abambi",
    "username": "abi@ababmi.com",
    "password": "aBambi123",
    "imgUrl": "http://some-img.jpg",
    "mentions": [{
        "id": "m101",
        "boardId": "m101",
        "taskId": "t101"
    }]
}