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
import { Toast } from 'vant';
export default {
  components: {
    [Toast.name]: Toast
  },
  data() {
    return {
      detail: {
      }
    }
  },
  created() {
    console.log(this.$route.query)
    fetch(`/article/detail?id=${this.$route.query.id}`).then(res => res.json()).then(res => {
      if(res.status === 200) {
        this.detail = res.data
      } else {
        Toast.fail('查询失败')
      }
    }).catch(err => {
      console.error(err)
    })
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
  margin-bottom: 30px;
}
.detailArticle .createTime {
  text-align: right;
  color:#9c9c9c;
}
</style>
