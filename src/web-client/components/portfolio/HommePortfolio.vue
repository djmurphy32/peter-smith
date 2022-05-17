Homme<template>
  <div class="little-hills">
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
import Vue from 'vue'
import PortfolioHeading from './PortfolioHeading.vue'
import LazyImage from '@/components/LazyImage.vue'
import HommeCtx from '@/utils/webpackContexts/homme'
import importAll from '@/utils/importAll'

const requiredImages = importAll(HommeCtx)

export default Vue.extend({
  name: 'HommePortfolio',
  components: {
    PortfolioHeading,
    LazyImage,
  },
  data() {
    return {
      images: Object.keys(requiredImages).map((image, i) => ({ src: requiredImages[image], alt: `image_${i}` })),
      title: 'Arena HOMME+ 57',
      body: [
        'LOEWE special with England and Leeds United Midfielder Kalvin Phillips. Photographed in his hometown of Cleckheaton.',
      ],
      footer: ['Words - James Brown', 'Styling - Charlotte Rubenstein', 'Grooming - James Duggan'],
    }
  },
})
</script>
