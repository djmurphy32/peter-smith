<template>
  <img :class="['lazy-image', { 'lazy-image--lazy': !inViewport }]" :src="imageSource" :alt="alt" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    fullWidth: { type: Number, required: true },
    lazyWidth: { type: Number, required: true },
  },
  data() {
    return {
      observer: {} as any,
      inViewport: false,
    }
  },
  computed: {
    imageSource(): string {
      return this.inViewport
        ? `${this.src}?nf_resize=fit&w=${this.fullWidth}`
        : `${this.src}?nf_resize=fit&w=${this.lazyWidth}`
    },
  },
  mounted() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries, observer) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          this.inViewport = true
          this.observer.disconnect()
        }
      })
      this.observer.observe(this.$el)
    } else {
      // Possibly fall back to a more compatible method here
    }
  },
  destroyed() {
    if ('IntersectionObserver' in window) {
      this.observer.disconnect()
    }
  },
})
</script>
<style lang="scss" scoped>
.lazy-image {
  &--lazy {
    filter: blur(5px);
  }
}
</style>
