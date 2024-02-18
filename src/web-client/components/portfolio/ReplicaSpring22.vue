<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" :footer="footer" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/Replica_Spring22/*.jpg', {
  eager: true,
}) as GlobEagerImport;

const title = 'Replica Magazine';
const body = ['Men’s fashion story for Replica’s tenth issue - Spring 22'];
const footer = [
  'Styling - Louis Prier Tisdall',
  'Featuring Matej, Donte, Brennan and Eliot',
  'c/o Anita Bitton - Establishment',
];
</script>
