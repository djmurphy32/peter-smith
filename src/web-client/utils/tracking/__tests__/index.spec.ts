import { trackPictureImpression } from '../'

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
})
