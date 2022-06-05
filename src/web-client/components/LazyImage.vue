<template>
  <div :class="[{ 'lazy-image--unloaded': !imageLoaded }]">
    <img
      :class="['lazy-image', imageClass, { 'lazy-image--lazy': !inViewport }]"
      :style="`width: ${imageWidth}px;`"
      :src="imageSource"
      :alt="alt"
      @load="imageLoad"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { trackPictureImpression } from '@/utils/tracking'

export default defineComponent({
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
    imageClass: { type: String, default: undefined },
    cssWidth: { type: Number, default: undefined },
  },
  data() {
    return {
      observer: null as IntersectionObserver | null,
      inViewport: false,
      imageLoaded: false,
    }
  },
  computed: {
    imageWidth(): number {
      return this.cssWidth ?? this.fullWidth
    },
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
  mounted() {
    this.attachObserver()
  },
  unmounted() {
    if ('IntersectionObserver' in window) {
      this.observer?.disconnect()
    }
  },
  methods: {
    attachObserver(): void {
      this.observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          this.inViewport = true
          const label = `${this.$route.name}_${this.alt}`.trim().replace(/\s+/g, '_').toLowerCase()
          trackPictureImpression(label)
          this.observer?.disconnect()
        }
      })
      this.observer.observe(this.$el)
    },
    imageLoad(): void {
      this.imageLoaded = true
    },
  },
})
</script>
<style lang="scss" scoped>
.lazy-image {
  max-width: 100%;

  &--lazy {
    filter: blur(5px);
  }

  &--unloaded {
    height: 350px;
  }
}
</style>
