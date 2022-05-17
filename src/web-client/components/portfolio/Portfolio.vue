<template>
  <div class="portfolio">
    <PortfolioHeading :title="title" :body="body" :footer="footer" />
    <LazyImage
      v-for="(img, ix) in images"
      :key="ix"
      :src="img.src"
      :alt="img.alt"
      :full-width="600"
      :lazy-width="200"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PortfolioHeading from './PortfolioHeading.vue'
import LazyImage from '@/components/LazyImage.vue'

export default Vue.extend({
  name: 'Portfolio',
  components: {
    PortfolioHeading,
    LazyImage,
  },
  props: {
    title: { type: String, required: true },
    body: { type: Array as PropType<string[]>, required: true },
    footer: { type: Array as PropType<string[]>, required: true },
    images: { type: Array as PropType<{ src: string; alt: string }[]>, required: true },
  },
})
</script>

<style scoped>
.portfolio {
  margin-bottom: 40px;
}
</style>
