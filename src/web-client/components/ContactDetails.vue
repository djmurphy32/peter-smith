<template>
  <div class="contact-container">
    <a class="contact-email" :href="'mailto:' + email">{{ email }}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactDetails',
  data() {
    return {
      email: 'pjfsmith@gmail.com',
    }
  },
})
</script>

<style lang="scss">
.contact-email {
  text-decoration: none;
  color: $black;
}
</style>
