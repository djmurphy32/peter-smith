<template>
  <div class="portfolio-heading">
    <div class="portfolio-heading__title">
      <span>{{ props.title }}</span>
    </div>

    <div class="portfolio-heading__body">
      <p v-for="(text, ix) in props.body" :key="ix" class="portfolio-heading__body__p">{{ text }}</p>
    </div>
    <div class="portfolio-heading__footer">
      <span v-for="(text, ix) in props.footer" :key="ix" class="portfolio-heading__footer__line">{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/named
import { PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: Array as PropType<string[]>,
    required: true,
  },
  footer: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => [],
  },
})
</script>

<style lang="scss">
.portfolio-heading {
  margin-bottom: 20px;

  &__title {
    font-weight: 600;
    margin-bottom: 20px;
  }

  &__body {
    &__p {
      margin: 0;
      margin-bottom: 5px;
      font-weight: 500;
    }
  }

  &__footer {
    &__line {
      display: block;
    }
  }
}
</style>
