<script setup lang="ts">
import Name from "@/components/name/Name.vue";
import SiteFooter from "@/components/siteFooter/SiteFooter.vue";
import SpriteSheet from "./components/sprite/SpriteSheet.vue";
</script>

<template>
  <SpriteSheet />
  <div class="bg-neutral">
    <div
      class="flex flex-col min-h-screen md:grid md:grid-cols-[200px_auto_200px] lg:grid-cols-[250px_auto_250px] xl:grid-cols-[300px_auto_300px]"
    >
      <header>
        <div class="flex justify-center">
          <div
            class="py-4 md:py-0 md:fixed md:top-1/2 md:transform md:-translate-y-1/2"
          >
            <Name />
          </div>
        </div>
      </header>
      <div class="grow grid grid-rows-[1fr_auto] md:pt-16 px-4 md:px-0">
        <main class="flex justify-center items-end">
          <router-view />
        </main>
        <div class="self-end">
          <SiteFooter />
        </div>
      </div>
    </div>
  </div>
</template>
