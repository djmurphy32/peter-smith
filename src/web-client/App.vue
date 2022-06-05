<template>
  <div class="site site-trunk">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    SiteFooter,
    SiteHeader,
  },
})
</script>

<style lang="scss">
body {
  margin: 0;
  font-size: $base-font-size;
  font-family: $open-sans;
}

a {
  color: $black;
}

.site-trunk {
  margin: 30px;

  @include media-query-min($mq-sm) {
    margin: 30px 60px;
  }
}
</style>
