<template>
  <Portfolio :body="body" :title="title" :footer="footer" :images="images" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './Portfolio.vue'

const requiredImages = import.meta.globEager('../../assets/images/portfolio/brightAndYoung/*.jpg')
const imagesPaths = Object.values(requiredImages).map((module) => module.default)

export default Vue.extend({
  name: 'BrightAndYoungPortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images: imagesPaths.map((image, i) => ({ src: image, alt: `image_${i}` })),
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
