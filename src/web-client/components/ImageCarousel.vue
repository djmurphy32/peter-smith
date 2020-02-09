<template>
  <div class="image-carousel">
    <div class="image-carousel__image-container" ref="imageContiner" @click="imageClick($event)">
      <LazyImage
        :imageClass="imageClass"
        :alt="activeImage.alt"
        :src="activeImage.src"
        :fullWidth="fullWidth"
        :lazyWidth="lazyWidth"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LazyImage from './LazyImage.vue'

export default Vue.extend({
  name: 'ImageCarousel',
  components: {
    LazyImage,
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    images: {
      required: true,
      type: Array as () => Array<{ src: string; alt: string }>,
    },
    imageClass: String,
    fullWidth: Number,
    lazyWidth: Number,
  },
  computed: {
    activeImage(): { src: string; alt: string } {
      return this.images[this.currentIndex]
    },
  },
  methods: {
    imageClick(e: MouseEvent): void {
      const width = (this.$refs.imageContiner as Element).clientWidth
      const offset = (this.$refs.imageContiner as Element).getBoundingClientRect().left
      const innerClickX = e.pageX
      const maxIndex = this.images.length - 1

      if (innerClickX >= offset + width / 2) {
        if (this.currentIndex === maxIndex) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      } else {
        if (this.currentIndex === 0) {
          this.currentIndex = maxIndex
        } else {
          this.currentIndex--
        }
      }
    },
  },
})
</script>
