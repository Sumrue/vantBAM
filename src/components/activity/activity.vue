<template>
  <div class='activityPage'>
    <router-link :to="item.path" v-for="(item,index) in activityItem" :key="index" >
      <div class="activityItem">
        <span>{{item.name}}</span>
      </div>
    </router-link>

  </div>
</template>
<script>

export default {
  data () {
    return {
      activityItem: [
        {
          name: '活动一',
          path: '/luckActivity'
        },
        {
          name: '活动二',
          path: '/luckActivity'
        },
        {
          name: '活动三',
          path: '/luckActivity'
        }
      ]
    }
  }
}
</script>

<style scoped>
.activityPage {
  height: 100vh;
  padding: 0 3px;
}
.activityItem {
  width: 100%;
  height: 2.5rem;
  font-size: 26px;
  line-height: 2.5rem;
  background-color: bisque;
  text-align: center;
  margin-bottom: 5px;
}
</style>
