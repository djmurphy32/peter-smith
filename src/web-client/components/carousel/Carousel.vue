<script setup lang="ts">
import type {
  CarouselEmits,
  CarouselProps,
  WithClassAsProps,
} from "./interface";
import { cn } from "@/lib/utils";
import { useProvideCarousel } from "./useCarousel";
import { onKeyStroke } from "@vueuse/core";

const props = withDefaults(defineProps<CarouselProps & WithClassAsProps>(), {
  orientation: "horizontal",
});

const emits = defineEmits<CarouselEmits>();

const {
  canScrollNext,
  canScrollPrev,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
} = useProvideCarousel(props, emits);

defineExpose({
  canScrollNext,
  canScrollPrev,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
});

// function onKeyDown(event: KeyboardEvent) {
//   const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
//   const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";

//   if (event.key === prevKey) {
//     event.preventDefault();
//     scrollPrev();

//     return;
//   }

//   if (event.key === nextKey) {
//     event.preventDefault();
//     scrollNext();
//   }
// }

onKeyStroke(
  "ArrowLeft",
  (event) => {
    event.preventDefault();
    scrollPrev();
  },
  { target: carouselRef }
);
</script>

<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
  >
    <slot
      :can-scroll-next
      :can-scroll-prev
      :carousel-api
      :carousel-ref
      :orientation
      :scroll-next
      :scroll-prev
    />
  </div>
</template>
