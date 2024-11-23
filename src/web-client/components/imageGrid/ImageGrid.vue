<script setup lang="ts">
interface Props {
  images: { src: string; lowResSrc: string; key: string }[];
}

const { images } = defineProps<Props>();
</script>

<template>
  <div class="relative w-full flex flex-col md:flex-row flex-wrap">
    <div
      v-for="image in images"
      :key="image.key"
      class="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 p-2"
    >
      <div class="flex items-center h-full">
        <img class="w-screen md:w-[100%]" :src="image.lowResSrc" />
      </div>
    </div>
  </div>
</template>
