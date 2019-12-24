import { Wrapper, shallowMount } from '@vue/test-utils'
import LazyImage from '../LazyImage.vue'

describe('LazyImage.vue', () => {
  describe('GIVEN initial state', () => {
    let wrapper: Wrapper<any>

    beforeEach(() => {
      wrapper = shallowMount(LazyImage, {
        propsData: {
          src: 'testImage.png?foo=bar',
          alt: 'Test Image',
        },
      })
    })

    it('THEN renders the image correctly', () => {
      expect(wrapper.find('.lazy-image').attributes().src).toBe('testImage.png?foo=bar')
      expect(wrapper.find('.lazy-image').attributes().alt).toBe('Test Image')
    })
  })
})
