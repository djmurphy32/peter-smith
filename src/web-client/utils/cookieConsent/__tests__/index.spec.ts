import { hasConsentCookie, setConsentCookie } from '../index'
import Cookies from 'js-cookie'

describe('CookieConsent', () => {
    afterEach(() => {
        jest.resetAllMocks()
    })
  describe('hasCookieConsent', () => {
    describe('GIVEN intial state', () => {
      it('THEN does not have cookie consent', () => {
        expect(hasConsentCookie()).toBe(false)
      })

      describe('WHEN set cookie consent', () => {
        beforeEach(() => {
          setConsentCookie()
        })

        it('THEN hasCookieConsent return true', () => {
          expect(hasConsentCookie()).toBe(true)
        })
      })
    })

    describe('setCookieConsent', () => {
        const setSpy = jest.fn()
        beforeEach(() => {
            Cookies.set = setSpy
            setConsentCookie()
        })

      it('THEN correctly sets the consent cookie', () => {
        expect(setSpy).toBeCalledTimes(1)
        expect(setSpy).toBeCalledWith('_cookie_consent', 'true', {expires: 365})

      })
    })
  })
})
