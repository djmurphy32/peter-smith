<template>
  <div class="homepage">
    <div class="homepage-container">
      <div class="homepage-contact-container">
        <ContactDetails />
      </div>
      <div class="homepage-image-container">
        <carousel :perPage="1" :loop="true"
          ><slide> <img class="homepage-image" :src="womanImgPath" alt="Peter Smith" /> </slide>
          <slide> <img class="homepage-image" :src="carImgPath" alt="Peter Smith" /> </slide>
        </carousel>
      </div>
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
      womanImgPath: require('@/assets/images/home/woman.jpg'),
      carImgPath: require('@/assets/images/home/car.jpg'),
    }
  },
})
</script>

<style lang="scss">
.homepage {
  &-container {
    display: flex;
  }

  &-contact-container {
    display: inline-block;
  }

  &-image {
    width: 90%;
    margin: auto;
    display: block;

    @include media-query-min($mq-sm) {
      width: 500px;
    }

    &-container {
      display: inline-block;
      padding-top: 40px;
      @include media-query-min($mq-md) {
        text-align: center;
      }
    }
  }
}
</style>
