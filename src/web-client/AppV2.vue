<script setup lang="ts">
import Sidebar from "@/components/v2/Sidebar.vue";
import SiteFooter from "@/components/v2/SiteFooter.vue";
</script>

<template>
  <main class="bg-neutral h-screen grid grid-rows-[1fr,auto] gap-4">
    <div class="grid grid-cols-[1fr,auto,1fr] gap-4">
      <Sidebar />

      <router-view />
    </div>
    <SiteFooter />
  </main>
</template>

<style scoped>
main {
  display: grid;
  min-height: 100vh;
  max-width: 100vw;
}
</style>
