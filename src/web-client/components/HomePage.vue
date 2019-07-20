<template>
  <div class="homepage">
    <div class="homepage-image-container">
      <img class="homepage-image" :src="imagePath" alt="Peter Smith" />
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
      imagePath: require('@/assets/home.jpg'),
    }
  },
})
</script>

<style lang="scss">
.homepage {
  @include media-query-min($mq-lg) {
    margin: 40px 200px;
  }

  &-image {
    width: 90%;
    margin: auto;
    display: block;

    @include media-query-min($mq-sm) {
      width: 500px;
    }

    &-container {
      @include media-query-min($mq-md) {
        text-align: center;
      }
    }
  }
}
</style>
