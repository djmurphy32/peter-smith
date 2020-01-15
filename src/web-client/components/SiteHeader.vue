<template>
  <div class="site-header">
    <ContactDetails />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'

export default Vue.extend({
  name: 'SiteHeader',
  components: {
    ContactDetails,
  },
})
</script>

<style lang="scss">
.site-header {
  margin-bottom: 10px;
}
</style>
