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
      setTimeout(() => {
        this.loading = false
        this.finished = true
        this.list = [
          {
          id: 1,
          src: 'https://img1.sycdn.imooc.com/szimg/5f3c866608d7a4e706000338-360-202.jpg',
          summary: '小程序微课简介',
          content: '神课再迭代，历时4年，学员20000+，始终与微信官方同步，缔造全网首屈一指的精品课程',
          title: '微信小程序入门与实战-2020全新版',
          createTime: '1999-07-10'
          },{
            id: 2,
            title: '全面系统Python3.8入门+进阶',
            summary: 'python微课简介',
            src: 'https://img.mukewang.com/szimg/59b8a486000107fb05400300-360-202.jpg',
            content: '目前任职架构师，曾任技术总监。精通技术架构设计，熟悉分布式/微服务系统设计开发。具有丰富的互联网项目经验，精通Java、Node.js、javascript等技术。尤其精通前端。 目前已开源： Cpage.js：Mvvm框架， ui-vue：基于vue2的UI框架， chen.js：dom操作框架。',
            createTime: '2132-12-12'
          }
        ]
      }, 1000)
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
