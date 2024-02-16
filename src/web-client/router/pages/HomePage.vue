<template>
  <div class="homepage">
    <IDSpring23 />
    <IDFall22 />
    <PopStellaRose />
  </div>
</template>

<script setup lang="ts">
import IDFall22 from '@/components/portfolio/IDFall22.vue'
import IDSpring23 from '@/components/portfolio/IDSpring23.vue'
import PopStellaRose from '@/components/portfolio/PopStellaRose.vue'
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
