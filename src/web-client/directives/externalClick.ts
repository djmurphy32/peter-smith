import { VNode, DirectiveOptions, VNodeDirective } from 'vue'

const directive: DirectiveOptions = {
  bind(element: any, binding: VNodeDirective, vnode: VNode) {
    element.onClickExternal = (event: Event) => {
      if (!(element === (event.target as HTMLElement) || element.contains(event.target as HTMLElement))) {
        if (typeof binding.value !== 'function') {
          console.warn('v-external-click directive used without a handler') // tslint:disable-line no-console
          return
        }
        binding.value.call(vnode, event)
      }
    }
    document.addEventListener('click', element.onClickExternal)
  },
  unbind(element: any) {
    document.removeEventListener('click', element.onClickExternal)
    delete element.onClickExternal
  },
}

export default directive
