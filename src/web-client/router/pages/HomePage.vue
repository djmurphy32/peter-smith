<template>
  <div class="homepage">
    <div class="homepage-image-container">
      <ImageCarousel image-class="homepage-image" :images="images" :full-width="1000" :lazy-width="200" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import homeContext from '@/utils/webpackContexts/home'
import importAll from '@/utils/importAll'

const requiredImages = importAll(homeContext)

export default Vue.extend({
  name: 'HomePage',
  components: {
    ImageCarousel,
  },
  data() {
    return {
      images: Object.keys(requiredImages).map((image, i) => ({ src: requiredImages[image], alt: `image_${i}` })),
    }
  },
})
</script>

<style lang="scss">
.homepage {
  &-image {
    width: 90%;
    margin: auto;
    display: block;

    @include media-query-min($mq-sm) {
      width: 750px;
    }

    &-container {
      padding-top: 20px;
    }
  }
}
</style>
