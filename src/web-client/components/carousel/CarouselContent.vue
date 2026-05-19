<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { cn } from "@/lib/utils";
import { useCarousel } from "./useCarousel";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<WithClassAsProps>();

// @ts-expect-error: createInjectionState unwraps the Ref type so vue-tsc can't see
// carouselRef is a Ref — at runtime it IS a Ref and ref="carouselRef" works correctly
const { carouselRef } = useCarousel();
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div :class="cn('flex', props.class)" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>
