<template>
  <div class="homepage">
    <HommePortfolio />
    <ReplicaPortfolio />
    <LittleHillsPortfolio />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HommePortfolio from '@/components/portfolio/HommePortfolio.vue'
import ReplicaPortfolio from '@/components/portfolio/ReplicaPortfolio.vue'
import LittleHillsPortfolio from '@/components/portfolio/LittleHillsPortfolio.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { HommePortfolio, ReplicaPortfolio, LittleHillsPortfolio },
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
