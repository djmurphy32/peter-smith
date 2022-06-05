<template>
  <div class="homepage">
    <HommePortfolio />
    <ReplicaPortfolio />
    <LittleHillsPortfolio />
  </div>
</template>

<script setup lang="ts">
import HommePortfolio from '@/components/portfolio/HommePortfolio.vue'
import ReplicaPortfolio from '@/components/portfolio/ReplicaPortfolio.vue'
import LittleHillsPortfolio from '@/components/portfolio/LittleHillsPortfolio.vue'
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
