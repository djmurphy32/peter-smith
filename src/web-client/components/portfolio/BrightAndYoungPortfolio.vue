<template>
  <div class="little-hills">
    <PortfolioHeading :title="title" :body="body" :footer="footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioHeading from './PortfolioHeading.vue'

export default Vue.extend({
  name: 'BrightAndYoungPortfolio',
  components: {
    PortfolioHeading,
  },
  data() {
    return {
      title: 'Bright and young and here forever',
      body: [
        'Pictures of youth involved in camping out and protesting for immediate government action in climate change mitigation.',
        "Photographed over a period of two years at various protests in London's Marble Arch and Piccadilly Circus",
      ],
      footer: ['Edition of 100', 'Recycled New Print', '32 Pages'],
    }
  },
})
</script>
