<template>
  <div class="little-hills">
    <PortfolioHeading :title="title" :body="body" :footer="footer" />
    <LazyImage
      v-for="(img, ix) in images"
      :key="ix"
      :src="img.src"
      :alt="img.alt"
      :full-width="300"
      :lazy-width="200"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioHeading from './PortfolioHeading.vue'
import LazyImage from '@/components/LazyImage.vue'

import BrightAndYoungCtx from '@/utils/webpackContexts/brightAndYoung'
import importAll from '@/utils/importAll'

const requiredImages = importAll(BrightAndYoungCtx)

export default Vue.extend({
  name: 'BrightAndYoungPortfolio',
  components: {
    PortfolioHeading,
    LazyImage,
  },
  data() {
    return {
      images: Object.keys(requiredImages).map((image, i) => ({ src: requiredImages[image], alt: `image_${i}` })),
      title: 'Bright and young and here forever',
      body: [
        'Pictures of youth involved in camping out and protesting for immediate government action in climate change mitigation.',
        "Photographed over a period of two years at various protests in London's Marble Arch and Piccadilly Circus",
      ],
      footer: ['Edition of 100', 'Recycled New Print', '32 Pages'],
    }
  },
})
</script>
