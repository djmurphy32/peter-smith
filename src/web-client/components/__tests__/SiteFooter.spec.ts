import SiteFooter from '../SiteFooter.vue'
import { Wrapper, shallowMount } from '@vue/test-utils'
import { Page } from '@/router/Page'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
describe('SiteFooter', () => {
  let wrapper: Wrapper<any>
  describe('GIVEN initial state', () => {
    beforeEach(() => {
      wrapper = shallowMount(SiteFooter)
    })

    it('THEN renders the privacy policy', () => {
      expect(wrapper.findAll('.site-footer_link')).toHaveLength(1)
      expect(wrapper.find('.site-footer_link').text()).toStrictEqual('Privacy Policy')
      expect(wrapper.vm.PrivacyPolicy).toStrictEqual({ name: Page.PrivacyPolicy })
    })
  })
})
