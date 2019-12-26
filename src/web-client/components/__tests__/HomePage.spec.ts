import { Wrapper, shallowMount } from '@vue/test-utils'
import HomePage from '../HomePage.vue'

describe('HomePage.vue', () => {
  describe('GIVEN intial state', () => {
    let wrapper: Wrapper<any>

    beforeEach(() => {
      jest.resetModules()
      wrapper = shallowMount(HomePage)
    })

    it('THEN renders contact details', () => {
      expect(wrapper.find({ name: 'ContactDetails' }).exists()).toBe(true)
    })

    it('THEN renders the homepage image correctly', () => {
      const imageProps = wrapper.find({ name: 'LazyImage' }).props()
      expect(imageProps.imageClass).toBe(`homepage-image`)
      expect(imageProps.src).toBe(`test-file`)
      expect(imageProps.alt).toBe(`Peter Smith`)
      expect(imageProps.fullWidth).toBe(500)
      expect(imageProps.lazyWidth).toBe(200)
    })
  })
})
