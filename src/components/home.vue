<template>
  <div class='homePage'>
    <!-- 头部 -->
    <van-row class="head">
      <van-col span="6" class="head-left">
        <van-icon name="wap-nav" />
      </van-col>
      <van-col span="12" class="head-logo">
        <span>我的移动商城</span>
      </van-col>
      <van-col span="6" class="head-right">
        <van-icon name="service" />
      </van-col>
    </van-row>
    <!-- main -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <van-tabbar v-model="activeName" route>
      <van-tabbar-item icon="home-o" name="goods" to="/goods">首页</van-tabbar-item>
      <van-tabbar-item icon="search" name="activity" to="/activity">活动中心</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="case" to="/case">案例中心</van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="personal" to="/personal">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data () {
    return {
      activeName: 'goods'
    }
  },
  created () {
    this.getRouterPath()
  },
  methods: {
    // 获取当前页面的路由地址，设置成默认显示项，目的是配合监听路由无法在当前页面刷新时默认显示问题
    getRouterPath () {
      this.activeName = this.$route.path.replace('/', '')
    }
  },
  watch: {
    // 监听路由变化，但是无法监听到刷新
    '$route.path' (newUrl, oldUrl) {
      this.activeName = newUrl.replace('/', '') // 如果路由变化了，就将去除 ’/‘后的路由地址字符串赋值给menuActive ，用于当前菜单栏的高亮显示
    }
  }
}
</script>

<style scoped>
.head {
  width: 100%;
  height: 1.2rem;
  background: rgb(255, 207, 102);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.homePage {
  padding: 1.2rem 0;
}

.head-right {
  text-align: right;
  padding-right: 5px;
  line-height: 1.2rem;
  font-size: 20px;
}

.head-left{
  padding-left: 5px;
  line-height: 1.2rem;
  font-size: 20px;
}

.head-logo {
  text-align: center;
  line-height: 1.2rem;
}
</style>
