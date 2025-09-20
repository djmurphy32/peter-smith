<script setup lang="ts">
import { Page } from "@/router/Page";

const links = [
  { name: "Work", to: { name: Page.Home } },
  { name: "Information", to: { name: Page.Information } },
];
</script>

<template>
  <nav>
    <ul
      class="flex justify-evenly gap-x-20 mb-16 mt-8 lg:max-w-[600px] lg:mx-auto"
    >
      <li v-for="link in links" :key="link.name" class="text-center flex-1">
        <RouterLink :to="link.to">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
