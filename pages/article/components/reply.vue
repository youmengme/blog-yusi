<template>
  <div class="reply">
    <div class="main-reply">
      <img class="reply-avatar" :src="info.avatar" />
      <div class="reply-info" :data-floor="info.id">
        <div class="reply-ext">
          <div class="reply-nick-name">{{ info.nickName }}</div>
          <div class="reply-date">
            {{ info.publishedAt | formatDateToRelativeDate }}
          </div>
          <div class="reply-btn"><i class="iconfont icon-reply" /> 回复</div>
        </div>
        <div class="reply-content">{{ info.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reply',
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.reply {
  .main-reply {
    display: flex;
    align-items: flex-start;
    .reply-avatar {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
      border-radius: 3px;
      margin-right: 5px;
    }
    .reply-info {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background: rgba(0, 150, 136, 0.09);
      padding: 10px;
      box-sizing: border-box;
      &:after {
        content: '#' attr(data-floor);
        position: absolute;
        right: 10px;
        top: 5px;
        font-size: 14px;
        font-weight: 500;
        color: #999;
      }
      &:hover {
        .reply-btn {
          display: flex !important;
        }
      }

      .reply-content {
        font-size: 14px;
      }

      .reply-ext {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 500;
        color: #999;

        .reply-nick-name {
          margin-right: 10px;
        }

        .reply-btn {
          display: none;
          align-items: center;
          cursor: pointer;
          margin-left: 20px;

          i {
            font-size: 12px;
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>
