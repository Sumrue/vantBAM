// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/global/reset.css' // 样式重置
import './assets/global/global.css' // 全局样式
import './assets/global/m-fit' // 移动适配方案
import '@/assets/plugin/vant' // vant 按需引入组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
