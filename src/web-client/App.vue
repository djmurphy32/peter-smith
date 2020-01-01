<template>
  <div class="site site-trunk">
    <router-view />
    <CookieConsent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CookieConsent from '@/components/CookieConsent.vue'

export default Vue.extend({
  name: 'App',
  components: {
    CookieConsent,
  },
})
</script>

<style lang="scss">
body {
  margin: 0;
  font-size: $base-font-size;
  font-family: $open-sans;
}

.site-trunk {
  margin: 30px;

  @include media-query-min($mq-sm) {
    margin: 30px 60px;
  }
}
</style>
