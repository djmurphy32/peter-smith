<template>
  <Portfolio :body="body" :title="title" :footer="footer" :images="images" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './Portfolio.vue'
import LittleHillsCtx from '@/utils/webpackContexts/littleHills'
import importAll from '@/utils/importAll'

const requiredImages = importAll(LittleHillsCtx)

export default Vue.extend({
  name: 'LittleHillsPortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images: Object.keys(requiredImages).map((image, i) => ({ src: requiredImages[image], alt: `image_${i}` })),
      title: 'Little Hills',
      body: [
        'A portfolio of pictures made across the towns and villages of the North East of Ireland.',
        "Pictures of the landscapes, the events, and the people that influence today's youth.",
      ],
      footer: ['Edition of 200', 'Loose Leaf', '42 Pages'],
    }
  },
})
</script>
