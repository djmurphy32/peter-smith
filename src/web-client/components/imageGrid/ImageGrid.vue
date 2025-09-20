<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { computed, ref, useTemplateRef } from "vue";

interface Props {
  images: {
    highResSrc: string;
    medResSrc: string;
    lowResSrc: string;
    key: string;
  }[];
  selectedItem?: number;
}

const { images } = defineProps<Props>();
const imageRefs = useTemplateRef<Element[]>("image");

const emit = defineEmits<{
  (e: "update:selectItem", value: number): void;
}>();

const isMobile = ref(false);
const mediaQuery = window.matchMedia("(max-width: 640px)");
isMobile.value = mediaQuery.matches;
const handleMediaQueryChange = (event: MediaQueryListEvent) => {
  isMobile.value = event.matches;
};
mediaQuery.addEventListener("change", handleMediaQueryChange);

const imgsToRender = ref<number[]>([]);
useIntersectionObserver(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageRefs as any,
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = imageRefs.value?.indexOf(entry.target);
        if (index != undefined && index != -1) {
          if (!imgsToRender.value.includes(index)) {
            imgsToRender.value.push(index);
          }
        }
      }
    });
  },
  { rootMargin: "500px 0px" },
);

const mappedImages = computed(() => {
  return images.map((image, ix) => {
    const src = imgsToRender.value.includes(ix)
      ? isMobile.value
        ? image.highResSrc
        : image.medResSrc
      : "";

    return {
      src,
      key: image.key,
    };
  });
});

const onClick = (index: number) => {
  emit("update:selectItem", index);
};
</script>

<template>
  <div class="relative w-full flex flex-col md:flex-row flex-wrap">
    <div
      v-for="(image, ix) in mappedImages"
      :key="image.key"
      class="cursor-pointer w-full md:w-1/2 lg:w-1/3 p-2"
      @click="() => onClick(ix)"
    >
      <figure ref="image" class="flex items-center h-full min-h-[100px]">
        <img
          v-if="image.src"
          class="w-screen h-auto md:w-[100%]"
          :src="image.src"
          :alt="image.key"
        />
      </figure>
    </div>
  </div>
</template>
