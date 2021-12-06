<template>
  <div class="contact-container">
    <span>All enquiries</span>
    <a class="contact-item contact-email" :href="'mailto:' + email">{{ email }}</a>
    <a class="contact-item contact-insta" target="_blank" :href="'https://www.instagram.com/' + igName"
      >@{{ igName }}</a
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactDetails',
  data() {
    return {
      email: 'ps@petersmith.work',
      igName: 'petersmith',
    }
  },
})
</script>

<style lang="scss">
.contact {
  &-container {
    margin-bottom: 20px;
  }

  &-item {
    display: block;
  }

  &-email {
    text-decoration: underline;
  }

  &-insta {
    display: none;
  }
}
</style>
