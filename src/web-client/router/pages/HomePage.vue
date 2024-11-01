<template>
  <div class="homepage">
    <PortfoliosWrapper />
  </div>
</template>

<script setup lang="ts">
import PortfoliosWrapper from "@/components/PortfoliosWrapper.vue";
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
