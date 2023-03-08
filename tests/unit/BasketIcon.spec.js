import { shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import BasketIcon from "@/components/BasketIcon.vue";

describe("BasketIcon", () => {
  let store;
  let state;

  beforeEach(() => {
    state = {
      cartItems: ["item1", "item2", "item3"],
    };
    store = new Vuex.Store({
      state,
    });
  });

  it("should display the correct number of cart items", () => {
    const wrapper = shallowMount(BasketIcon, {
      global: {
        plugins: [store],
      },
    });

    // // Mock data for testing state
    wrapper.vm.$store.state.cartItems = ["mockItem1", "mockItem2"];

    // Assert that the component renders the correct number of items
    expect(wrapper.find(".cart-icon").attributes("value")).toBe("3");
  });

  it("should link to the basket page", () => {
    const wrapper = shallowMount(BasketIcon, {
      global: {
        plugins: [store],
      },
    });

    // Assert that the component links to the basket page
    expect(wrapper.find(".route-link").attributes("to")).toBe("/basketpage");
  });
});
