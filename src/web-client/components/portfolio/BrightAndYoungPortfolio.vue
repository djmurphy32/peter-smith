<template>
  <Portfolio :body="body" :imported-images="images" :title="title" :footer="footer" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './ImagePortfolio.vue'
import { GlobEagerImport } from '@/typings/globImport'
const images = import.meta.globEager('../../assets/images/portfolio/brightAndYoung/*.jpg') as GlobEagerImport

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
