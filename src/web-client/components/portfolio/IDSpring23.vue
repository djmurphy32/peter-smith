<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/ID_Spring23/*.jpg', {
  eager: true,
}) as GlobEagerImport;

const title = 'i-D Magazine Spring 23';
const body = ['Three'];
</script>
