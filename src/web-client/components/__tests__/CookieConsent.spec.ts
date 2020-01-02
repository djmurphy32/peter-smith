import CookieConsent from '../CookieConsent.vue'
import { Wrapper, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import externalClick from '@/directives/externalClick'
import Cookies from 'js-cookie'

Vue.use(VueRouter)
Vue.directive('external-click', externalClick)

describe('CookieConsent', () => {
  let wrapper: Wrapper<any>
  describe('GIVEN initial state', () => {
    beforeEach(() => {
      wrapper = shallowMount(CookieConsent)
    })

    it('THEN renders the consent banner', () => {
      expect(wrapper.find('.cookie-consent_wrapper').exists()).toBe(true)
    })

    describe('WHEN click outside banner', () => {
      beforeEach(() => {
        document.dispatchEvent(new Event('click'))
      })

      it('THEN does not render the banner', () => {
        expect(wrapper.find('.cookie-consent_wrapper').exists()).toBe(false)
      })

      it('THEN sets the consent cookie', () => {
        const cookieValue = Cookies.get('_cookie_consent')
        expect(cookieValue).toStrictEqual('true')
      })
    })
  })

  describe('WHEN has cookie consent cookie set', () => {
    beforeEach(() => {
      Cookies.set('_cookie_consent', 'true')
    })

    describe('WHEN first mounted', () => {
      beforeEach(() => {
        wrapper = shallowMount(CookieConsent)
      })

      it('THEN does not render the banner', () => {
        expect(wrapper.find('.cookie-consent_wrapper').exists()).toBe(false)
      })
    })
  })
})
