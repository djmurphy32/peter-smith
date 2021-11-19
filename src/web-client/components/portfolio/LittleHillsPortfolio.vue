<template>
  <div class="little-hills">
    <PortfolioHeading :title="title" :body="body" :footer="footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioHeading from './PortfolioHeading.vue'

export default Vue.extend({
  name: 'LittleHillsPortfolio',
  components: {
    PortfolioHeading,
  },
  data() {
    return {
      title: 'Little Hills',
      body: [
        'A portfolio of pictures made across the towns and villages of the North East of Ireand.',
        "Pictures of the landscapes, the events, and the people that influence today's youth.",
      ],
      footer: ['Edition of 200', 'Loose Leaf', '42 Pages'],
    }
  },
})
</script>
