<template>
  <div class="nuxt-content-container">
    <nuxt-content-dev
      :id="id"
      ref="content"
      :class="classes"
      :document="document"
      @dblclick="toggleEdit"
    />
  </div>
</template>

<script>
import NuxtContent from './nuxt-content'

export default {
  name: 'NuxtContent',
  components: {
    NuxtContentDev: NuxtContent
  },
  props: NuxtContent.props,
  data () {
    return {
      classes: [],
      id: null
    }
  },
  mounted () {
    if (this.$vnode.data.attrs && this.$vnode.data.attrs.id) {
      this.id = this.$vnode.data.attrs.id
    }
    if (this.$vnode.data.class) {
      let classes
      if (Array.isArray(this.$vnode.data.class)) {
        classes = this.$vnode.data.class
      } else if (typeof this.$vnode.data.class === 'object') {
        const keys = Object.keys(this.$vnode.data.class)
        classes = keys.filter(key => this.$vnode.data.class[key])
      } else {
        classes = this.$vnode.data.class
      }
      this.classes = this.classes.concat(classes)
      delete this.$vnode.data.class
    }

    if (this.$vnode.data.staticClass) {
      this.classes = this.classes.concat(this.$vnode.data.staticClass)
      delete this.$vnode.data.staticClass
    }
  },
  methods: {
    waitFor (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  }
}
</script>

<style scoped>
.nuxt-content-container {
  position: relative;
}

.nuxt-content-editor {
  width: 100%;
  padding: 8px;
}
</style>
