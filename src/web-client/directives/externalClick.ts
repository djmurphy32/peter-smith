// eslint-disable-next-line import/named
import { VNode, DirectiveOptions, VNodeDirective } from 'vue'

const directive: DirectiveOptions = {
  bind(element: unknown, binding: VNodeDirective, vNode: VNode) {
    element.onClickExternal = (event: Event) => {
      if (!(element === (event.target as HTMLElement) || element.contains(event.target as HTMLElement))) {
        if (typeof binding.value !== 'function') {
          // eslint-disable-next-line no-console
          console.warn('v-external-click directive used without a handler') // tslint:disable-line no-console
          return
        }
        binding.value.call(vNode, event)
      }
    }
    document.addEventListener('click', element.onClickExternal)
  },
  unbind(element: unknown) {
    document.removeEventListener('click', element.onClickExternal)
    delete element.onClickExternal
  },
}

export default directive
