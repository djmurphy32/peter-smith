<script setup lang="ts">
import Name from "@/components/name/Name.vue";
import SiteFooter from "@/components/siteFooter/SiteFooter.vue";
import SpriteSheet from "./components/sprite/SpriteSheet.vue";
</script>

<template>
  <SpriteSheet />
  <main class="bg-neutral">
    <div
      class="flex flex-col min-h-screen md:grid md:grid-cols-[200px,auto,200px] lg:grid-cols-[250px,auto,250px] xl:grid-cols-[300px,auto,300px]"
    >
      <div class="flex justify-center">
        <div class="md:fixed md:top-1/2 md:transform md:-translate-y-1/2">
          <Name />
        </div>
      </div>
      <div class="flex-grow grid grid-rows-[1fr,auto] md:pt-16">
        <div class="flex justify-center items-end">
          <router-view />
        </div>
        <div class="self-end">
          <SiteFooter />
        </div>
      </div>
    </div>
  </main>
</template>
