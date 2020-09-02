<template>
  <div id="add">
    <van-uploader :after-read="afterRead" :max-count="1" v-model="fileList"/>
    <van-cell-group>
      <van-field label="文章标题" placeholder="文章标题" v-model="title"/>
      <van-field label="文章简介" placeholder="文章简介" v-model="summary"/>
      <van-field label="文章内容" placeholder="文章内容" v-model="content" type="textarea" autosize/>
    </van-cell-group>
    <van-button type="primary" @click="submit" class="add-button">发布文章</van-button>
  </div>
</template>

<script>

import { Uploader, Field, CellGroup, Button, Toast } from 'vant'
export default {
  data() {
    return {
      fileList: [],
      title: '',
      summary: '',
      content: '',
      src: ''
    }
  },
  methods: {
    afterRead(file) {
      this.src = file.content
    },
    submit() {
      if (this.title && this.summary) {
        const data = {
          title: this.title,
          summary: this.summary,
          src: this.src,
          createTime: "2020-09-01:20:20",
          content: this.content
        }
        fetch('/article/upload', {
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json'
            },
            method: 'post'// *GET, POST, PUT, DELETE, etc.
        }).then(res => res.json()).then(res => {
          if(res.status === 200) {
            this.$router.push({
              path: '/'
            })
          }
        })
        .catch(err => {
          console.log(err)
        }) 
      } else {
        Toast.fail('不能输入为空')
      }
    }
  },
  components: {
    [Uploader.name]: Uploader,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Toast.name]: Toast
  }
}
</script>

<style scoped>
.add-button {
  position: absolute;
  bottom: 50px;
  width: 100%;
  left: 0;
}
</style>
