<template>
  <img class="lazy-image" :src="src" :alt="alt" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
})
</script>
