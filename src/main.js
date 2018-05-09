// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import service from './service'
import './assets/main.less'
import 'echarts-wordcloud/dist/echarts-wordcloud.js'
import 'echarts-wordcloud/dist/echarts-wordcloud.min.js'

Vue.config.productionTip = false

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

import * as filters from './filters'
Vue.prototype.filters = filters

/* eslint-disable no-new */
Vue.prototype.service = service
Vue.prototype.axios = axios
Vue.prototype.echarts = echarts
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
