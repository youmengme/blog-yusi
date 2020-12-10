<template>
  <div class="article">
    <div>
      <label class="line">
        <span>title:</span> <input v-model="articleData.title" type="text" />
      </label>
    </div>
    <div>
      <label class="line">
        <span>desc:</span> <input v-model="articleData.desc" type="text" />
      </label>
    </div>
    <div>
      <label class="line">
        <span>content:</span>
        <textarea v-model="articleData.content" type="text" />
      </label>
    </div>
    <div>
      <label class="line">
        <span>cover:</span> <input v-model="articleData.cover" type="text" />
      </label>
    </div>
    <div>
      <label class="line">
        <span>categoryId:</span>
        <input v-model="articleData.categoryId" type="text" />
      </label>
    </div>
    <div>
      <label class="line">
        <span>tags:</span> <input v-model="articleData.tags" type="text" />
      </label>
    </div>
    <div>
      <label class="line">
        <span>likes:</span> <input v-model="articleData.likes" type="text" />
      </label>
    </div>
    <div>
      <label class="line">
        <span>views:</span> <input v-model="articleData.views" type="text" />
      </label>
    </div>
    <div class="submit"><button @click="handleSubmitArticle">提交</button></div>
  </div>
</template>

<script>
import { createArticle } from '@/api/admin'
export default {
  layout: 'admin',
  name: 'AdminArticle',
  props: {},
  components: {},
  data() {
    return {
      articleData: {
        title: '',
        desc: '',
        content: '',
        cover: '',
        likes: 0,
        views: 0,
        tags: '',
        categoryId: ''
      }
    }
  },
  methods: {
    async handleSubmitArticle() {
      const { articleData } = this
      const params = {
        ...articleData,
        category: 1,
        tags: articleData.tags.split(','),
        publishedAt: new Date().toISOString()
      }
      const { code, data } = await createArticle(params)
      console.log(code, data)
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  .line {
    display: flex;
    align-items: center;
    width: auto;
    height: 40px;
    margin-top: 10px;
    font-size: 14px;
    span {
      margin-right: 10px;
      font-size: 16px;
      font-weight: 500;
    }
    input {
      width: 350px;
      height: 30px;
    }
  }
  .submit {
    margin-top: 20px;

    button {
      width: 60px;
      height: 30px;
      background: #ccc;
    }
  }
}
</style>
