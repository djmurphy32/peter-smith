import { Wrapper, shallowMount } from '@vue/test-utils'
import LazyImage from '../LazyImage.vue'

describe('LazyImage.vue', () => {
  describe('GIVEN initial state', () => {
    let wrapper: Wrapper<any>

    beforeEach(() => {
      wrapper = shallowMount(LazyImage, {
        propsData: {
          src: 'testImage.png',
          alt: 'Test Image',
          fullWidth: 300,
          lazyWidth: 500,
        },
      })
    })

    it('THEN renders the image correctly', () => {
      const qs = '?nf_resize=fit&w='
      expect(wrapper.find('.lazy-image').attributes().src).toBe(`testImage.png${qs}500`)
      expect(wrapper.find('.lazy-image').attributes().alt).toBe('Test Image')
    })
  })
})
