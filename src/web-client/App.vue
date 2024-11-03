<script setup lang="ts">
import { useRoute } from "vue-router";
import AppV1 from "@/AppV1.vue";
import AppV2 from "@/AppV2.vue";
import { Page } from "./router/Page";
import { computed } from "vue";

const route = useRoute();
const isV2Route = computed(() => route.name === Page.HomeV2);
</script>

<template>
  <AppV1 v-if="!isV2Route" />
  <AppV2 v-else />
</template>
