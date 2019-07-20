<template>
  <div class="image-container">
    <img class="image-viewer" :src="url" :alt="altText" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ImageViewer',
  props: {
    url: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.image {
  &-viewer {
    width: 250px;
    margin: auto;
    display: block;

    @include media-query-min($mq-sm) {
      width: 400px;
    }
  }
}
</style>
