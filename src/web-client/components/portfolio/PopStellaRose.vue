<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/Pop_StellaRose/*.jpg', {
  eager: true,
}) as GlobEagerImport;

const title = 'POP Magazine 48';
const body = ['Stella Rose Gahan'];
</script>
