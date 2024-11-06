<script setup lang="ts">
import LazyImage from "@/components/LazyImage.vue";
import { GlobEagerImport } from "@/typings/globImport";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { computed } from "vue";

const importedImgs = import.meta.glob(
  "../../assets/images/portfolio/AH60_TheCollections/*.jpg",
  {
    eager: true,
  }
) as GlobEagerImport;

const images = computed((): { src: string; alt: string }[] => {
  const paths = Object.values(importedImgs).map((module) => module.default);

  return paths.map((image, i) => ({ src: image, alt: `image_${i}` }));
});
</script>

<template>
  <Carousel v-slot="{ canScrollNext }" class="relative w-full max-w-xs">
    <CarouselContent>
      <CarouselItem v-for="img in images" :key="img.src">
        <div class="p-1">
          <Card>
            <CardContent
              class="flex aspect-square items-center justify-center p-6"
            >
              <LazyImage
                :src="img.src"
                :alt="img.alt"
                :full-width="1200"
                :lazy-width="200"
                :css-width="600"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext v-if="canScrollNext" />
  </Carousel>
</template>
