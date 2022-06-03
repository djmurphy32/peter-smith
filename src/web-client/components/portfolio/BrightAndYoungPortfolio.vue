<template>
  <Portfolio :body="body" :image-paths="images" :title="title" :footer="footer" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './ImagePortfolio.vue'
const images = import.meta.glob('../../assets/images/portfolio/brightAndYoung/*.jpg') as string[]

export default Vue.extend({
  name: 'BrightAndYoungPortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images,
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
