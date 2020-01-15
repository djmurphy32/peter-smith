import Cookies from 'js-cookie'

const cookieName = '_cookie_consent'

export const hasConsentCookie = (): boolean => {
  const cookieValue = Cookies.get(cookieName)

  return !!(cookieValue && cookieValue === 'true')
}

export const setConsentCookie = (): void => {
  Cookies.set(cookieName, 'true', { expires: 365 })
}
