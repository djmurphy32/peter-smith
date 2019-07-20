<template>
  <img :src="path" :alt="alt" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ImagePage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: String,
  },
})
</script>
