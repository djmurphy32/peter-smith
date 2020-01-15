<template>
  <div v-if="showConsentBanner" class="cookie-consent_wrapper">
    <span v-external-click="onExternalClick"
      >This website uses cookies as described in our <router-link :to="privacyPolicy">cookie policy</router-link>, to
      see what cookies we use and to set your own preferences, click here. Otherwise, by clicking on or navigating this
      site, you accept our use of cookies.
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { hasConsentCookie, setConsentCookie } from '@/utils/cookieConsent'
import { Page } from '@/router/Page'
import { initGa } from '@/utils/tracking'

export default Vue.extend({
  name: 'CookieConsent',
  data() {
    return { showConsentBanner: true, privacyPolicy: { name: Page.PrivacyPolicy, hash: '#cookie-policy' } }
  },
  created() {
    if (hasConsentCookie()) {
      this.loadGa()
    }
  },
  methods: {
    onExternalClick(): void {
      setConsentCookie()
      this.loadGa()
    },
    loadGa(): void {
      this.showConsentBanner = false
      initGa()
    },
  },
})
</script>
<style lang="scss">
.cookie-consent {
  &_wrapper {
    bottom: 8px;
    left: 8px;
    right: 8px;
    position: fixed;
    background: #fff;
    border: 1px solid #000;
    border-radius: 2px;
    padding: 2px;
    margin: 0 auto;
    font-size: $small-font-size;

    @include media-query-min($mq-sm) {
      font-size: $base-font-size;
      min-width: 344px;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}
</style>
