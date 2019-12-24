<template>
  <img
    class="lazy-image"
    :src="`${src}?nf_resize=fit&w=${lazyWidth}`"
    :data-src="`${src}?nf_resize=fit&w=${fullWidth}`"
    :alt="alt"
  />
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
  mounted() {
    const lazyImages = [].slice.call(document.querySelectorAll('lazy-images'))

    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target as HTMLImageElement
            lazyImage.src = lazyImage.dataset.src as string
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      })
      lazyImages.forEach((lazyImage) => {
        lazyImageObserver.observe(lazyImage)
      })
    } else {
      // Possibly fall back to a more compatible method here
    }
  },
})
</script>
