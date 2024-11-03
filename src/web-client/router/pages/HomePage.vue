<script setup lang="ts">
import PortfoliosWrapper from "@/components/PortfoliosWrapper.vue";
</script>

<template>
  <div class="homepage">
    <PortfoliosWrapper />
  </div>
</template>
<style lang="scss">
.homepage {
  &-image {
    width: 90%;
    margin: auto;
    display: block;

    @media (min-width: 640px) {
      width: 750px;
    }

    &-container {
      padding-top: 20px;
    }
  }
}
</style>
