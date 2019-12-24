<template>
  <div class="portfolio">
    <ContactDetails />
    <ul class="portfolio-items-container">
      <li class="portfolio-item" v-for="(item, i) in images" :key="i">
        <LazyImage class="portfolio-image" :src="`${item.path}?nf_resize=fit&w=400`" :alt="item.name" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'
import LazyImage from '@/components/LazyImage.vue'
import { Page } from '@/router/Page'
import portfolioContext from '@/utils/webpackContexts/portfolio'
import importAll from '@/utils/importAll'

const requiredImages = importAll(portfolioContext)

export default Vue.extend({
  name: 'Portfolio',
  components: {
    ContactDetails,
    LazyImage,
  },
  data() {
    return {
      imageRouteName: Page.Image,
      images: Object.keys(requiredImages).map((image, i) => ({ path: requiredImages[image], name: `image_${i}` })),
    }
  },
})
</script>

<style lang="scss">
.portfolio {
  &-items-container {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
  }

  &-item {
    flex: 1 0 45%;
    margin: 10px 2%;
    @include media-query-min($mq-md) {
      flex: 1 0 28%;
      margin: 10px 2%;
    }
  }

  &-image {
    width: 100%;
    margin: auto;
    display: block;
  }
}
</style>
