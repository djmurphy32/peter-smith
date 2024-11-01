<template>
  <div class="contact__container">
    <div class="contact__email">
      <a
        v-for="email in emails"
        :key="email"
        class="contact__item"
        :href="'mailto:' + email"
        >{{ email }}</a
      >
    </div>
    <div class="contact__insta">
      <a
        class="contact__item"
        target="_blank"
        href="https://www.instagram.com/peter_josephsmith"
        >instagram</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const emails = ["pjs@peterjosephsmith.co.uk"];
</script>

<style lang="scss" scoped>
.contact {
  &__container {
    margin-bottom: 20px;
  }

  &__item {
    display: block;
  }

  &__email {
    margin-bottom: 5px;
  }
}
</style>
