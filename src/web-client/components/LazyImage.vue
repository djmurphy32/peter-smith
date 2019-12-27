<template>
  <div :class="[{ 'lazy-image--unloaded': !imageLoaded }]">
    <img
      :class="['lazy-image', imageClass, { 'lazy-image--lazy': !inViewport }]"
      :src="imageSource"
      :alt="alt"
      v-on:load="imageLoad"
    />
  </div>
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
    imageClass: String,
  },
  data() {
    return {
      observer: {} as any,
      inViewport: false,
      imageLoaded: false,
    }
  },
  computed: {
    imageSource(): string {
      const netlifyQs = this.inViewport ? `nf_resize=fit&w=${this.fullWidth}` : `nf_resize=fit&w=${this.lazyWidth}`
      let inputSrc = this.src

      if (inputSrc.indexOf('#') > -1) {
        inputSrc = inputSrc.substring(0, inputSrc.indexOf('#'))
      }
      if (inputSrc.indexOf('?') > -1) {
        return `${inputSrc}&${netlifyQs}`
      }

      return `${inputSrc}?${netlifyQs}`
    },
  },
  methods: {
    attachObserver(): void {
      this.observer = new IntersectionObserver((entries, observer) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          this.inViewport = true
          this.observer.disconnect()
        }
      })
      this.observer.observe(this.$el)
    },
    imageLoad(): void {
      this.imageLoaded = true
    },
  },
  mounted() {
    this.attachObserver()
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

  &--unloaded {
    height: 350px;
  }
}
</style>
