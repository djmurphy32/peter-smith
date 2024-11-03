<script setup lang="ts">
import Name from "@/components/v2/Name.vue";
import PortfoliosWrapper from "@/components/PortfoliosWrapper.vue";
</script>
<template>
  <div class="grid grid-cols-[1fr,auto,1fr] gap-4">
    <div>
      <Name />
    </div>
    <div>
      <PortfoliosWrapper />
    </div>
    <div></div>
  </div>
</template>
