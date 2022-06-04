<template>
  <div class="site-footer">
    <span>&copy; all images Peter Smith {{ year }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SiteFooter',
  computed: {
    year(): string {
      return new Date().getFullYear().toString()
    },
  },
})
</script>

<style lang="scss">
.site-footer {
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
