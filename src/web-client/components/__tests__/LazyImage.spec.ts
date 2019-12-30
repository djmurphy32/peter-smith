import { Wrapper, mount, createLocalVue } from '@vue/test-utils'
import LazyImage from '../LazyImage.vue'
import VueRouter from 'vue-router'
import { trackPictureImpression } from '@/utils/tracking'
const localVue = createLocalVue()

localVue.use(VueRouter)

jest.mock('@/utils/tracking')

describe('LazyImage.vue', () => {
  let wrapper: Wrapper<any>
  const observeSpy = jest.fn()
  const disconnectSpy = jest.fn()
  const currentRoute = {
    name: 'test Page',
  }

  const propsData = {
    src: 'testImage.png',
    alt: 'Test Image',
    fullWidth: 500,
    lazyWidth: 300,
    imageClass: 'test-class',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  beforeEach(() => {
    ;(window as any).IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: observeSpy,
      disconnect: disconnectSpy,
    }))
  })

  describe('GIVEN initial state', () => {
    beforeEach(() => {
      wrapper = mount(LazyImage, {
        propsData,
        mocks: {
          $route: currentRoute,
        },
      })
    })

    it('THEN has the unloaded class', () => {
      expect(wrapper.find('.lazy-image--unloaded').exists()).toBe(true)
    })

    it('THEN binds the image class correctly', () => {
      expect(wrapper.find('img.test-class').exists()).toBe(true)
    })

    describe('WHEN image loaded', () => {
      beforeEach(() => {
        wrapper.find('.lazy-image').trigger('load')
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

      it('THEN does not have the unloaded class', () => {
        expect(wrapper.find('.lazy-image--unloaded').exists()).toBe(false)
      })

      it('THEN observes the element', () => {
        expect(observeSpy).toBeCalledTimes(1)
        expect(observeSpy).toBeCalledWith(wrapper.element)
      })

      describe('WHEN image enters viewport', () => {
        beforeEach(() => {
          // @ts-ignore
          const observerCallback = window.IntersectionObserver.mock.calls[0][0]
          observerCallback([{ isIntersecting: true }])
        })

        it('THEN stops tracking element', () => {
          expect(disconnectSpy).toBeCalledTimes(1)
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

        it('THEN correctly tracks the impression on the picture', () => {
          expect(trackPictureImpression).toBeCalledTimes(1)
          expect(trackPictureImpression).toBeCalledWith('test_page_test_image')
        })
      })

      describe('WHEN component destroyed', () => {
        beforeEach(() => {
          wrapper.destroy()
        })

        it('THEN stops observing', () => {
          expect(disconnectSpy).toBeCalledTimes(1)
        })
      })
    })
  })

  describe('WHEN image has query string and url fragment', () => {
    beforeEach(() => {
      propsData.src = 'testimg.png?foo=bar#testfragment'

      wrapper = mount(LazyImage, {
        propsData,
        mocks: {
          $route: currentRoute,
        },
      })
      wrapper.find('.lazy-image').trigger('load')
    })
    it('THEN correctly renders the image with correct query string', () => {
      expect(wrapper.find('.lazy-image').attributes().src).toBe(`testimg.png?foo=bar&nf_resize=fit&w=300`)
    })
    describe('WHEN image enters viewport', () => {
      beforeEach(() => {
        // @ts-ignore
        const observerCallback = window.IntersectionObserver.mock.calls[0][0]
        observerCallback([{ isIntersecting: true }])
      })

      it('THEN correctly renders the image with correct query string', () => {
        expect(wrapper.find('.lazy-image').attributes().src).toBe(`testimg.png?foo=bar&nf_resize=fit&w=500`)
      })
    })
  })
})
