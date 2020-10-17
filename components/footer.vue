<template>
  <footer id="footer" class="footer">
    <div class="copyright">
      <a href="http://www.youmeng.me">Youmeng.me</a> 版权所有，保留一切权利 !
      由NODEPRESS、NUXT.JS和魔法代码强力驱动 · 站点地图 © 2018 · 托管于 阿里云 &
      七牛
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer1',
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 60px;
  background: var(--black);
  border-top: 8px solid #00a67c;
  margin-top: 25px;
  box-shadow: 0 -8px 0 rgba(0, 0, 0, 0.1);
  font-weight: 500;

  &,
  a {
    color: var(--gray);
  }
}
</style>
