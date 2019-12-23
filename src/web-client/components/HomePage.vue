<template>
  <div class="homepage">
    <div class="homepage-contact-container">
      <ContactDetails />
    </div>
    <div class="homepage-image-container">
      <img class="homepage-image" :src="`${image}?nf_resize=fit&w=500`" alt="Peter Smith" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    ContactDetails,
  },
  data() {
    return {
      image: require('@/assets/images/home/woman.jpg'),
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
