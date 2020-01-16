import externalClick from '../externalClick'
import { VNodeDirective, VNode } from 'vue/types/umd'

describe('Directive - externlClick', () => {
  let docEventListenerSpy: jest.SpyInstance
  let el: HTMLElement
  let binding: VNodeDirective
  let vnode: VNode

  beforeEach(() => {
    docEventListenerSpy = jest.spyOn(document, 'addEventListener')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('bind', () => {
    beforeEach(() => {
      el = document.createElement('div')
      binding = {
        name: 'binding',
      }
      vnode = { isRootInsert: true, isComment: false }
      // @ts-ignore
      externalClick.bind(el, binding, vnode)
    })

    it('THEN binds to document', () => {
      expect(docEventListenerSpy).toBeCalledTimes(1)
    })
  })
})
