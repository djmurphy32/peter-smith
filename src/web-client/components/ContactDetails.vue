<template>
  <div class="contact-container">
    <a class="contact-item contact-email" :href="'mailto:' + email">peter smith</a>
    <a class="contact-item contact-gram" :href="'https://www.instagram.com/' + igName">@{{ igName }}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactDetails',
  data() {
    return {
      email: 'pjfsmith@gmail.com',
      igName: 'ptr_smith',
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

  &-gram {
    text-decoration: none;
  }
}
</style>
