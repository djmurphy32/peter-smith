<template>
  <Portfolio :body="body" :imported-images="images" :title="title" :footer="footer" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Portfolio from '../ImagePortfolio.vue'
import { GlobEagerImport } from '@/typings/globImport'
const importedImages = import.meta.globEager('../../assets/images/portfolio/Replica_Spring22/*.jpg') as GlobEagerImport

const images = ref(importedImages)
const title = ref('Replica Magazine')
const body = ref(['Men’s fashion story for Replica’s tenth issue - Spring 22'])
const footer = ref([
  'Styling - Louis Prier Tisdall',
  'Featuring Matej, Donte, Brennan and Eliot',
  'c/o Anita Bitton - Establishment',
])
</script>
