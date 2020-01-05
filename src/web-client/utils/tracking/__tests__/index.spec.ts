import { trackPictureImpression, initGa, pageView } from '../'

describe('Tracking', () => {
  const gtagSpy = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })
  beforeEach(() => {
    window.gtag = gtagSpy
  })

  describe('Impression tracking', () => {
    beforeEach(() => {
      trackPictureImpression('testlabel')
    })
    it('Tracks event in GA correctly', () => {
      expect(gtagSpy).toBeCalledTimes(1)
      expect(gtagSpy).toBeCalledWith('event', 'impression', {
        event_category: 'picture',
        event_label: 'testlabel',
      })
    })
  })

  describe('Initialize google analytics', () => {
    beforeEach(() => {
      initGa()
    })

    it('THEN correctly initializes GA', () => {
      expect(gtagSpy).toBeCalledTimes(3)
      expect(gtagSpy).toBeCalledWith('config', 'UA-155099216-1')
      expect(gtagSpy).toBeCalledWith('pageview')
    })
  })

  describe('pageview', () => {
    beforeEach(() => {
      pageView()
    })

    it('THEN tracks pageview in ga', () => {
      expect(gtagSpy).toBeCalledTimes(1)
      expect(gtagSpy).toBeCalledWith('pageview')
    })
  })
})
