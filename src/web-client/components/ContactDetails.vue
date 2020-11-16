<template>
  <div class="contact-container">
    <a class="contact-item contact-email" :href="'mailto:' + email">peter smith</a>
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
  &-item {
    margin: 0 5px;
  }

  &-email {
    text-decoration: underline;
  }

  &-insta {
    display: none;
  }
}
</style>
