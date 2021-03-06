// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css'
import Echarts from 'echarts'
import 'iview/dist/styles/iview.css'
import {
  DatePicker
} from 'iview'
import apiConfig from '../config/index'
// Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('DatePicker', DatePicker)
Vue.use(axios)
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
