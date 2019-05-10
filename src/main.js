// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import axios from 'axios'
import Qs from 'qs'
import './assets/css/app.css'
import Public from './components/public'
import waterfall from 'vue-waterfall2'
import store from './store'
Vue.use(waterfall)
Vue.use(Public)

Vue.prototype.axios = axios
Vue.prototype.qs = Qs
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
