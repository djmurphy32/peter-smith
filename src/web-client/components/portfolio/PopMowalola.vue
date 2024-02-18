<template>
  <Portfolio :body="body" :imported-images="images" :title="title" :video-link="videoLink" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Portfolio from '../ImagePortfolio.vue';
import { GlobEagerImport } from '@/typings/globImport';
const importedImages = import.meta.glob('../../assets/images/portfolio/Pop_Mowalola/*.jpg', {
  eager: true,
}) as GlobEagerImport;
const videoLink = 'https://player.vimeo.com/video/914040307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479';
const images = ref(importedImages);
const title = ref("'W'Happen?");
const body = ref(['Cult of Mowalola']);
</script>
