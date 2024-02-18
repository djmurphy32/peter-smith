<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/AH58_CaliforniaBoys/*.jpg', {
  eager: true,
}) as GlobEagerImport;

const title = 'Arena Homme+ 58';
const body = ['Wish We Could All Be (California Boys)'];
</script>
