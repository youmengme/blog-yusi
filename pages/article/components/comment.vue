<template>
  <div
    class="comments"
    id="comment"
    :class="$platform.isMobile ? 'mobile' : 'pc'"
  >
    <div class="title">
      评论 <span>{{ 0 || '抢沙发' }}</span>
    </div>
    <div class="content">
      <img
        src="https://secure.gravatar.com/avatar/?s=100&d=mm"
        class="avatar"
      />
      <div class="comment-content">
        <div class="user-info">
          <label class="label">
            <span>昵称:</span>
            <input
              type="text"
              class="nick-name"
              v-model="nickname"
              placeholder="请输入你的昵称"
            />
          </label>
          <label class="label">
            <span>网址:</span>
            <input
              type="text"
              class="url"
              v-model="url"
              placeholder="请输入你的博客网址"
            />
          </label>
          <label class="label">
            <span>邮箱:</span>
            <input
              type="text"
              class="url"
              v-model="email"
              placeholder="请输入你的邮箱"
            />
          </label>
        </div>
        <textarea
          v-model.lazy="content"
          class="comment-data"
          placeholder="嗨，让我知道你来过好吗？"
        />
      </div>
    </div>
    <div class="comment-actions">
      <button class="preview">预览</button>
      <button class="submit" @click.stop="handleSubmitComment">提交</button>
    </div>
    <div class="replies" v-if="replies">
      <Reply :info="item" v-for="(item, index) in replies" :key="index" />
    </div>
    <div class="pagination">
      <Pagination
        :total="count"
        :size="10"
        :active="pageIndex"
        @change="handleChangePageIndex"
      />
    </div>
  </div>
</template>

<script>
import { createCommentItem, getCommentsByArticleId } from '@/api'
import Pagination from './pagination'
import Reply from './reply'
export default {
  name: 'Comments',
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  components: {
    Reply,
    Pagination
  },
  data() {
    return {
      nickname: '',
      url: '',
      email: '',
      content: '',
      pageIndex: 1,
      replyInfo: null,
      count: 0,
      replies: []
    }
  },
  created() {
    if (this.articleId) {
      this.getCommentList()
    }
  },
  methods: {
    async handleSubmitComment() {
      const { articleId, nickname, url, email, content } = this
      if (!articleId) return this.$toast.error('文章id不存在')
      if (!nickname) return this.$toast.error('name不存在')
      if (!url) return this.$toast.error('url不存在')
      if (!email) return this.$toast.error('email不存在')
      if (!content) return this.$toast.error('content不存在')

      const body = { nickname, url, email, content }
      const { code, data } = await createCommentItem(this.articleId, body)
      if (code || !data) return this.$toast.error('提交失败')
      this.$toast.success('提交成功')
      this.content = ''
      if (this.pageIndex === 1) this.getCommentList()
    },
    handleChangePageIndex(active) {
      this.pageIndex = active
      this.getCommentList()
    },
    async getCommentList() {
      const { code, data } = await getCommentsByArticleId(this.articleId, {
        page: this.pageIndex - 1,
        size: 10
      })
      if (code || !data) return
      const { list, count } = data
      this.replies = list
      this.count = count
    }
  }
}
</script>

<style lang="less" scoped>
.comments {
  padding: 20px;
  margin-top: 10px;
  background: #fff;

  &.mobile {
    .user-info {
      flex-direction: column !important;
      align-items: flex-start !important;

      .label {
        flex: 1 !important;
        margin-right: 0 !important;
        margin-bottom: 10px !important;
      }
    }
  }

  .title {
    font-size: 16px;
    font-weight: 500;

    span {
      margin-left: 5px;
      font-size: 12px;
      color: #999;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    margin-top: 15px;

    .avatar {
      width: 42px;
      height: 42px;
      border-radius: 3px;
      margin-right: 5px;
    }

    .comment-content {
      flex: 1;

      .user-info {
        display: flex;
        align-items: center;

        label {
          flex: 1;
          display: flex;
          align-items: center;
          width: 220px;
          font-size: 14px;
          border: 1px solid #f0f5fe;
          margin-right: 10px;
          color: #999;
          padding-left: 5px;

          &:last-child {
            margin-right: 0;
          }

          input {
            flex: 1;
            position: relative;
            padding: 4px 8px;
            height: 34px;
            outline: 0;
            box-shadow: none;
            color: #999;
            transition: all 0.3s ease-in-out;

            &:focus {
              outline: 0;
              border-color: #66afe9;
            }
          }
        }
      }

      .comment-data {
        display: flex;
        width: 100%;
        height: 120px;
        margin-top: 10px;
        border: 1px solid #f0f5fe;
        background-color: #fff;
        color: #666;
        line-height: 20px;
        padding: 10px;
        resize: none;
        font-size: 14px;
        box-sizing: border-box;
      }
    }
  }

  .comment-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;

    > div,
    > button {
      width: 100px;
      height: 36px;
      outline: 0;
      background: #009688;
      border: 1px solid #009688;
      font-size: 16px;
      color: #fff;
      line-height: 36px;
      cursor: pointer;

      &:first-child {
        margin-right: 10px;
        background: #fff;
        border: 1px solid #d1d1d1;
        color: #888;
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .replies {
    padding: 15px 0;

    & /deep/ .reply {
      margin-top: 10px;
    }
  }
}
</style>
