<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/AH60_TheCollections/*.jpg', {
  eager: true,
}) as GlobEagerImport;

const title = 'Arena Homme+ 60';
const body = ['The Collections'];
</script>
