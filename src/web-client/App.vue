<script setup lang="ts">
import Name from "@/components/name/Name.vue";
import SiteFooter from "@/components/siteFooter/SiteFooter.vue";
import SpriteSheet from "./components/sprite/SpriteSheet.vue";
</script>

<template>
  <SpriteSheet />
  <main class="bg-neutral min-h-screen grid">
    <div
      class="m-4 flex flex-col md:m-0 md:grid md:grid-cols-[200px,auto,200px] gap-4"
    >
      <div class="flex justify-center">
        <div class="md:fixed md:top-1/2 md:transform md:-translate-y-1/2">
          <Name />
        </div>
      </div>
      <div class="flex-grow grid grid-rows-[1fr,auto] md:pt-16">
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
