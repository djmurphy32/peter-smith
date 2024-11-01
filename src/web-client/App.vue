<script setup lang="ts">
import { useRoute } from "vue-router";

import SiteFooter from "@/components/SiteFooter.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import { Page } from "./router/Page";
import { computed } from "vue";

const route = useRoute();
const isV2Route = computed(() => route.name === Page.HomeV2);

</script>

<template>
  <div class="site site-trunk">
    <SiteHeader v-if="!isV2Route" />
    <router-view />
    <SiteFooter v-if="!isV2Route" />
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
