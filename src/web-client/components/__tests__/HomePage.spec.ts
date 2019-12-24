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
      expect(wrapper.find({ name: 'LazyImage' }).props().src).toBe(`test-file`)
      expect(wrapper.find({ name: 'LazyImage' }).props().alt).toBe(`Peter Smith`)
    })
  })
})
