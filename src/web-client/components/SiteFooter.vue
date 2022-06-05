<template>
  <div class="site-footer">
    <span>&copy; all images Peter Smith {{ year }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const year = ref(new Date().getFullYear().toString())
</script>

<style lang="scss">
.site-footer {
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
