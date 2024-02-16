<template>
  <Portfolio :body="body" :imported-images="images" :title="title" :footer="footer" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Portfolio from '../ImagePortfolio.vue'
const importedImages = import.meta.globEager('../../assets/images/portfolio/AH57_KalvinPhillips/*.jpg') as {
  default: string
}[]

const images = ref(importedImages)
const title = ref('Arena HOMME+ 57')
const body = ref([
  'LOEWE special with England and Man City Midfielder Kalvin Phillips. Photographed in his hometown of Cleckheaton.',
])
const footer = ref(['Words - James Brown', 'Styling - Charlotte Rubenstein', 'Grooming - James Duggan'])
</script>
