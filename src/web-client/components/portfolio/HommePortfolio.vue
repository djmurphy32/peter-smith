<template>
  <Portfolio :body="body" :title="title" :footer="footer" :images="images" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './Portfolio.vue'
import HommeCtx from '@/utils/webpackContexts/homme'
import importAll from '@/utils/importAll'

const requiredImages = importAll(HommeCtx)

export default Vue.extend({
  name: 'HommePortfolio',
  components: {
    Portfolio,
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
