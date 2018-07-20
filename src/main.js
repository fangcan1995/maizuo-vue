// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";


Vue.config.productionTip = false
/* 引入element ui */

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI) //使用 这个插件库（UI）



/* 引入 mint-ui   *  */

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) 

/* eslint-disable no-new */


/* 引入vuex*/


new Vue({
  el: "#app",
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)

})
