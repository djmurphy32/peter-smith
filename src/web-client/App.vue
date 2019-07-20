<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloComponent from '@/components/Hello.vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      name: '',
    }
  },
  components: {
    HelloComponent,
  },
})
</script>
