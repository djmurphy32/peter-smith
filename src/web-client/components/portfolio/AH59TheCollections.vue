<template>
  <Portfolio :body="body" :imported-images="images" :title="title" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Portfolio from './ImagePortfolio.vue'
import { GlobEagerImport } from '@/typings/globImport'
const importedImages = import.meta.globEager(
  '../../assets/images/portfolio/AH59_TheCollections/*.jpg'
) as GlobEagerImport

const images = ref(importedImages)
const title = ref('Arena Homme+ 59')
const body = ref(['The Collections'])
</script>
