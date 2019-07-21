<template>
  <div class="contact-container">
    <a class="contact-email" href="mailto:pjfsmith@gmail.com">pjfsmith@gmail.com</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactDetails',
})
</script>

<style lang="scss">
.contact-email {
  text-decoration: none;
  color: $black;
}
</style>
