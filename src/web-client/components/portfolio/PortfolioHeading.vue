<template>
  <div class="portfolio-heading">
    <div class="portfolio-heading__title">
      <span>{{ title }}</span>
    </div>

    <div class="portfolio-heading__body">
      <p v-for="(text, ix) in body" :key="ix">{{ text }}</p>
    </div>
    <div class="portfolio-heading__footer">
      <span v-for="(text, ix) in footer" :key="ix" class="portfolio-heading__footer__line">{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'PortfolioHeading',
  props: {
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
      required: true,
    },
  },
})
</script>

<style lang="scss">
.portfolio-heading {
  margin-bottom: 20px;

  &__title {
    font-weight: 600;
  }

  &__footer {
    &__line {
      display: block;
    }
  }
}
</style>
