<template>
  <div id="TigerLottery">
    <van-nav-bar
  title="幸运大抽奖"
  left-text="返回"
  right-text="主页"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <div id="playBigBox">
      <div v-for="item in 3" :key="item" class="playBox">
        <ul class="playBoxUl">
          <li v-for="(resultList,index) in resultList" :key="index">{{resultList}}</li>
        </ul>
      </div>
    </div>
    <div id="TigerLotteryBtn"><van-button type="primary" @click="begin" :disabled="btnDsabled">开始抽奖</van-button></div>
    <br>
    <hr>
    <div id="TigerResChangeBox">
      <div id="TigerChangeNum">
        <van-field placeholder="请输入3位数字" v-model="putnum" maxlength=3 />
      </div>
      <van-button type="success"  id="TigerChangeBtn" @click="TigerChangeNum" :disabled="btnDsabled">更改结果</van-button>
    </div>
    <br>
    <p>如果想要更改最终结果，请在上面输入框中输入3位数字， 当前最终结果为 <span style="color:#da1414"> {{res[0]}} {{res[1]}} {{res[2]}}</span></p>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      resultList: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
      ], // 转动的圈数是根据转动列表中的组数来定的，比如此时组数为6 ，那么转动的圈数就为5，还有一组为结果数组 如果需要圈数增大，就添加组数即可
      res: [8, 8, 8],
      putnum: '',
      // 是否禁用按钮
      btnDsabled: false
    }
  },
  methods: {
    // 启动抽奖
    begin () {
      // 点击按钮后，立即重置距离
      $('.playBoxUl').css('marginTop', 0)
      // 点击抽奖按钮后立即禁用抽奖按钮
      this.btnDsabled = true
      let _this = this
      $('.playBoxUl').each( // 为每组抽奖列表添加此方法， 设置定时器已达到一个时差的效果
        function (index) {
          let _num = $(this)
          setTimeout(function () { // 设置定时器 时差效果
            _num.animate({ // 设置动画
              marginTop: -(5 * 800 + _this.res[index] * 80) + 'px' // 需要转动的距离 5*80*10是根据框大小计算的圈数 5为圈数 800为一圈的距离 而后面的是根据需要转到的具体位置而取的列表
            },
            {
              duration: 6999 // 完成动画所用的时间
            })
          }, 300 * index) // 每一组转动的时差 时差效果
        }
      )
      // 设置定时器，弹出结果，解禁按钮
      setTimeout(function () {
        _this.btnDsabled = false
        _this.$toast.success('恭喜您抽到了' + _this.res[0] + _this.res[1] + _this.res[2])
      }, 7600)
    },
    // 改变最终结果
    TigerChangeNum () {
      let _this = this
      $('.playBoxUl').css('marginTop', '0px')
      if (isNaN(_this.putnum)) { // 判断输入的内容是否为数字
        _this.putnum = ''
        this.$notify('请输出入正确的“数字”')
      } else {
        let resNum = _this.putnum.split('') // 此处处理输入的内容 将输入的内容处理成数组放入resNum中
        if (resNum.length !== 3) { // 判断输入的是否是3位数
          _this.putnum = ''
          this.$notify('请输入“3位”数字')
        } else {
          for (let i = 0; i < 3; i++) {
            _this.res.splice(i, 1, parseInt(resNum[i])) // 将转换成数字的结果替换到最终结果列表中
            this.putnum = ''
          }
        }
      }
    },
    // 返回活动中心
    onClickLeft () {
      this.$router.push('/activity')
    },
    // 返回主页
    onClickRight () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#playBigBox {
  overflow: hidden;
  width: 200px;
  margin: 0 auto;
}
.playBox {
  float: left;
  height: 80px;
}
.playBoxUl {
  margin-left: 20px;
  width: 20px;
}
.playBoxUl li {
  height: 80px;
  line-height: 80px;
  text-align: center;
  width: 85px;
  font-size: 30px;
}
#TigerResChangeBox {
  overflow: hidden;
}
#TigerLotteryBtn {
  margin-top: 20px;
  text-align: center;
}
#TigerChangeNum {
  width: 200px;
  float: left;
  border: solid 1px #312f2f;
  border-radius: 5px;
  margin-left: 20px;
}
#TigerChangeBtn {
  float: left;
  margin-left: 30px;
}
</style>
