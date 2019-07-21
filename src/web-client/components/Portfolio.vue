<template>
  <div class="portfolio">
    <ContactDetails />
    <ul class="portfolio-items-container">
      <li class="portfolio-item" v-for="(item, i) in images" :key="i">
        <img class="portfolio-image" :src="item.path" :alt="item.name" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'
import { Page } from '@/router/Page'

export default Vue.extend({
  name: 'Portfolio',
  components: {
    ContactDetails,
  },
  data() {
    return {
      imageRouteName: Page.Image,
      images: [
        {
          name: 'Test',
          path: require('@/assets/home.jpg'),
        },
        {
          name: 'Test',
          path: require('@/assets/home.jpg'),
        },
        {
          name: 'Test',
          path: require('@/assets/home.jpg'),
        },
        {
          name: 'Test',
          path: require('@/assets/home.jpg'),
        },
        {
          name: 'Test',
          path: require('@/assets/home.jpg'),
        },
        {
          name: 'Test',
          path: require('@/assets/home.jpg'),
        },
        {
          name: 'Test',
          path: require('@/assets/home.jpg'),
        },
        {
          name: 'Test',
          path: require('@/assets/home.jpg'),
        },
      ],
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
