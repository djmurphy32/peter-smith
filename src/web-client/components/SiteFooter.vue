<template>
  <div class="site-footer">
    <Colophon />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Colophon from '@/components/Colophon.vue'

export default Vue.extend({
  name: 'SiteFooter',
  components: {
    Colophon,
  },
})
</script>

<style lang="scss">
.site-footer {
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
