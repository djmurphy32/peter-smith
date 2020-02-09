<template>
  <div class="homepage">
    <div class="homepage-image-container">
      <ImageCarousel imageClass="homepage-image" :images="images" :fullWidth="500" :lazyWidth="200" />
      <!-- <LazyImage imageClass="homepage-image" :src="image" :fullWidth="500" :lazyWidth="200" alt="Peter Smith" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    ContactDetails,
    ImageCarousel,
  },
  data() {
    return {
      image: require('@/assets/images/home/wkend_soldiers.jpg'),
    }
  },
  computed: {
    images(): Array<{ src: string; alt: string }> {
      return [{ src: this.image, alt: 'Peter Smith' }]
    },
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
