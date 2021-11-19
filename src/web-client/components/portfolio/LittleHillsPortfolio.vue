<template>
  <div class="little-hills">
    <PortfolioHeading :title="title" :body="body" :footer="footer" />
    <LazyImage v-for="(img, ix) in images" :key="ix" :src="img.src" :alt="img.alt" :fullWidth="300" :lazyWidth="200" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioHeading from './PortfolioHeading.vue'
import LazyImage from '@/components/LazyImage.vue'
import LittleHillsCtx from '@/utils/webpackContexts/littleHills'
import importAll from '@/utils/importAll'

const requiredImages = importAll(LittleHillsCtx)

export default Vue.extend({
  name: 'LittleHillsPortfolio',
  components: {
    PortfolioHeading,
    LazyImage,
  },
  data() {
    return {
      images: Object.keys(requiredImages).map((image, i) => ({ src: requiredImages[image], alt: `image_${i}` })),
      title: 'Little Hills',
      body: [
        'A portfolio of pictures made across the towns and villages of the North East of Ireand.',
        "Pictures of the landscapes, the events, and the people that influence today's youth.",
      ],
      footer: ['Edition of 200', 'Loose Leaf', '42 Pages'],
    }
  },
})
</script>
