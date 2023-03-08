import { mount } from "vitest";
import { describe, expect } from "@vue/test-utils";
import { BasketIcon } from "../BasketIcon.vue";

describe("BasketIcon", () => {
  it("displays the correct number of items", async () => {
    const wrapper = await mount(BasketIcon, {
      props: {
        itemCount: 5,
      },
    });

    expect(wrapper.find(".item-count").text()).toBe("5");
  });

  it("displays a default item count of 0", async () => {
    const wrapper = await mount(BasketIcon);

    expect(wrapper.find(".item-count").text()).toBe("0");
  });
});
