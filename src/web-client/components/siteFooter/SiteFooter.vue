<script setup lang="ts">
import { Page } from "@/router/Page";
</script>

<template>
  <div class="flex justify-center gap-x-20 mb-16 mt-8">
    <div>
      <RouterLink :to="{ name: Page.Home }">Work</RouterLink>
    </div>
    <div>
      <RouterLink :to="{ name: Page.Information }">Information</RouterLink>
    </div>
  </div>
</template>
