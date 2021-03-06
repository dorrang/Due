import Vue from 'vue'
import dueApp from './due-app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/styles.scss'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale'
import VModal from 'vue-js-modal'
import VueDatePicker from '@mathieustan/vue-datepicker';
import '@mathieustan/vue-datepicker/dist/vue-datepicker.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import VCalendar from 'v-calendar';
import moment from 'moment'
Vue.prototype.moment = moment

locale.use('EN')
moment.updateLocale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'seconds',
        ss: '%ss',
        m: 'a minute',
        mm: '%dm',
        h: 'an hour',
        hh: '%dh',
        d: 'a day',
        dd: '%dd',
        M: 'a month',
        MM: '%dM',
        y: 'a year',
        yy: '%dY'
    }
});

Vue.use(ElementUI, { locale });
Vue.use(VModal)
Vue.use(VueDatePicker, {
    lang: 'en'
});
Vue.use(VCalendar, {
    componentPrefix: 'vc'
});



import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationCircle, faTh, faComment, faChartLine, faPlus, faThLarge, faBell, faInbox, faCalendarCheck, faUserPlus, faSearch, faCaretSquareDown, faTrash, faClosedCaptioning, faUserFriends, faSignOutAlt, faUser, faEllipsisH, faCircle, faCheckCircle, faArrowCircleRight, faArrowCircleLeft, faChevronRight, faChevronLeft, faHome, faChartBar, faCalendarAlt, faStickyNote, faFilter, faPlusCircle, faClipboard, faBars, faReply, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faExclamationCircle, faTh, faComment, faChartLine, faPlus, faThLarge, faBell, faInbox, faCalendarCheck, faUserPlus, faSearch, faCaretSquareDown, faTrash, faClosedCaptioning, faUserFriends, faSignOutAlt, faUser, faEllipsisH, faCircle, faCheckCircle, faArrowCircleLeft, faArrowCircleRight, faChevronRight, faChevronLeft, faHome, faChartBar, faCalendarAlt, faStickyNote, faFilter, faPlusCircle, faClipboard, faBars, faReply, faThumbsUp)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(dueApp)
}).$mount('#app')