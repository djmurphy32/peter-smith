<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" :footer="footer" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/littleHills/*.jpg', {
  eager: true,
}) as GlobEagerImport;

const title = 'Little Hills';
const body = [
  'A portfolio of pictures made across the towns and villages of the North East of Ireland.',
  "Pictures of the landscapes, the events, and the people that influence today's youth.",
];
const footer = ['Edition of 200', 'Loose Leaf', '42 Pages'];
</script>
