<template>
  <div class="site-header">
    <ContactDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactDetails from '@/components/ContactDetails.vue'

export default defineComponent({
  name: 'SiteHeader',
  components: { ContactDetails },
})
</script>

<style lang="scss">
.site-header {
  margin-bottom: 50px;
}
</style>
