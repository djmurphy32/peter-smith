<script setup lang="ts">
import { GlobEagerImport } from "@/typings/globImport";
import { computed, ref } from "vue";
import ImageCarousel from "@/components/imageCarousel/ImageCarousel.vue";
import ImageGrid from "@/components/imageGrid/ImageGrid.vue";
import Button from "../button/Button.vue";

const v2Imgs = import.meta.glob("../../assets/images/portfolio/V2/*.jpg", {
  eager: true,
}) as GlobEagerImport;

const fontainesImgs = import.meta.glob(
  "../../assets/images/portfolio/FontainesDC/*.jpg",
  {
    eager: true,
  }
) as GlobEagerImport;

const imagesSrcs = computed((): string[] => {
  const v2Srcs = Object.values(v2Imgs).map((module) =>
    encodeURIComponent(module.default)
  );

  const fontainesSrcs = Object.values(fontainesImgs).map((module) =>
    encodeURIComponent(module.default)
  );
  return [...fontainesSrcs.sort(), ...v2Srcs.sort()];
});

const images = computed<{ src: string; lowResSrc: string; key: string }[]>(
  () => {
    return imagesSrcs.value.map((origSrc) => {
      return {
        src: `/.netlify/images?url=${origSrc}&w=1200`,
        lowResSrc: `/.netlify/images?url=${origSrc}&w=200`,
        key: origSrc,
      };
    });
  }
);

const showGrid = ref(false);

const toggleShowGrid = () => {
  showGrid.value = !showGrid.value;
};

const selectedItem = ref<number>();

const onClickGridItem = (index: number) => {
  selectedItem.value = index;
  toggleShowGrid();
};

const onUpdateCarouselItem = (index: number) => {
  selectedItem.value = index;
};
</script>

<template>
  <ImageGrid
    v-if="showGrid"
    :images="images"
    :selected-item="selectedItem"
    @update:select-item="onClickGridItem"
  />
  <template v-else>
    <ImageCarousel
      :images="images"
      :start-index="selectedItem"
      @update:selected-item="onUpdateCarouselItem"
    />
    <Button @click="toggleShowGrid"> Show grid </Button>
  </template>
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
