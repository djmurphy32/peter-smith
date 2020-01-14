import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import createRouter from '..'
import { Page } from '../Page'
import { pageView } from '@/utils/tracking'

const localVue = createLocalVue()
localVue.use(VueRouter)

const Component = { template: '<div></div>' }

jest.mock('@/utils/tracking')

describe('Router', () => {
  let router: VueRouter

  afterEach(() => {
    jest.clearAllMocks()
  })

  beforeAll(() => {
    router = createRouter()
    shallowMount(Component, { localVue, router })
  })

  describe('GIVEN on load', () => {
    it('THEN tracks pageview', () => {
      expect(pageView).toBeCalledTimes(1)
    })
  })

  describe('WHEN navigate to /privacy', () => {
    beforeEach(() => {
      router.push({ name: Page.PrivacyPolicy })
    })

    it('THEN tracks page view', () => {
      expect(pageView).toBeCalledTimes(1)
    })
  })
})
