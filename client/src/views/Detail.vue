<template>
  <div>
      <div class="detailArticle">
        <div class="title">{{detail.title}}</div>
        <div class="summary">{{detail.summary}}</div>
        <div class='content'>{{detail.content}}</div>  
        <div class='createTime'>{{detail.createTime}}</div>
      </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      detail: {
          id: 1,
          src: 'https://img1.sycdn.imooc.com/szimg/5f3c866608d7a4e706000338-360-202.jpg',
          summary: '小程序微课简介',
          content: '神课再迭代，历时4年，学员20000+，始终与微信官方同步，缔造全网首屈一指的精品课程',
          title: '微信小程序入门与实战-2020全新版',
          createTime: '1999-07-10'
      }
    }
  }
}
</script>

<style scoped>
.detailArticle {
  padding: 20px;
  text-align: left;
}
.detailArticle .title {
  font-size: 25px;
  padding-bottom: 20px;
}
.detailArticle .summary {
  background-color: #dcdcdc;
  padding: 20px;
  margin-bottom: 20px;
}
.detailArticle .content {
  text-indent: 2em;
  line-height: 20px;
}
.detailArticle .createTime {
  text-align: right;
  color:#9c9c9c;
}
</style>
