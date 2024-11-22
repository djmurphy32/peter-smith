<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import type { CarouselApi } from "@/components/carousel";
import { ref } from "vue";
import { watchOnce } from "@vueuse/core";

interface Props {
  images: { src: string; key: string }[];
  startIndex?: number;
}

const { images } = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:viewedIndex", value: number): void;
}>();

const api = ref<CarouselApi>();
function setApi(val: CarouselApi) {
  api.value = val;
}

const hasInteractedWithCarousel = ref(false);
watchOnce(api, (api) => {
  if (!api) {
    return;
  }

  emit("update:viewedIndex", api.selectedScrollSnap());

  api.on("select", () => {
    hasInteractedWithCarousel.value = true;

    emit("update:viewedIndex", api.selectedScrollSnap());
  });
});
</script>

<template>
  <Carousel
    v-slot="{ canScrollPrev, canScrollNext }"
    @init-api="setApi"
    :opts="{
      loop: true,
      startIndex,
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
          <div
            class="max-h-[600px] flex justify-center"
            :style="{ maxWidth: 'calc(100vw - 1rem)' }"
          >
            <img v-if="img.src" :src="img.src" class="object-contain" />
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
  animation-fill-mode: forwards;
}
</style>
