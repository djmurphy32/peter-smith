import SiteHeader from '../SiteHeader.vue'
import { Wrapper, shallowMount } from '@vue/test-utils'

describe('SiteHeader', () => {
  let wrapper: Wrapper<any>
  describe('GIVEN initial state', () => {
    beforeEach(() => {
      wrapper = shallowMount(SiteHeader)
    })
    it('THEN renders the contact details', () => {
      expect(wrapper.find({ name: 'ContactDetails' }).exists()).toBe(true)
    })
  })
})
