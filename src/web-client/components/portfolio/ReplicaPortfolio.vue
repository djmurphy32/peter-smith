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
import ReplicaCtx from '@/utils/webpackContexts/replica'
import importAll from '@/utils/importAll'

const requiredImages = importAll(ReplicaCtx)

export default Vue.extend({
  name: 'ReplicatePortfolio',
  components: {
    PortfolioHeading,
    LazyImage,
  },
  data() {
    return {
      images: Object.keys(requiredImages).map((image, i) => ({ src: requiredImages[image], alt: `image_${i}` })),
      title: 'Replica Magazine',
      body: ['18 page Men’s fashion story for Replica’s tenth issue - Spring 22'],
      footer: [
        'Styling - Louis Prier Tisdall',
        'Featuring Matej, Donte, Brennan and Eliot',
        'c/o Anita Bitton - Establishment',
      ],
    }
  },
})
</script>
