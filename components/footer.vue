<template>
  <footer id="footer" class="footer">
    <div class="copyright">
      <a href="http://www.youmeng.me">Youmeng.me</a> 版权所有 由NUXT & Nest构建
      托管于 阿里云 & 七牛
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

<style scoped lang="scss">
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
  .copyright {
    font-size: 12px;
  }
}
</style>
