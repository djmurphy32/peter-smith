import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import ImageViewer from '@/components/Image.vue'

const localVue = createLocalVue()

describe('Image', () => {
  describe('GIVEN minimum required props', () => {
    let wrapper: Wrapper<any>

    beforeEach(() => {
      wrapper = shallowMount(ImageViewer, {
        localVue,
        propsData: {
          url: 'https://www.test.com/image.png',
          altText: 'Test alt',
        },
      })
    })

    it('SHOULD render img tag correctly', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
