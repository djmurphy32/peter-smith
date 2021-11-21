<template>
  <div class="portfolio">
    <ul class="portfolio-items-container">
      <li v-for="(item, i) in images" :key="i" class="portfolio-item">
        <LazyImage image-class="portfolio-image" :src="item.path" :full-width="400" :lazy-width="50" :alt="item.name" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LazyImage from '@/components/LazyImage.vue'
import { Page } from '@/router/Page'
import portfolioContext from '@/utils/webpackContexts/portfolio'
import importAll from '@/utils/importAll'

const requiredImages = importAll(portfolioContext)

export default Vue.extend({
  name: 'Portfolio',
  components: {
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
    margin: 20px 2%;
    @include media-query-min($mq-lg) {
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
