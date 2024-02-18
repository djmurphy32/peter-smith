<template>
  <Portfolio :body="body" :imported-images="importedImages" :title="title" :video-link="videoLink" />
</template>

<script setup lang="ts">
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/Pop_Mowalola/*.jpg', {
  eager: true,
}) as GlobEagerImport;
const videoLink = 'https://player.vimeo.com/video/914040307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479';

const title = "'W'Happen?";
const body = ['Cult of Mowalola'];
</script>
