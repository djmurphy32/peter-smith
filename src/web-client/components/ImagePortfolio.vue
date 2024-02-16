<template>
  <div class="portfolio">
    <PortfolioHeading :title="props.title" :body="props.body" :footer="props.footer" />
    <LazyImage
      v-for="(img, ix) in images"
      :key="ix"
      :src="img.src"
      :alt="img.alt"
      :full-width="1200"
      :lazy-width="200"
      :css-width="600"
    />
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/named
import { computed, PropType } from 'vue'
import PortfolioHeading from './PortfolioHeading.vue'
import LazyImage from '@/components/LazyImage.vue'
import { GlobEagerImport } from '@/typings/globImport'

const props = defineProps({
  title: { type: String, required: true },
  body: { type: Array as PropType<string[]>, required: true },
  footer: { type: Array as PropType<string[]>, required: false, default: () => [] },
  importedImages: { type: Object as PropType<GlobEagerImport>, required: true },
})

const images = computed((): { src: string; alt: string }[] => {
  const paths = Object.values(props.importedImages).map((module) => module.default)

  return paths.map((image, i) => ({ src: image, alt: `image_${i}` }))
})
</script>

<style scoped lang="scss">
.portfolio {
  margin-bottom: 40px;
}
</style>
