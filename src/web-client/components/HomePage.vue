<template>
  <div class="homepage">
    <div class="homepage-image-container">
      <LazyImage imageClass="homepage-image" :src="image" :fullWidth="500" :lazyWidth="200" alt="Peter Smith" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'
import LazyImage from '@/components/LazyImage.vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    ContactDetails,
    LazyImage,
  },
  data() {
    return {
      image: require('@/assets/images/home/wkend_soldiers.jpg'),
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
