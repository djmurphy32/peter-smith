<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" :footer="footer" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/AH57_KalvinPhillips/*.jpg', {
  eager: true,
}) as GlobEagerImport;

const title = 'Arena HOMME+ 57';
const body = [
  'LOEWE special with England and Man City Midfielder Kalvin Phillips. Photographed in his hometown of Cleckheaton.',
];
const footer = ['Words - James Brown', 'Styling - Charlotte Rubenstein', 'Grooming - James Duggan'];
</script>
