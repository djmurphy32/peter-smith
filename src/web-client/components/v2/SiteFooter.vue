<script setup lang="ts">
import { Page } from "@/router/Page";
</script>

<template>
  <div class="flex justify-center gap-x-20 mb-16 mt-8">
    <div>
      <RouterLink :to="{ name: Page.HomeV2 }">Work</RouterLink>
    </div>
    <div>
      <RouterLink :to="{ name: Page.InformationV2 }">Information</RouterLink>
    </div>
  </div>
</template>
