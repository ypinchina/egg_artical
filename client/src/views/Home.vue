<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.id" @click="detailInfo(item.id)">
        <div class="list">
          <div class="left">
            <img :src='item.src' alt="">
          </div>
          <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="createTime">{{item.createTime}}</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>

import { List, Cell } from 'vant'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    }
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell
  },
  methods: {
    onLoad() {
      fetch('/article/lists').then(res => res.json()).then(res => {
        if(res.status === 200) {
          this.list = res.data
        } else {
          console.log('buhashquiweqwe')
          return
        }
      })
    },
    detailInfo(id) {
      this.$router.push({
        path: '/detail',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
}
.list .left img{
  width: 150px;
  height: 100px;
  border-radius: 10px;
}
.list .right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.title {
  font-size: 18px;
}
.createTime {
  font-size: 14px;
  color: #c9c9c9;
}

</style>
