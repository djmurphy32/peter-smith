<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" :video-link="videoLink" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/ID_Fall22/*.jpg', {
  eager: true,
}) as GlobEagerImport;

const title = 'i-D Magazine Fall 22';
const body = ['Jockstrap'];
const videoLink = 'https://player.vimeo.com/video/913733822?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479';
</script>
