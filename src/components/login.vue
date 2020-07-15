<template>
  <div class='loginPage'>
    <div class="headPic" @click="toMain">
      <img src="../assets/images/auth.png" alt="">
    </div>

    <!-- 登录表单部分 -->
    <van-form class="form">
      <van-field
        label-width="4em"
        v-model="formData.username"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '用户名不能为空' }]"
      />

    <van-field
        label-width="4em"
        v-model="formData.pasd"
        name="密码"
        label="密码"
        type="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '密码不能为空' }]"
      />
    </van-form>
    <div class="formBtn">
      <van-button type="primary" size="large" @click="submitData">登录</van-button>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      // 登录数据
      formData: {
        username: '',
        pasd: ''
      },
      // 验证密码
      userData: {
        username: 'admin',
        pasd: 'admin'
      }
    }
  },
  methods: {
    // 点击头像回主页
    toMain () {
      this.$router.push('/')
    },

    // 提交数据
    submitData () {
      let _this = this
      // 先验证账号密码是否为空
      if (_this.formData.username === '' || _this.formData.pasd === '') {
        this.$notify('账号密码不能为空')
      } else {
        // 验证账号密码是否正确
        // 正确，则存入token 跳转到之前想要去的页面
        if (_this.formData.username === _this.userData.username && _this.formData.pasd === _this.userData.pasd) {
          // 存入token
          window.sessionStorage.setItem('token', 'ZheShiYiDuanToken')
          // 获取登录前想要去的页面的路由地址
          let nextPath = _this.$store.state.fullPath
          console.log(nextPath)
          // 登录成功，跳转至，之前想要去的路由地址
          _this.$router.push(nextPath)
        } else {
          // 账号密码错误，清空密码，弹出错误信息
          _this.formData.pasd = ''
          this.$notify('账号或者密码错误，请重新输入')
        }
      }
    }
  }
}
</script>

<style scoped>
.loginPage {
  background-color: bisque;
  height: 100vh;
  padding-top: 30px;
}

.headPic {
  width: 3.5rem;
  margin: 0 auto;
}

.headPic img {
  width: 100%;
  border-radius: 50%;
}

.form {
  margin: 30px auto;
  width: 8rem;
}

.van-field {
  margin-bottom: 8px;
}

.formBtn {
  width: 8rem;
  margin: 0 auto;
}
</style>
