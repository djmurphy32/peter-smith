<script setup lang="ts">
import { GlobEagerImport } from "@/typings/globImport";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import type { CarouselApi } from "@/components/carousel";
import { computed, ref, watch } from "vue";
import { watchOnce } from "@vueuse/core";

const importedImgs = import.meta.glob(
  "../../assets/images/portfolio/AH_Magazine/*.jpg",
  {
    eager: true,
  },
) as GlobEagerImport;

const imagesSrcs = computed((): string[] =>
  Object.values(importedImgs).map((module) => module.default),
);

const api = ref<CarouselApi>();
function setApi(val: CarouselApi) {
  api.value = val;
}

const currentCarouselItem = ref(0);
const hasInteractedWithCarousel = ref(false);
watchOnce(api, (api) => {
  if (!api) {
    return;
  }
  currentCarouselItem.value = api.selectedScrollSnap();

  api.on("select", () => {
    hasInteractedWithCarousel.value = true;
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
    return {
      src: `/.netlify/images?url=${origSrc}&w=1200`,
      key: origSrc,
    };
  });
});
</script>

<template>
  <Carousel
    v-slot="{ canScrollPrev, canScrollNext }"
    @init-api="setApi"
    :opts="{
      loop: true,
    }"
    class="relative w-full max-w-xl"
  >
    <CarouselContent>
      <CarouselItem
        v-for="img in images"
        :key="img.key"
        class="px-0.5 content-center"
        :class="{
          'animate-nudge': !hasInteractedWithCarousel,
        }"
      >
        <div class="relative flex content-center">
          <div
            v-if="canScrollPrev"
            @click="api?.scrollPrev()"
            class="absolute top-0 left-0 w-1/2 h-full bg-black bg-opacity-50 z-10"
          ></div>
          <div
            v-if="canScrollNext"
            @click="api?.scrollNext()"
            class="absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-50 z-10"
          ></div>
          <div class="w-full flex justify-center">
            <img v-if="img.src" :src="img.src" class="max-h-[600px]" />
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

<style scoped>
@keyframes nudge {
  0%,
  30%,
  70%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
}

.animate-nudge {
  animation: nudge 5s ease-in-out 3;
  animation-delay: 2s;
}
</style>
