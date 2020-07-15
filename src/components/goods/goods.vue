<template>
  <div class=''>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- 滚动消息 -->
    <van-notice-bar
      left-icon="volume-o"
      :text="noticeTxt"
      color="#1989fa"
      background="#ecf9ff"
    />

    <!-- 礼品分类栏 -->
    <van-tabs v-model="active" swipeable @change="tabChange">
      <van-tab :title="giftData.title" v-for="(giftData,index) in giftData" :key="index">
        <div v-for="(tabData,item) in giftData.data" :key="item" class="gitbox" @click="exchangeGift(tabData)">
          <van-card
            :price="tabData.price"
            :desc="tabData.des"
            :title="tabData.name"
            :origin-price="tabData.salePrice"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
        </div>
        <div class="clearfix"></div>
        <div>
          <van-divider dashed :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
            哇咔咔 我可是有底线的
          </van-divider>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>

export default {
  data () {
    return {
      // 通知栏消息
      noticeTxt: '这是通知栏的消息，喔哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
      // tab菜单显示选项
      active: 0,
      // 礼品数据
      giftData: [
        {
          title: '推荐礼品',
          data: [
            {
              id: 1,
              name: '推荐礼品1',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 2,
              name: '推荐礼品2',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 3,
              name: '推荐礼品3',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 4,
              name: '推荐礼品4',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 5,
              name: '推荐礼品5',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 6,
              name: '推荐礼品6',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 7,
              name: '推荐礼品7',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 8,
              name: '推荐礼品8',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 9,
              name: '推荐礼品9',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 10,
              name: '推荐礼品10',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            }
          ]
        },
        {
          title: '数码',
          data: [
            {
              id: 1,
              name: '数码1',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 2,
              name: '数码2',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 3,
              name: '数码3',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 4,
              name: '数码4',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 5,
              name: '数码5',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 6,
              name: '数码6',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 7,
              name: '数码7',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 8,
              name: '数码8',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 9,
              name: '数码9',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 10,
              name: '数码10',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            }
          ]
        },
        {
          title: '箱包',
          data: [
            {
              id: 1,
              name: '箱包1',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 2,
              name: '箱包2',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 3,
              name: '箱包3',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 4,
              name: '箱包4',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 5,
              name: '箱包5',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 6,
              name: '箱包6',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 7,
              name: '箱包7',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 8,
              name: '箱包8',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 9,
              name: '箱包9',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 10,
              name: '箱包10',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            }
          ]
        },
        {
          title: '奢侈品',
          data: [
            {
              id: 1,
              name: '奢侈品1',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 2,
              name: '奢侈品2',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 3,
              name: '奢侈品3',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 4,
              name: '奢侈品4',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 5,
              name: '奢侈品5',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 6,
              name: '奢侈品6',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 7,
              name: '奢侈品7',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 8,
              name: '奢侈品8',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 9,
              name: '奢侈品9',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            },
            {
              id: 10,
              name: '奢侈品10',
              des: '此礼品，低调奢华，有内涵，非常适合年轻，漂亮的你',
              price: '1000',
              salePrice: '800'
            }
          ]
        }
      ],
      // 遮罩层，礼品详情，以及兑换的显示
      show: false,
      // 当前点击礼物的数据
      giftDetail: {}
    }
  },
  created () {
  },
  methods: {
    // 通过change事件，监听当前切换的tab，可以得到当前tab的name ,title。 没设置name,将自动返回index,因为activity默认成的index
    tabChange (name, title) {
      console.log(name + title)
      console.log(this.giftData[name])
    },
    // 点击礼品，获取礼品详情，去兑换页
    exchangeGift (value) {
      console.log(value)
      this.giftDetail = value
      this.show = true
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  line-height: 5rem;
  text-align: center;
  background-color: #39a9ed;
}

.gitbox {
  width: 50%;
  float: left;
}

.van-tab__pane {
  padding: 0 2.75px;
}
</style>
