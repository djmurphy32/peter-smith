<template>
  <Portfolio :body="body" :title="title" :footer="footer" :images="images" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './Portfolio.vue'

const requiredImages = import.meta.globEager('../../assets/images/portfolio/littleHills/*.jpg')
const imagesPaths = Object.values(requiredImages).map((module) => module.default)

export default Vue.extend({
  name: 'LittleHillsPortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images: imagesPaths.map((image, i) => ({ src: image, alt: `image_${i}` })),
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
