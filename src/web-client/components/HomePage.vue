<template>
  <div class="homepage">
    <div class="homepage-image-container">
      <ImageCarousel imageClass="homepage-image" :images="images" :fullWidth="500" :lazyWidth="200" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import homeContext from '@/utils/webpackContexts/home'
import importAll from '@/utils/importAll'

const requiredImages = importAll(homeContext)

export default Vue.extend({
  name: 'HomePage',
  components: {
    ContactDetails,
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
      width: 500px;
    }

    &-container {
      padding-top: 20px;
    }
  }
}
</style>
