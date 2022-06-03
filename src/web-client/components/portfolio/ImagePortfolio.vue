<template>
  <div class="portfolio">
    <PortfolioHeading :title="title" :body="body" :footer="footer" />
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

<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import PortfolioHeading from './PortfolioHeading.vue'
import LazyImage from '@/components/LazyImage.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const images2 = import.meta.glob('../../assets/images/portfolio/homme/*.jpg') as any
// eslint-disable-next-line no-console
console.log(images2)
const x: string[] = []

for (const image in images2) {
  // eslint-disable-next-line no-console
  images2[image]().then(() => {
    const p = new URL(image, import.meta.url).href
    // eslint-disable-next-line no-console
    console.log(p, x)
    x.push(p)
  })
}

export default Vue.extend({
  name: 'ImagePortfolio',
  components: {
    PortfolioHeading,
    LazyImage,
  },
  props: {
    title: { type: String, required: true },
    body: { type: Array as PropType<string[]>, required: true },
    footer: { type: Array as PropType<string[]>, required: true },
    imagePaths: { type: Object as PropType<Record<string, string>>, required: true },
  },
  computed: {
    imageUrls(): string[] {
      const res: string[] = []

      for (const image in this.imagePaths) {
        const imageUrl = new URL(image, import.meta.url).href
        res.push(imageUrl)
      }
      return res
    },
    images(): { src: string; alt: string }[] {
      return x.map((image, i) => ({ src: image, alt: `image_${i}` }))
      // return this.imageUrls.map((image, i) => ({ src: image, alt: `image_${i}` }))
    },
  },
})
</script>

<style scoped lang="scss">
.portfolio {
  margin-bottom: 40px;
}
</style>
