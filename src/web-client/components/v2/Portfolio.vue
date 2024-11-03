<script setup lang="ts">
import LazyImage from "@/components/LazyImage.vue";
import Img from "@/assets/images/portfolio/AH60_TheCollections/Peter_joseph_smith_peterjosephsmith_website_website6560.jpg";
</script>

<template>
  <LazyImage
    :src="Img"
    alt="alt"
    :full-width="1200"
    :lazy-width="200"
    :css-width="600"
  />
</template>
