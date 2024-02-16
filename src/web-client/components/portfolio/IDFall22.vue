<template>
  <Portfolio :body="body" :imported-images="images" :title="title" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Portfolio from '../ImagePortfolio.vue'
import { GlobEagerImport } from '@/typings/globImport'
const importedImages = import.meta.globEager('../../assets/images/portfolio/ID_Fall22/*.jpg') as GlobEagerImport

const images = ref(importedImages)
const title = ref('i-D Magazine Fall 22')
const body = ref(['Jockstrap'])
</script>
