let gaInitialized = false
const queue: any[] = []

export const trackPictureImpression = (label: string) => {
  pushToGa('event', 'impression', {
    event_category: 'picture',
    event_label: label,
  })
}

export const initGa = () => {
  gaInitialized = true
  window.gtag('js', new Date())

  window.gtag('config', 'UA-155099216-1')
  processItemsInQueue()
}

export const pageView = () => {
  pushToGa('pageview')
}

const processItemsInQueue = () => {
  queue.forEach((item) => {
    pushToGa(item)
  })
}

const pushToGa = (...args: any[]) => {
  if (!gaInitialized) {
    queue.push(args)
  } else {
    window.gtag(...args)
  }
}
