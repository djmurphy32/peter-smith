<script setup lang="ts">
import { GlobEagerImport } from "@/typings/globImport";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import type { CarouselApi } from "@/components/carousel";
import { computed, ref, watch } from "vue";
import { watchOnce } from "@vueuse/core";

const importedImgs = import.meta.glob(
  "../../assets/images/portfolio/AH60_TheCollections/*.jpg",
  {
    eager: true,
  }
) as GlobEagerImport;

const imagesSrcs = computed((): string[] =>
  Object.values(importedImgs).map((module) => module.default)
);

const api = ref<CarouselApi>();
function setApi(val: CarouselApi) {
  api.value = val;
}

const currentCarouselItem = ref(0);
watchOnce(api, (api) => {
  if (!api) {
    return;
  }
  currentCarouselItem.value = api.selectedScrollSnap();

  api.on("select", () => {
    currentCarouselItem.value = api.selectedScrollSnap();
  });
});

const viewedCarouselItems = ref<number[]>([
  currentCarouselItem.value,
  currentCarouselItem.value + 1,
  imagesSrcs.value.length - 1,
]);

watch(currentCarouselItem, (val) => {
  if (viewedCarouselItems.value.length === imagesSrcs.value.length) {
    return;
  }

  if (!viewedCarouselItems.value.includes(val)) {
    viewedCarouselItems.value.push(val);
  }

  const nextItem = val + 1;
  if (!viewedCarouselItems.value.includes(nextItem)) {
    viewedCarouselItems.value.push(nextItem);
  }

  const prevItem = val - 1;
  if (!viewedCarouselItems.value.includes(prevItem)) {
    viewedCarouselItems.value.push(prevItem);
  }
});

const images = computed<{ src: string; key: string }[]>(() => {
  return imagesSrcs.value.map((origSrc, ix) => {
    const isViewed = viewedCarouselItems.value.includes(ix);
    if (!isViewed) {
      return { src: "", key: origSrc };
    }
    return { src: `/.netlify/images?url=${origSrc}&w=1200`, key: origSrc };
  });
});
</script>

<template>
  <Carousel
    v-slot="{ canScrollNext }"
    @init-api="setApi"
    :opts="{
      loop: true,
    }"
    class="relative w-full max-w-xl"
  >
    <CarouselContent>
      <CarouselItem v-for="img in images" :key="img.key">
        <div class="p-1">
          <img v-if="img.src" :src="img.src" class="w-[600px]" />
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext v-if="canScrollNext" />
  </Carousel>
</template>
