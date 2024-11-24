<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { computed, ref, useTemplateRef } from "vue";

interface Props {
  images: { src: string; lowResSrc: string; key: string }[];
  selectedItem?: number;
}

const { images } = defineProps<Props>();
const imageRefs = useTemplateRef<Element[]>("image");

const emit = defineEmits<{
  (e: "update:selectItem", value: number): void;
}>();

const fullItems = ref<number[]>([]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
useIntersectionObserver(imageRefs as any, (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = imageRefs.value?.indexOf(entry.target);
      if (index !== undefined && index >= -1) {
        if (!fullItems.value.includes(index)) {
          fullItems.value.push(index);
        }
      }
    }
  });
});

const lowResItems = ref<number[]>([]);
useIntersectionObserver(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageRefs as any,
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = imageRefs.value?.indexOf(entry.target);
        if (index) {
          if (!lowResItems.value.includes(index)) {
            lowResItems.value.push(index);
          }
        }
      }
    });
  },
  { rootMargin: "150px 0px 150px 0px" },
);

const mappedImages = computed(() => {
  return images.map((image, ix) => {
    let src = fullItems.value.includes(ix) ? image.src : "";

    if (!src && lowResItems.value.includes(ix)) {
      src = image.lowResSrc;
    }

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
      class="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 p-2"
      @click="() => onClick(ix)"
    >
      <div ref="image" class="flex items-center h-full min-h-[100px]">
        <img v-if="image.src" class="w-screen md:w-[100%]" :src="image.src" />
      </div>
    </div>
  </div>
</template>
