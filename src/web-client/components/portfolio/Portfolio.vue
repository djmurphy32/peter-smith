<script setup lang="ts">
import { GlobEagerImport } from "@/typings/globImport";
import { computed, ref } from "vue";
import ImageCarousel from "@/components/imageCarousel/ImageCarousel.vue";
import ImageGrid from "@/components/imageGrid/ImageGrid.vue";
import Button from "@/components/button/Button.vue";
import Sprite from "@/components/sprite/Sprite.vue";

const june2025 = import.meta.glob(
  "../../assets/images/portfolio/June_2025/*.jpg",
  {
    eager: true,
  }
) as GlobEagerImport;

const imagesSrcs = computed((): string[] => {
  const juneSrcs = Object.values(june2025).map((module) =>
    encodeURIComponent(module.default)
  );
  return [...juneSrcs.sort()];
});

const images = computed<
  { highResSrc: string; medResSrc: string; lowResSrc: string; key: string }[]
>(() => {
  return imagesSrcs.value.map((origSrc) => {
    return {
      highResSrc: `/.netlify/images?url=${origSrc}&w=1200`,
      medResSrc: `/.netlify/images?url=${origSrc}&w=600`,
      lowResSrc: `/.netlify/images?url=${origSrc}&w=200`,
      key: origSrc,
    };
  });
});

const showGrid = ref(false);

const toggleShowGrid = () => {
  showGrid.value = !showGrid.value;
};

const selectedGridItem = ref<number>();
const onClickGridItem = (index: number) => {
  selectedGridItem.value = index;
  toggleShowGrid();
};
</script>

<template>
  <ImageGrid
    v-if="showGrid"
    :images="images"
    @update:select-item="onClickGridItem"
  />
  <template v-else>
    <div class="flex flex-col gap-2">
      <ImageCarousel
        :images="
          images.map((img) => ({
            key: img.key,
            src: img.highResSrc,
          }))
        "
        :start-index="selectedGridItem"
      />
      <div class="flex justify-center">
        <Button
          @click="toggleShowGrid"
          variant="ghost"
          aria-label="View image grid"
          ><Sprite icon="grid" />
        </Button>
      </div>
    </div>
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
