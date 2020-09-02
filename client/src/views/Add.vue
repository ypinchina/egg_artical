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

import { Uploader, Field, CellGroup, Button } from 'vant'
export default {
  data() {
    return {
      fileList: [],
      title: 'adadasd',
      summary: 'qwrqwrqwrwqrqw',
      content: 'rqw412341241241242141'
    }
  },
  methods: {
    afterRead(file) {
      console.log(file)
    },
    submit() {
      if (this.title && this.summary) {
        console.log('success')
      }
    }
  },
  components: {
    [Uploader.name]: Uploader,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
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
