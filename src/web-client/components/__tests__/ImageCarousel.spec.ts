import ImageCarousel from '../ImageCarousel.vue'
import { VueWrapper, shallowMount } from '@vue/test-utils'

describe('ImageCarousel', () => {
  let wrapper: VueWrapper

  describe('GIVEN multiple images', () => {
    const images = [
      { src: 'image1.png', alt: 'image1' },
      { src: 'image2.png', alt: 'image2' },
      { src: 'image3.png', alt: 'image3' },
    ]

    beforeEach(() => {
      wrapper = shallowMount(ImageCarousel, {
        propsData: {
          images,
          lazyWidth: 200,
          fullWidth: 500,
          imageClass: 'test-class',
        },
      })
    })

    it('THEN mounts the component correctly', () => {
      const imageProps = wrapper.findComponent({ name: 'LazyImage' }).props()
      expect(imageProps.src).toBe('image1.png')
      expect(imageProps.alt).toBe('image1')
      expect(imageProps.fullWidth).toBe(500)
      expect(imageProps.lazyWidth).toBe(200)
      expect(imageProps.imageClass).toBe('test-class')
    })

    describe('WHEN click right', () => {
      beforeEach(() => {
        wrapper.find('.image-carousel__image-container').trigger('click', {
          pageX: 40,
        })
      })

      it('THEN updates the rendered image correctly', () => {
        const imageProps = wrapper.findComponent({ name: 'LazyImage' }).props()
        expect(imageProps.src).toBe('image2.png')
        expect(imageProps.alt).toBe('image2')
      })

      describe('WHEN click right on final image', () => {
        beforeEach(() => {
          wrapper.find('.image-carousel__image-container').trigger('click', {
            pageX: 40,
          })
          wrapper.find('.image-carousel__image-container').trigger('click', {
            pageX: 40,
          })
        })

        it('THEN returns to first image', () => {
          const imageProps = wrapper.findComponent({ name: 'LazyImage' }).props()
          expect(imageProps.src).toBe('image1.png')
          expect(imageProps.alt).toBe('image1')
        })
      })
    })

    describe('WHEN click left on first image', () => {
      beforeEach(() => {
        wrapper.find('.image-carousel__image-container').trigger('click', {
          pageX: -1,
        })
      })

      it('THEN updates to the final image', () => {
        const imageProps = wrapper.findComponent({ name: 'LazyImage' }).props()
        expect(imageProps.src).toBe('image3.png')
        expect(imageProps.alt).toBe('image3')
      })

      describe('WHEN click left', () => {
        beforeEach(() => {
          wrapper.find('.image-carousel__image-container').trigger('click', {
            pageX: -1,
          })
        })

        it('THEN updates image correctly', () => {
          const imageProps = wrapper.findComponent({ name: 'LazyImage' }).props()
          expect(imageProps.src).toBe('image2.png')
          expect(imageProps.alt).toBe('image2')
        })
      })
    })
  })
})
