<template>
  <div class="homepage">
    <div class="homepage-contact-container">
      <ContactDetails />
    </div>
    <div class="homepage-image-container">
      <carousel :perPage="1"
        ><slide> <img class="homepage-image" :src="imagePath" alt="Peter Smith" /> </slide>
        <slide> <img class="homepage-image" :src="imagePath2" alt="Peter Smith" /> </slide>
      </carousel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'
import { Carousel, Slide } from 'vue-carousel'

export default Vue.extend({
  name: 'HomePage',
  components: {
    ContactDetails,
    Carousel,
    Slide,
  },
  data() {
    return {
      imagePath: require('@/assets/images/home/woman.jpg'),
      imagePath2: require('@/assets/images/home/car.jpg'),
    }
  },
})
</script>

<style lang="scss">
.homepage {
  @include media-query-min($mq-lg) {
    margin: 40px 200px;
  }

  &-contact-container {
    padding: 20px 0;
  }

  &-image {
    width: 90%;
    margin: auto;
    display: block;

    @include media-query-min($mq-sm) {
      width: 600px;
    }

    &-container {
      @include media-query-min($mq-md) {
        text-align: center;
      }
    }
  }
}
</style>
