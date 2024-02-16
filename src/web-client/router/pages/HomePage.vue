<template>
  <div class="homepage">
    <AH60TheCollections />
    <AH60AnCatDubh />
    <PopMowalola />
    <AH59TheCollections />
    <AH58CaliforniaBoys />
    <AH58TheCollections />
    <PopStellaRose />
    <IDSpring23 />
    <IDFall22 />
  </div>
</template>

<script setup lang="ts">
import IDFall22 from '@/components/portfolio/IDFall22.vue'
import IDSpring23 from '@/components/portfolio/IDSpring23.vue'
import PopStellaRose from '@/components/portfolio/PopStellaRose.vue'
import AH58TheCollections from '@/components/portfolio/AH58TheCollections.vue'
import AH58CaliforniaBoys from '@/components/portfolio/AH58CaliforniaBoys.vue'
import AH59TheCollections from '@/components/portfolio/AH59TheCollections.vue'
import PopMowalola from '@/components/portfolio/PopMowalola.vue'
import AH60AnCatDubh from '@/components/portfolio/AH60AnCatDubh.vue'
import AH60TheCollections from '@/components/portfolio/AH60TheCollections.vue'
</script>

<style lang="scss">
.homepage {
  &-image {
    width: 90%;
    margin: auto;
    display: block;

    @include media-query-min($mq-sm) {
      width: 750px;
    }

    &-container {
      padding-top: 20px;
    }
  }
}
</style>
