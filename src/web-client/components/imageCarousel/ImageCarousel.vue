<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import type { CarouselApi } from "@/components/carousel";
import { ref, watch } from "vue";
import { watchOnce } from "@vueuse/core";

interface Props {
  images: { src: string; key: string }[];
  startIndex?: number;
}

const { images, startIndex } = defineProps<Props>();

const api = ref<CarouselApi>();
function setApi(val: CarouselApi) {
  api.value = val;
}

const currentCarouselItem = ref(startIndex ?? 0);
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
  currentCarouselItem.value < images.length - 1
    ? currentCarouselItem.value + 1
    : 0,
  currentCarouselItem.value > 0
    ? currentCarouselItem.value - 1
    : images.length - 1,
]);

watch(currentCarouselItem, (val) => {
  if (viewedCarouselItems.value.length === images.length) {
    return;
  }

  if (!viewedCarouselItems.value.includes(val)) {
    viewedCarouselItems.value.push(val);
  }

  const nextItem = val < images.length - 1 ? val + 1 : 0;
  if (
    nextItem < images.length &&
    !viewedCarouselItems.value.includes(nextItem)
  ) {
    viewedCarouselItems.value.push(nextItem);
  }

  const prevItem = val > 0 ? val - 1 : images.length - 1;
  if (prevItem > -1 && !viewedCarouselItems.value.includes(prevItem)) {
    viewedCarouselItems.value.push(prevItem);
  }
});
</script>

<template>
  <Carousel
    v-slot="{ canScrollPrev, canScrollNext }"
    @init-api="setApi"
    :opts="{
      loop: true,
      startIndex: startIndex ?? 0,
    }"
    class="w-full max-w-xl carousel-width"
  >
    <CarouselContent>
      <CarouselItem
        v-for="(img, ix) in images"
        :key="img.key"
        class="px-0.5 content-center"
        :class="{
          'animate-nudge': !hasInteractedWithCarousel,
        }"
      >
        <div class="relative flex justify-center">
          <div
            v-if="canScrollPrev"
            @click="api?.scrollPrev()"
            class="cursor-pointer absolute top-0 left-0 w-1/2 h-full bg-black bg-opacity-50 z-10"
          ></div>
          <div
            v-if="canScrollNext"
            @click="api?.scrollNext()"
            class="cursor-pointer absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-50 z-10"
          ></div>
          <div class="max-h-[600px] flex justify-center carousel-width">
            <figure>
              <img
                v-if="viewedCarouselItems.includes(ix)"
                :src="img.src"
                :alt="img.key"
                class="object-contain w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

<style scoped>
.carousel-width {
  max-width: calc(100vw - 2rem);
}
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
  animation-fill-mode: forwards;
}
</style>
