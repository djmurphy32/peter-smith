export const trackPictureImpression = (label: string) => {
  window.gtag('event', 'impression', {
    event_category: 'picture',
    event_label: label,
  })
}
