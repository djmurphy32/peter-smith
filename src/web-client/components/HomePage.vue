<template>
  <div class="home-page">
    <div class="home-page-image">
      <ImageViewer altText="Peter Smith" :url="imagePath" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ImageViewer from '@/components/Image.vue'
import ContactDetails from '@/components/ContactDetails.vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    ImageViewer,
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
.home-page {
  @include media-query-min($mq-lg) {
    margin: 40px 200px;
  }

  &-image {
    @include media-query-min($mq-md) {
      text-align: center;
    }
  }
}
</style>
