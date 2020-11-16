import { Wrapper, shallowMount } from '@vue/test-utils'
import HomePage from '../HomePage.vue'

describe('HomePage.vue', () => {
  describe('GIVEN intial state', () => {
    let wrapper: Wrapper<any>

    beforeEach(() => {
      jest.resetModules()
      wrapper = shallowMount(HomePage)
    })

    it('THEN renders the homepage image correctly', () => {
      const imageProps = wrapper.find({ name: 'ImageCarousel' }).props()
      expect(imageProps.imageClass).toBe(`homepage-image`)
      expect(imageProps.images.length).toBe(3)
      expect(imageProps.images[0].src).toBe(`image1.jpg`)
      expect(imageProps.images[0].alt).toBe(`image_0`)
      expect(imageProps.fullWidth).toBe(1000)
      expect(imageProps.lazyWidth).toBe(200)
    })
  })
})
