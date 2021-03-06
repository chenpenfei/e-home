// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import { Popup } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import $axios from "./util/$axios"
Vue.use(MintUI)

Vue.config.pUroductionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
