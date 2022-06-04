<template>
  <Portfolio :body="body" :imported-images="images" :title="title" :footer="footer" />
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from './ImagePortfolio.vue'
import { GlobEagerImport } from '@/typings/globImport'
const images = import.meta.globEager('../../assets/images/portfolio/replica/*.jpg') as GlobEagerImport

export default Vue.extend({
  name: 'ReplicatePortfolio',
  components: {
    Portfolio,
  },
  data() {
    return {
      images,
      title: 'Replica Magazine',
      body: ['Men’s fashion story for Replica’s tenth issue - Spring 22'],
      footer: [
        'Styling - Louis Prier Tisdall',
        'Featuring Matej, Donte, Brennan and Eliot',
        'c/o Anita Bitton - Establishment',
      ],
    }
  },
})
</script>
