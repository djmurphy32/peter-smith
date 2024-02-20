<template>
  <div ref="rootEl" :class="['lazy-image__root', { 'lazy-image__root--unloaded': !imageLoaded }]">
    <img
      v-if="renderImg"
      :class="['lazy-image__img', imageClass, { 'lazy-image__img--lazy': !inViewport }]"
      :style="`width: ${imageWidth}px;`"
      :src="imageSource"
      :alt="alt"
      @load="imageLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  fullWidth: { type: Number, required: true },
  lazyWidth: { type: Number, required: true },
  imageClass: { type: String, default: undefined },
  cssWidth: { type: Number, default: undefined },
});

const rootEl = ref<Element | null>(null);
const inViewPortObs = ref<IntersectionObserver | null>(null);
const nearViewPortObs = ref<IntersectionObserver | null>(null);
const inViewport = ref(false);
const renderImg = ref(false);
const imageLoaded = ref(false);

const imageWidth = computed((): number => {
  return props.cssWidth ?? props.fullWidth;
});

const imageSource = computed((): string => {
  const widthParam = inViewport.value ? `w=${props.fullWidth}` : `w=${props.lazyWidth}`;

  return `/.netlify/images?url=${props.src}&${widthParam}`;
})

onMounted(() => {
  attachObservers();
});
onUnmounted(() => {
  if ('IntersectionObserver' in window) {
    inViewPortObs.value?.disconnect();
  }
});

const attachObservers = (): void => {
  if (rootEl.value) {
    inViewPortObs.value = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        inViewport.value = true;
        inViewPortObs.value?.disconnect();
      }
    });
    inViewPortObs.value.observe(rootEl.value);

    nearViewPortObs.value = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          renderImg.value = true;
          nearViewPortObs.value?.disconnect();
        }
      },
      { rootMargin: '2000px' }
    );
    nearViewPortObs.value.observe(rootEl.value);
  }
};
const imageLoad = (): void => {
  imageLoaded.value = true;
};
</script>
<style lang="scss" scoped>
.lazy-image {
  &__root {
    display: grid;
    margin-bottom: 7px;

    &--unloaded {
      height: 350px;
    }
  }

  &__img {
    max-width: 100%;

    &--lazy {
      filter: blur(5px);
    }
  }
}
</style>
