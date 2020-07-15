<template>
  <div class='personalPage'>
    <div class="headPic">
      <img src="../../assets/images/auth.png" alt="">
    </div>
    <div class="userName">
      admin
    </div>
    <div class="logOut">
      <span @click="logOut">退出</span>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    // 登出
    logOut () {
      let _this = this
      window.sessionStorage.removeItem('token')
      _this.$toast({
        message: '退出成功',
        type: 'success',
        duration: 1000
      })
      setTimeout(function () {
        _this.$router.push('/')
      }, 1000)
    }
  }
}
</script>

<style scoped>
.personalPage {
  height: 100vh;
  padding: 30px 0 0 0;
  background-color: darkgrey;
}

.headPic {
  width: 3rem;
  margin: 0 auto;
}

.headPic img {
  width: 100%;
  border-radius: 50%;
}

.userName {
  text-align: center;
  color: #ffffff;
  font-size: 25px;
}

.logOut {
  text-align: center;
  margin-top: -20px;
  margin-left: 140px;
  font-size: 12px;
  color: rgb(233, 212, 91);
}

</style>
