<template>
  <div class="portfolio">
    <ul class="portfolio-items-container">
      <li class="portfolio-item" v-for="(item, i) in images" :key="i">
        <ImageViewer :alt="item.name" :url="item.path" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ImageViewer from '@/components/Image.vue'

export default Vue.extend({
  name: 'Portfolio',
  components: {
    ImageViewer,
  },
  data() {
    return {
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
  }

  &-item {
    padding: 10px;
  }
}
</style>
