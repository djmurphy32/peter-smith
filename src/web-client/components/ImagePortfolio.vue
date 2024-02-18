<template>
  <div class="portfolio">
    <PortfolioHeading :title="props.title" :body="props.body" :footer="props.footer" />
    <div v-if="props.videoLink" :style="`width:${contentWidth}px;`">
      <div style="padding: 350px 0 0; position: relative">
        <iframe
          :src="props.videoLink"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          title="4. POP - Mowalola"
        >
        </iframe>
      </div>
    </div>

    <LazyImage
      v-for="(img, ix) in images"
      :key="ix"
      :src="img.src"
      :alt="img.alt"
      :full-width="1200"
      :lazy-width="200"
      :css-width="contentWidth"
    />
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/named
import { computed, PropType } from 'vue';
import PortfolioHeading from './PortfolioHeading.vue';
import LazyImage from '@/components/LazyImage.vue';
import { GlobEagerImport } from '@/typings/globImport';

const props = defineProps({
  title: { type: String, required: true },
  body: { type: Array as PropType<string[]>, required: true },
  footer: { type: Array as PropType<string[]>, required: false, default: () => [] },
  importedImages: { type: Object as PropType<GlobEagerImport>, required: true },
  videoLink: { type: String || null, required: false },
});

const images = computed((): { src: string; alt: string }[] => {
  const paths = Object.values(props.importedImages).map((module) => module.default);

  return paths.map((image, i) => ({ src: image, alt: `image_${i}` }));
});

const contentWidth = 600;
</script>

<style scoped lang="scss">
.portfolio {
  margin-bottom: 40px;
}
</style>
