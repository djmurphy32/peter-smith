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
      const queryString = '?nf_resize=fit&w=500'
      expect(wrapper.find({ name: 'LazyImage' }).props().src).toBe(`test-file${queryString}`)
      expect(wrapper.find({ name: 'LazyImage' }).props().alt).toBe(`Peter Smith`)
    })
  })
})
