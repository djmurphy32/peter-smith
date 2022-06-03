<template>
  <Portfolio :body="body" :image-paths="images" :title="title" :footer="footer" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './ImagePortfolio.vue'
const images = import.meta.glob('../../assets/images/portfolio/homme/*.jpg') as Record<string, string>

export default Vue.extend({
  name: 'HommePortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images,
      title: 'Arena HOMME+ 57',
      body: [
        'LOEWE special with England and Leeds United Midfielder Kalvin Phillips. Photographed in his hometown of Cleckheaton.',
      ],
      footer: ['Words - James Brown', 'Styling - Charlotte Rubenstein', 'Grooming - James Duggan'],
    }
  },
})
</script>
