<template>
  <div v-if="announcement" class="affiche">
    <span class="icon"> <i class="fa fa-volume-up" /> </span>
    {{ announcement || '暂无网站公告' }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Speedbar',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      announcement: state => state.announcement
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/utils.scss';
.affiche {
  width: auto;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  padding-left: 10px;
  background: var(--white);
  box-sizing: border-box;
  color: var(--grayDark);
  margin-bottom: 10px;
  @include line(1);

  .icon {
    color: var(--success);
    margin-right: 5px;
    font-size: 12px;
  }
}
</style>
