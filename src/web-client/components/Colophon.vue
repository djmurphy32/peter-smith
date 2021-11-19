<template>
  <div class="colophon">
    <span>&copy; all images Peter Smith {{ year }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Colphon',
  computed: {
    year(): string {
      return new Date().getFullYear().toString()
    },
  },
})
</script>
