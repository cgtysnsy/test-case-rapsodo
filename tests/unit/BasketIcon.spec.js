import { shallowMount } from "@vue/test-utils";

import { BasketIcon } from "@/components/BasketIcon.vue";

describe("BasketIcon", () => {
  it("renders the basket icon and item count", () => {
    const cartItems = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];
    const wrapper = shallowMount(BasketIcon, {
      computed: {
        cartItems: () => cartItems,
      },
    });
    const icon = wrapper.find(".cart-icon");
    expect(icon.exists()).toBe(true);
    expect(icon.attributes("icon")).toBe("mdi-cart");
    expect(icon.attributes("color")).toBe("orange");
    expect(wrapper.find(".cart-icon:after").text()).toBe(
      cartItems.length.toString()
    );
  });

  it("links to the basket page", () => {
    const wrapper = shallowMount(BasketIcon);
    const link = wrapper.find(".route-link");
    expect(link.exists()).toBe(true);
    expect(link.attributes("to")).toBe("/basketpage");
  });
});