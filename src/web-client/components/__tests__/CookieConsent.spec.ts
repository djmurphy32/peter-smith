import CookieConsent from '../CookieConsent.vue'
import { Wrapper, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import externalClick from '@/directives/externalClick'

Vue.use(VueRouter)
Vue.directive('external-click', externalClick)

let setConsentCookieSpy: jest.SpyInstance
let hasConsentCookieSpy: jest.SpyInstance
let hasConsentCookie = false

jest.mock('@/utils/cookieConsent', () => {
  setConsentCookieSpy = jest.fn()
  hasConsentCookieSpy = jest.fn(() => hasConsentCookie)
  return {
    hasConsentCookie: hasConsentCookieSpy,
    setConsentCookie:setConsentCookieSpy,
  }
})

describe('CookieConsent.vue', () => {
  let wrapper: Wrapper<any>
  const gtagSpy = jest.fn()

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('GIVEN initial state', () => {
    beforeEach(() => {
      window.gtag = gtagSpy
      wrapper = shallowMount(CookieConsent)
    })

    afterEach(() => {
      jest.clearAllMocks()
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

      it('THEN sets up google analytics', () => {
        expect(gtagSpy).toBeCalledTimes(3)
        expect(gtagSpy).toBeCalledWith('config', 'TEST-GA-ID')
        expect(gtagSpy).toBeCalledWith('pageview')
      })

      it('THEN sets consent cookie', () => {
        expect(setConsentCookieSpy).toBeCalledTimes(1)
      })
    })
  })

  describe('WHEN has cookie consent cookie set', () => {
    beforeEach(() => {
      hasConsentCookie = true
    })

    describe('WHEN first mounted', () => {
      beforeEach(async () => {
        wrapper = shallowMount(CookieConsent)
        wrapper.vm.$forceUpdate()
      })

      it('sdfsf', () => {
        expect(wrapper.element).toMatchSnapshot()
      })

      it('THEN does not render the banner', () => {
        expect(wrapper.find('.cookie-consent_wrapper').exists()).toBe(false)
      })

      it('THEN does not set consent cookies', () => {
        expect(setConsentCookieSpy).not.toBeCalled()
      })
    })
  })
})
