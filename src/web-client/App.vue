<script setup lang="ts">
import Name from "@/components/Name.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import logo from "@/assets/logo.png";
import { useHead } from "@unhead/vue";

const title = "peter joseph smith";
const host = window.location.host;
const logoUrl = `${window.location.protocol}//${host}${logo}`;
useHead({
  title,
  meta: [
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:image",
      content: logoUrl,
    },
  ],
});
</script>

<template>
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
