import { Wrapper, shallowMount } from '@vue/test-utils'
import Portfolio from '../Portfolio.vue'

jest.mock('@/utils/webpackContexts/portfolio', () => {
  const context: any = (id: string) => id
  context.keys = () => {
    return ['image1.jpg', 'image2.jpg', 'images/test/image3.jpg']
  }
  return context
})

describe('Portfolio.vue', () => {
  describe('GIVEN initial state', () => {
    let wrapper: Wrapper<any>

    beforeEach(() => {
      wrapper = shallowMount(Portfolio)
    })

    it('THEN renders every image in the portfolio directory', () => {
      const queryString = '?nf_resize=fit&w=400'

      const images = wrapper.findAll('.portfolio-image')

      expect(images).toHaveLength(3)
      expect(images.at(0).attributes().src).toStrictEqual(`image1.jpg${queryString}`)
      expect(images.at(1).attributes().src).toStrictEqual(`image2.jpg${queryString}`)
      expect(images.at(2).attributes().src).toStrictEqual(`images/test/image3.jpg${queryString}`)
    })

    it('THEN renders cntact details', () => {
      expect(wrapper.find({ name: 'ContactDetails' }).exists()).toBe(true)
    })
  })
})
