<template>
  <Portfolio :body="body" :image-paths="images" :title="title" :footer="footer" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './ImagePortfolio.vue'
const images = import.meta.glob('../../assets/images/portfolio/littleHills/*.jpg') as Record<string, string>

export default Vue.extend({
  name: 'LittleHillsPortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images,
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
