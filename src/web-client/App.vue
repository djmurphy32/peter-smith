<script setup lang="ts">
import { useRoute } from "vue-router";
import AppV1 from "@/AppV1.vue";
import AppV2 from "@/AppV2.vue";
import { Page } from "./router/Page";
import { computed } from "vue";

const route = useRoute();
const v2Routes = [Page.HomeV2.toString(), Page.InformationV2.toString()];
const isV2Route = computed(() => v2Routes.includes(route.name as string));
</script>

<template>
  <AppV1 v-if="!isV2Route" />
  <AppV2 v-else />
</template>
