<script setup lang="ts">
import SiteFooter from "@/components/SiteFooter.vue";
import SiteHeader from "@/components/SiteHeader.vue";
</script>

<template>
  <div class="site site-trunk">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<style lang="scss">
.site-trunk {
  margin: 30px;

  @media (min-width: 640px) {
    margin: 30px 60px;
  }
}
</style>
