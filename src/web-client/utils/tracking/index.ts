export const trackPictureImpression = (label: string) => {
  window.gtag('event', 'impression', {
    event_category: 'picture',
    event_label: label,
  })
}

export const initGa = () => {
  window.gtag('js', new Date())

  window.gtag('config', 'UA-155099216-1')
  pageView()
}

export const pageView = () => {
  window.gtag('pageview')
}
