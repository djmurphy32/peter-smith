import externalClick from '../externalClick';
import type { VNode } from 'vue';
import { describe, beforeEach, it, expect, afterEach, vi } from 'vitest';

describe('Directive - externalClick', () => {
  let el: HTMLElement;
  let binding: any;
  let vNode: VNode;

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('bind', () => {
    let docEventListenerSpy: any;

    beforeEach(() => {
      docEventListenerSpy = vi.spyOn(document, 'addEventListener');
      el = document.createElement('div');
      binding = {
        name: 'binding',
      };
      vNode = {} as any;
      // @ts-ignore
      externalClick.beforeMount(el, binding, vNode);
    });

    it('THEN binds to document', () => {
      expect(docEventListenerSpy).toBeCalledTimes(1);
    });

    describe('unbind', () => {
      let removeEventListenerSpy: any;
      const elExternalClick = { foo: 'bar' };

      beforeEach(() => {
        (el as any).onClickExternal = elExternalClick;
        removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

        // @ts-ignore
        externalClick.unmounted(el);
      });

      it('THEN removes event listener from document', () => {
        expect(removeEventListenerSpy).toBeCalledTimes(1);
        expect(removeEventListenerSpy).toBeCalledWith('click', elExternalClick);
      });

      it('THEN deletes the directive form the element', () => {
        expect((el as any).onClickExternal).toBeUndefined();
      });
    });
  });
});
