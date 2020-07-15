import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Login from '@/components/login'
import Regist from '@/components/regist'
import Home from '@/components/home'
import Goods from '@/components/goods/goods'
import Activity from '@/components/activity/activity'
import Case from '@/components/case/case'
import Personal from '@/components/personal/personal'
import luckActivity from '@/components/activity/luckActivity'
import { Toast } from 'vant'

Vue.use(Router)

const router = new Router({
  routes: [
    // 登录
    {
      path: '/login',
      component: Login
    },
    // 注册
    {
      path: '/regist',
      component: Regist
    },
    // 主页以及其子组件
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/goods',
      children: [
        // 礼品中心，首页
        {
          path: '/goods',
          component: Goods
        },
        // 活动中心
        {
          path: '/activity',
          component: Activity
        },
        // 案例中心
        {
          path: '/case',
          component: Case,
          meta: {
            requireAuth: true
          }
        },
        // 个人中心
        {
          path: '/personal',
          component: Personal,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    // 老虎机抽奖页面路由
    {
      path: '/luckActivity',
      component: luckActivity,
      meta: {
        requireAuth: true
      }
    }
  ]
})

// 设置路由导航前置守卫 判断登录权限
router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem('token')
  if (to.path === '/login') { // 判断是否是去登录页
    if (!token) { // 是登录页的情况，也要判断是否已登录，已登录就发送错误消息提示，不是则去登录页  通过是否有token来判断
      next()
    } else {
      Toast({
        message: '您已经登录，请勿重复登录',
        type: 'error',
        duration: 2000
      })
    }
  } else { // 不是去登录页的情况下
    if (to.meta.requireAuth) { // 判断当前要去的页面的权限， 是否需要验证
      if (!token) {
        store.commit('ChangeFullPath', to.path)
        console.log(to.path)
        Toast({
          message: '您还未登录，登录后才能进入，即将跳转至登录页',
          type: 'error',
          duration: 2200,
          onClose: function () { // 回调，提示后3秒自动进入登录页面
            next({path: '/login'})
          }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

export default router
