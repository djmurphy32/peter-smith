<template>
  <Portfolio :body="body" :imported-images="images" :title="title" :footer="footer" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Portfolio from './ImagePortfolio.vue'
import { GlobEagerImport } from '@/typings/globImport'
const importedImages = import.meta.globEager('../../assets/images/portfolio/brightAndYoung/*.jpg') as GlobEagerImport

const images = ref(importedImages)
const title = ref('Bright and young and here forever')
const body = ref([
  'Pictures of youth involved in camping out and protesting for immediate government action in climate change mitigation.',
  "Photographed over a period of two years at various protests in London's Marble Arch and Piccadilly Circus",
])
const footer = ref(['Edition of 100', 'Recycled New Print', '32 Pages'])
</script>
