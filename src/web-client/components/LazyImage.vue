<template>
  <div ref="rootEl" :class="[{ 'lazy-image--unloaded': !imageLoaded }]">
    <img
      :class="['lazy-image', imageClass, { 'lazy-image--lazy': !inViewport }]"
      :style="`width: ${imageWidth}px;`"
      :src="imageSource"
      :alt="alt"
      @load="imageLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { trackPictureImpression } from '@/utils/tracking'

const props = defineProps({
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
})

const rootEl = ref<Element | null>(null)
const route = useRoute()
const observer = ref<IntersectionObserver | null>(null)
const inViewport = ref(false)
const imageLoaded = ref(false)

const imageWidth = computed((): number => {
  return props.cssWidth ?? props.fullWidth
})

const imageSource = computed((): string => {
  const netlifyQs = inViewport.value ? `nf_resize=fit&w=${props.fullWidth}` : `nf_resize=fit&w=${props.lazyWidth}`
  let inputSrc = props.src

  if (inputSrc.indexOf('#') > -1) {
    inputSrc = inputSrc.substring(0, inputSrc.indexOf('#'))
  }
  if (inputSrc.indexOf('?') > -1) {
    return `${inputSrc}&${netlifyQs}`
  }

  return `${inputSrc}?${netlifyQs}`
})

onMounted(() => {
  attachObserver()
})
onUnmounted(() => {
  if ('IntersectionObserver' in window) {
    observer.value?.disconnect()
  }
})

const attachObserver = (): void => {
  if (rootEl.value) {
    observer.value = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        inViewport.value = true
        const label = `${route.name?.toString()}_${props.alt}`.trim().replace(/\s+/g, '_').toLowerCase()
        trackPictureImpression(label)
        observer.value?.disconnect()
      }
    })
    observer.value.observe(rootEl.value)
  }
}
const imageLoad = (): void => {
  imageLoaded.value = true
}
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
