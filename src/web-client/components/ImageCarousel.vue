<template>
  <div class="image-carousel">
    <div ref="imageContainer" class="image-carousel__image-container" @click="imageClick($event)">
      <LazyImage
        :image-class="imageClass"
        :alt="activeImage.alt"
        :src="activeImage.src"
        :full-width="fullWidth"
        :lazy-width="lazyWidth"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LazyImage from './LazyImage.vue'

const props = defineProps({
  images: {
    required: true,
    type: Array as () => Array<{ src: string; alt: string }>,
  },
  imageClass: { type: String, default: undefined },
  fullWidth: { type: Number, required: true },
  lazyWidth: { type: Number, required: true },
})

const currentIndex = ref(0)
const imageContainer = ref<Element | null>(null)

const activeImage = computed((): { src: string; alt: string } => {
  return props.images[currentIndex.value]
})

const imageClick = (e: MouseEvent): void => {
  if (imageContainer.value) {
    const width = imageContainer.value.clientWidth
    const offset = imageContainer.value.getBoundingClientRect().left
    const innerClickX = e.pageX
    const maxIndex = props.images.length - 1

    if (innerClickX >= offset + width / 2) {
      if (currentIndex.value === maxIndex) {
        currentIndex.value = 0
      } else {
        currentIndex.value++
      }
    } else {
      if (currentIndex.value === 0) {
        currentIndex.value = maxIndex
      } else {
        currentIndex.value--
      }
    }
  }
}
</script>
