<template>
  <div class="site-footer">
    <router-link :to="PrivacyPolicy">Privacy Policy</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Page } from '@/router/Page'

export default Vue.extend({
  name: 'SiteFooter',
  data() {
    return {
      PrivacyPolicy: { name: Page.PrivacyPolicy },
    }
  },
})
</script>

<style lang="scss">
.site-footer {
  margin-top: 20px;
  text-align: center;
}
</style>
