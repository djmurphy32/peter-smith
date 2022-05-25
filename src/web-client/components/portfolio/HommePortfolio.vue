<template>
  <Portfolio :body="body" :title="title" :footer="footer" :images="images" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './Portfolio.vue'

const requiredImages = import.meta.globEager('../../assets/images/portfolio/homme/*.jpg')
const imagesPaths = Object.values(requiredImages).map((module) => module.default)

export default Vue.extend({
  name: 'HommePortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images: imagesPaths.map((image, i) => ({ src: image, alt: `image_${i}` })),
      title: 'Arena HOMME+ 57',
      body: [
        'LOEWE special with England and Leeds United Midfielder Kalvin Phillips. Photographed in his hometown of Cleckheaton.',
      ],
      footer: ['Words - James Brown', 'Styling - Charlotte Rubenstein', 'Grooming - James Duggan'],
    }
  },
})
</script>
