import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

// 数据
const state = {
  count: 111,
  fullPath: '/' // 路由跳转验证记忆地址
}

// 方法
const mutations = {
  ChangeFullPath (state, msg) {
    state.fullPath = msg
  }
}

// .......
const store = new vuex.Store({
  state,
  mutations
})

// 输出
export default store
