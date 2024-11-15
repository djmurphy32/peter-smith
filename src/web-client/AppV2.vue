<script setup lang="ts">
import Sidebar from "@/components/v2/Sidebar.vue";
import SiteFooter from "@/components/v2/SiteFooter.vue";
</script>

<template>
  <main class="bg-neutral min-h-screen">
    <div class="m-4 md:m-0 md:grid md:grid-cols-[200px,auto,200px] gap-4">
      <Sidebar />

      <div class="grid grid-rows-[1fr,auto] pt-8 md:pt-16">
        <div class="flex justify-center items-center">
          <router-view />
        </div>
        <div class="self-end">
          <SiteFooter />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  font-family: var(--nitti-font-family);
  display: grid;
  min-height: 100vh;
  max-width: 100vw;
}
</style>
