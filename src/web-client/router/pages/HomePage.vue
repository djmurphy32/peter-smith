<template>
  <div class="homepage">
    <LittleHillsPortfolio />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LittleHillsPortfolio from '@/components/portfolio/LittleHillsPortfolio.vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    LittleHillsPortfolio,
  },
})
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
