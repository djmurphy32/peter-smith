import { trackPictureImpression, initGa, pageView } from '../'

describe('Tracking', () => {
  const gtagSpy = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })
  beforeEach(() => {
    window.gtag = gtagSpy
    initGa()
    jest.clearAllMocks()
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
    describe('GIVEN events triggered when gtag not on window', () => {
      beforeEach(() => {
        pageView()
        trackPictureImpression('test')
      })

      describe('WHEN ga initialised', () => {
        beforeEach(() => {
          initGa()
        })

        it('THEN initializes GA', () => {
          expect(gtagSpy).toBeCalledTimes(4)
          expect(gtagSpy).toBeCalledWith('config', 'UA-155099216-1')
          expect(gtagSpy).toHaveBeenCalledWith('pageview')
        })

        it('THEN processes the previous events', () => {
          expect(gtagSpy).toHaveBeenCalledWith('event', 'impression', {
            event_category: 'picture',
            event_label: 'test',
          })
        })
      })
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
