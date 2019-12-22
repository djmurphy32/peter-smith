<template>
  <div class="homepage">
    <div class="homepage-contact-container">
      <ContactDetails />
    </div>
    <div class="homepage-image-container">
      <carousel :perPage="1" :paginationEnabled="false" :autoplay="true" :loop="true"
        ><slide v-for="(img, i) in images" :key="i">
          <div>
            <img class="homepage-image" :src="`${img}?nf_resize=fit&w=33`" alt="Peter Smith" />
          </div>
        </slide>
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
      images: [require('@/assets/images/home/woman.jpg')],
    }
  },
})
</script>

<style lang="scss">
.homepage {
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
      padding-top: 40px;
    }
  }
}
</style>
