import { Wrapper, shallowMount } from '@vue/test-utils'
import LazyImage from '../LazyImage.vue'

describe('LazyImage.vue', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  describe('GIVEN initial state', () => {
    const observeSpy = jest.fn()
    const unobserveSpy = jest.fn()
    let wrapper: Wrapper<any>

    beforeEach(() => {
      ;(window as any).IntersectionObserver = jest.fn().mockImplementation(() => ({
        observe: observeSpy,
        unobserve: unobserveSpy,
      }))

      wrapper = shallowMount(LazyImage, {
        propsData: {
          src: 'testImage.png',
          alt: 'Test Image',
          fullWidth: 500,
          lazyWidth: 300,
        },
      })
    })

    it('THEN renders the image correctly', () => {
      const qs = '?nf_resize=fit&w='
      const imageAttrs = wrapper.find('.lazy-image').attributes()
      expect(imageAttrs.src).toBe(`testImage.png${qs}300`)
      expect(imageAttrs.alt).toBe('Test Image')
    })

    it('THEN has the lazy class', () => {
      expect(wrapper.find('.lazy-image--lazy').exists()).toBe(true)
    })

    it('THEN observes the element', () => {
      expect(observeSpy).toBeCalledTimes(1)
      expect(observeSpy).toBeCalledWith(wrapper.element)
    })

    describe('WHEN scroll element into viewport', () => {
      beforeEach(() => {
        // @ts-ignore
        const observerCallback = window.IntersectionObserver.mock.calls[0][0]
        observerCallback([{ isIntersecting: true }])
      })

      it('THEN stops tracking element', () => {
        expect(unobserveSpy).toBeCalledTimes(1)
        expect(unobserveSpy).toBeCalledWith(wrapper.element)
      })

      it('THEN renders the image correctly', () => {
        const qs = '?nf_resize=fit&w='
        const imageAttrs = wrapper.find('.lazy-image').attributes()
        expect(imageAttrs.src).toBe(`testImage.png${qs}500`)
        expect(imageAttrs.alt).toBe('Test Image')
      })

      it('THEN does not have the lazy class', () => {
        expect(wrapper.find('.lazy-image--lazy').exists()).toBe(false)
      })
    })
  })
})
