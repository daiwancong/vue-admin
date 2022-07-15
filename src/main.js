import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'
import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss'

import App from './App'
import store from './store'
import router from './router'

import './icons'
import './permission'
import './utils/error-log'

import * as filters from './filters'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/zh-cn'
Vue.use(DatePicker)
Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
