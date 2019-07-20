<template>
  <div class="home-page">
    <ImageViewer altText="Peter Smith" :url="imagePath"></ImageViewer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ImageViewer from '@/components/Image.vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    ImageViewer,
  },
  data() {
    return {
      imagePath: require('@/assets/home.jpg'),
    }
  },
})
</script>
