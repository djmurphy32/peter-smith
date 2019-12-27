<template>
  <div class="site site-trunk">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      name: '',
    }
  },
})
</script>

<style lang="scss">
body {
  margin: 0;
  font-size: $medium-font-size;
  font-family: $open-sans;

  @include media-query-min($mq-lg) {
    font-size: $base-font-size;
  }
}

.site-trunk {
  margin: 30px;

  @include media-query-min($mq-sm) {
    margin: 30px 60px;
  }
}
</style>
