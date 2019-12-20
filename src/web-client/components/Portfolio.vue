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
          name: '001',
          path: require('@/assets/images/portfolio/001.jpg'),
        },
        {
          name: '002',
          path: require('@/assets/images/portfolio/002.jpg'),
        },
        {
          name: '003',
          path: require('@/assets/images/portfolio/003.jpg'),
        },
        {
          name: '004',
          path: require('@/assets/images/portfolio/004.jpg'),
        },
        {
          name: '005',
          path: require('@/assets/images/portfolio/005.jpg'),
        },
        {
          name: '006',
          path: require('@/assets/images/portfolio/006.jpg'),
        },
        {
          name: '007',
          path: require('@/assets/images/portfolio/007.jpg'),
        },
        {
          name: '008',
          path: require('@/assets/images/portfolio/008.jpg'),
        },
        {
          name: '009',
          path: require('@/assets/images/portfolio/009.jpg'),
        },
        {
          name: '010',
          path: require('@/assets/images/portfolio/010.jpg'),
        },
        {
          name: '011',
          path: require('@/assets/images/portfolio/011.jpg'),
        },
        {
          name: '012',
          path: require('@/assets/images/portfolio/012.jpg'),
        },
        {
          name: '013',
          path: require('@/assets/images/portfolio/013.jpg'),
        },
        {
          name: '014',
          path: require('@/assets/images/portfolio/014.jpg'),
        },
        {
          name: '015',
          path: require('@/assets/images/portfolio/015.jpg'),
        },
        {
          name: '016',
          path: require('@/assets/images/portfolio/016.jpg'),
        },
        {
          name: '017',
          path: require('@/assets/images/portfolio/017.jpg'),
        },
        {
          name: '018',
          path: require('@/assets/images/portfolio/018.jpg'),
        },
        {
          name: '019',
          path: require('@/assets/images/portfolio/019.jpg'),
        },
        {
          name: '020',
          path: require('@/assets/images/portfolio/020.jpg'),
        },
        {
          name: '021',
          path: require('@/assets/images/portfolio/021.jpg'),
        },
        {
          name: '022',
          path: require('@/assets/images/portfolio/022.jpg'),
        },
        {
          name: '023',
          path: require('@/assets/images/portfolio/023.jpg'),
        },
        {
          name: '024',
          path: require('@/assets/images/portfolio/024.jpg'),
        },
        {
          name: '025',
          path: require('@/assets/images/portfolio/025.jpg'),
        },
        {
          name: '026',
          path: require('@/assets/images/portfolio/026.jpg'),
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
