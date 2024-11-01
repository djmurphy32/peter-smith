import { VueWrapper, shallowMount } from "@vue/test-utils";
import { describe, beforeEach, it, expect, vi } from "vitest";
import PortfoliosWrapper from "@/components/PortfoliosWrapper.vue";
import { GlobEagerImport } from "@/typings/globImport";

describe("PortfoliosWrapper", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    (window as any).IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      disconnect: vi.fn(),
    }));
    wrapper = shallowMount(PortfoliosWrapper);
  });

  it("THEN has at least one image per portfolio", () => {
    const portfolios = wrapper.findAllComponents({ name: "PortfolioContent" });

    portfolios.forEach((portfolio) => {
      const images = portfolio.props().importedImages as GlobEagerImport;
      expect(Object.keys(images).length).toBeGreaterThan(0);
    });
  });
});
