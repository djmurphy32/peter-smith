<template>
  <div v-if="!hasCookieConsent" class="cookie-consent_wrapper">
    <span v-external-click="acceptCookie"
      >This website uses cookies as described in our <router-link :to="privacyPolicy">cookie policy</router-link>, to
      see what cookies we use and to set your own preferences, click here. Otherwise, by clicking on or navigating this
      site, you accept our use of cookies.
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Page } from '@/router/Page'
import Cookies from 'js-cookie'
const cookieName = '_cookie_consent'

export default Vue.extend({
  name: 'CookieConsent',
  data() {
    return { hasCookieConsent: false, privacyPolicy: { name: Page.PrivacyPolicy, hash: '#cookie-policy' } }
  },
  created() {
    const cookieValue = Cookies.get(cookieName)
    if (cookieValue && cookieValue === 'true') {
      this.acceptCookie()
    }
  },
  methods: {
    acceptCookie(): void {
      this.hasCookieConsent = true
      Cookies.set(cookieName, 'true')
      window.gtag('js', new Date())

      window.gtag('config', 'UA-155099216-1')
      window.gtag('pageview')
    },
  },
})
</script>
<style lang="scss">
.cookie-consent {
  &_wrapper {
    bottom: 8px;
    position: fixed;
    background: #fff;
    border: 1px solid #000;
    border-radius: 2px;
    padding: 2px;
    margin: 0 20px;
  }
}
</style>
