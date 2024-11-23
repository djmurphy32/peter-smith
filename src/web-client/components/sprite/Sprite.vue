<script setup lang="ts">
export type Icon = "grid";

interface Props {
  icon: Icon;
}
defineProps<Props>();
</script>
<template>
  <svg class="icon">
    <use :href="`#icon-${icon}`" />
  </svg>
</template>
