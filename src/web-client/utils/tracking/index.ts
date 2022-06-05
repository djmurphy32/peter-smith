let gaInitialized = false
const queue: unknown[] = []

export const trackPictureImpression = (label: string): void => {
  pushToGa('event', 'impression', {
    event_category: 'picture',
    event_label: label,
  })
}

export const initGa = (): void => {
  gaInitialized = true
  window.gtag('js', new Date())

  window.gtag('config', 'UA-155099216-1')
  processItemsInQueue()
}

export const pageView = (): void => {
  pushToGa('pageview')
}

const processItemsInQueue = () => {
  queue.forEach((item) => {
    pushToGa(item)
  })
}

const pushToGa = (...args: unknown[]) => {
  if (!gaInitialized) {
    queue.push(args)
  } else {
    window.gtag(...args)
  }
}
