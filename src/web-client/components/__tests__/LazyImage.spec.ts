import { VueWrapper, mount } from '@vue/test-utils';
import LazyImage from '../LazyImage.vue';
import { describe, beforeEach, it, expect, vi, afterEach } from 'vitest';

const currentRoute = {
  name: 'test Page',
};

vi.mock('vue-router', () => {
  return {
    useRoute: () => {
      return currentRoute;
    },
  };
});

describe('LazyImage.vue', () => {
  let wrapper: VueWrapper;
  const observeSpy = vi.fn();
  const disconnectSpy = vi.fn();

  const props = {
    src: 'testImage.png',
    alt: 'Test Image',
    fullWidth: 500,
    lazyWidth: 300,
    imageClass: 'test-class',
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeEach(() => {
    (window as any).IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: observeSpy,
      disconnect: disconnectSpy,
    }));
  });

  describe('GIVEN component outside viewport', () => {
    beforeEach(() => {
      wrapper = mount(LazyImage, {
        props,
      });
    });

    it('THEN observes the element', () => {
      expect(observeSpy).toBeCalledTimes(2);
      expect(observeSpy).toHaveBeenNthCalledWith(1, wrapper.element);
      expect(observeSpy).toHaveBeenNthCalledWith(2, wrapper.element);
    });

    it('THEN has the unloaded class', () => {
      expect(wrapper.find('.lazy-image__root--unloaded').exists()).toBe(true);
    });

    it('THEN does not render the image', () => {
      expect(wrapper.find('img.test-class').exists()).toBe(false);
    });

    describe('WHEN image enters viewport', () => {
      beforeEach(() => {
        // @ts-ignore
        const observerCallback = window.IntersectionObserver.mock.calls[1][0];
        observerCallback([{ isIntersecting: true }]);
      });

      it('THEN stops tracking element', () => {
        expect(disconnectSpy).toBeCalledTimes(1);
      });

      it('THEN binds the image class correctly', () => {
        expect(wrapper.find('img.test-class').exists()).toBe(true);
      });

      describe('WHEN image loaded', () => {
        beforeEach(() => {
          wrapper.find('.lazy-image__img').trigger('load');
        });

        it('THEN renders the image correctly', () => {
          const qs = '?nf_resize=fit&w=';
          const imageAttrs = wrapper.find('.lazy-image__img').attributes();
          expect(imageAttrs.src).toBe(`testImage.png${qs}300`);
          expect(imageAttrs.alt).toBe('Test Image');
        });

        it('THEN has the lazy class', () => {
          expect(wrapper.find('.lazy-image__img--lazy').exists()).toBe(true);
        });

        it('THEN does not have the unloaded class', () => {
          expect(wrapper.find('.lazy-image__root--unloaded').exists()).toBe(false);
        });

        describe('WHEN image enters viewport', () => {
          beforeEach(() => {
            // @ts-ignore
            const observerCallback = window.IntersectionObserver.mock.calls[0][0];
            observerCallback([{ isIntersecting: true }]);
          });

          it('THEN stops tracking element', () => {
            expect(disconnectSpy).toBeCalledTimes(2);
          });

          it('THEN renders the image correctly', () => {
            const qs = '?nf_resize=fit&w=';
            const imageAttrs = wrapper.find('.lazy-image__img').attributes();
            expect(imageAttrs.src).toBe(`testImage.png${qs}500`);
            expect(imageAttrs.alt).toBe('Test Image');
          });

          it('THEN does not have the lazy class', () => {
            expect(wrapper.find('.lazy-image__root--lazy').exists()).toBe(false);
          });
        });

        describe('WHEN component unmounted', () => {
          beforeEach(() => {
            wrapper.unmount();
          });

          it('THEN stops observing', () => {
            expect(disconnectSpy).toBeCalledTimes(2);
          });
        });
      });
    });
  });

  describe('WHEN image has query string and url fragment', () => {
    beforeEach(() => {
      props.src = 'testimg.png?foo=bar#testfragment';

      wrapper = mount(LazyImage, {
        propsData: props,
      });

      // @ts-ignore
      const observerCallback = window.IntersectionObserver.mock.calls[1][0];
      observerCallback([{ isIntersecting: true }]);
    });

    it('THEN correctly renders the image with correct query string', () => {
      expect(wrapper.find('.lazy-image__img').attributes().src).toBe(`testimg.png?foo=bar&nf_resize=fit&w=300`);
    });
    describe('WHEN image enters viewport', () => {
      beforeEach(() => {
        // @ts-ignore
        const observerCallback = window.IntersectionObserver.mock.calls[0][0];
        observerCallback([{ isIntersecting: true }]);
      });

      it('THEN correctly renders the image with correct query string', () => {
        expect(wrapper.find('.lazy-image__img').attributes().src).toBe(`testimg.png?foo=bar&nf_resize=fit&w=500`);
      });
    });
  });
});
