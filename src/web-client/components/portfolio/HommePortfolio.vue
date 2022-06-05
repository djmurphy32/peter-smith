<template>
  <Portfolio :body="body" :imported-images="images" :title="title" :footer="footer" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Portfolio from './ImagePortfolio.vue'
const images = import.meta.globEager('../../assets/images/portfolio/homme/*.jpg') as { default: string }[]

export default defineComponent({
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
