<template>
  <Portfolio :body="body" :imported-images="images" :title="title" :footer="footer" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Portfolio from './ImagePortfolio.vue'
import { GlobEagerImport } from '@/typings/globImport'

const images = import.meta.globEager('../../assets/images/portfolio/littleHills/*.jpg') as GlobEagerImport

export default defineComponent({
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
