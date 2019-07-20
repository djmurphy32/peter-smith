<template>
  <div>
    <div class="hello__greeting">Hellossss</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Test',
})
</script>

<style lang="scss">
.hello {
  &__greeting {
    font-size: 20px;
  }
}
</style>
