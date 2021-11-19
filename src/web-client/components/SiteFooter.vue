<template>
  <div class="site-footer">
    <ContactDetails />
    <Colophon />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'
import Colophon from '@/components/Colophon.vue'

export default Vue.extend({
  name: 'SiteFooter',
  components: {
    ContactDetails,
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
