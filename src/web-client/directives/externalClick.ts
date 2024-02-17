// eslint-disable-next-line import/named
import { VNode, DirectiveBinding, Directive } from 'vue';

type ExternalClickElement = HTMLElement & {
  onClickExternal?: (event: Event) => void;
};

const directive: Directive = {
  beforeMount(element: ExternalClickElement, binding: DirectiveBinding, vNode: VNode) {
    element.onClickExternal = (event: Event) => {
      if (!(element === (event.target as HTMLElement) || element.contains(event.target as HTMLElement))) {
        if (typeof binding.value !== 'function') {
          // eslint-disable-next-line no-console
          console.warn('v-external-click directive used without a handler'); // tslint:disable-line no-console
          return;
        }
        binding.value.call(vNode, event);
      }
    };
    document.addEventListener('click', element.onClickExternal);
  },

  unmounted(element: ExternalClickElement) {
    if (element.onClickExternal) {
      document.removeEventListener('click', element.onClickExternal);
      delete element.onClickExternal;
    }
  },
};

export default directive;
