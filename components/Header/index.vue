<template>
  <MatchMedia v-slot="{ pc }">
    <PCHeader v-if="pc" />
    <MobileHeader @toggle="$emit('toggle')" v-else />
  </MatchMedia>
</template>

<script>
import { MatchMedia } from 'vue-component-media-queries'

import PCHeader from './pc'
import MobileHeader from './mobile'

export default {
  name: 'CHeader',
  components: {
    MatchMedia,
    PCHeader,
    MobileHeader
  }
}
</script>
