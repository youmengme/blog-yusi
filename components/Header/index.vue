<template>
  <PCHeader v-if="'pc'" />
  <MobileHeader @toggle="$emit('toggle')" v-else />
</template>

<script>
import PCHeader from './pc'
import MobileHeader from './mobile'

export default {
  name: 'CHeader',
  components: {
    PCHeader,
    MobileHeader
  }
}
</script>
