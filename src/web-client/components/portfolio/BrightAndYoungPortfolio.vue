<template>
  <Portfolio :body="body" :title="title" :footer="footer" :images="images" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './Portfolio.vue'
import BrightAndYoungCtx from '@/utils/webpackContexts/brightAndYoung'
import importAll from '@/utils/importAll'

const requiredImages = importAll(BrightAndYoungCtx)

export default Vue.extend({
  name: 'BrightAndYoungPortfolio',
  components: {
    Portfolio,
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
