<template>
  <Portfolio :body="body" :title="title" :footer="footer" :images="images" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './Portfolio.vue'

const requiredImages = import.meta.globEager('../../assets/images/portfolio/replica/*.jpg')
const imagesPaths = Object.values(requiredImages).map((module) => module.default)

export default Vue.extend({
  name: 'ReplicatePortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images: imagesPaths.map((image, i) => ({ src: image, alt: `image_${i}` })),
      title: 'Replica Magazine',
      body: ['Men’s fashion story for Replica’s tenth issue - Spring 22'],
      footer: [
        'Styling - Louis Prier Tisdall',
        'Featuring Matej, Donte, Brennan and Eliot',
        'c/o Anita Bitton - Establishment',
      ],
    }
  },
})
</script>
