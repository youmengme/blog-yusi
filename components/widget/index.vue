<template>
  <aside class="widgets">
    <Social />
    <Banner />
    <Tags />
    <Posts />
    <Links />
  </aside>
</template>

<script>
import Tags from './tags'
import Banner from './banner'
import Posts from './postlist'
// import comment from './comment'
import Links from './links'
import Social from './social'

export default {
  name: 'Aside1',
  components: {
    Tags,
    Banner,
    Posts,
    // comment,
    Links,
    Social
  }
}
</script>
<style lang="less">
.widgets {
  .widget {
    padding: 0 20px;
    background: #fff;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    .title {
      position: relative;
      width: auto;
      height: 45px;
      line-height: 45px;
      text-align: left;
      font-size: 16px;
      font-weight: 500;

      &:after {
        content: '';
        position: absolute;
        left: -20px;
        right: -20px;
        bottom: 0;
        width: auto;
        height: 1px;
        background: #eee;
      }

      &:before {
        content: '';
        width: 4px;
        height: 16px;
        border-radius: 0 3px 3px 0;
        background: var(--greenDrak);
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .content {
      padding: 10px 0;
    }
  }
}
</style>
