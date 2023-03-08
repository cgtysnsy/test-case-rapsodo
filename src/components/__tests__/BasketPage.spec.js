import { shallowMount, describe, expect } from "vites";
import BasketPage from "../BasketPage.vue";

describe("BasketPage", () => {
  it("displays a message when the cart is empty", () => {
    const cartItems = [];
    const wrapper = shallowMount(BasketPage, {
      global: {
        mocks: {
          $store: {
            state: { cartItems },
          },
        },
      },
    });
    expect(wrapper.text()).toContain("Your basket is empty.");
  });

  it("displays the correct subtotal", () => {
    const cartItems = [
      {
        id: 1,
        name: "Product 1",
        size: "M",
        color: "Blue",
        amount: 10,
        quantity: 2,
      },
      {
        id: 2,
        name: "Product 2",
        size: "L",
        color: "Red",
        amount: 20,
        quantity: 1,
      },
    ];
    const wrapper = shallowMount(BasketPage, {
      global: {
        mocks: {
          $store: {
            state: { cartItems },
          },
        },
      },
    });
    const subtotal1 = cartItems[0].amount * cartItems[0].quantity;
    const subtotal2 = cartItems[1].amount * cartItems[1].quantity;
    const expectedTotal = subtotal1 + subtotal2;
    expect(wrapper.text()).toContain(`$${expectedTotal}`);
  });

  it("updates the quantity of an item", async () => {
    const cartItems = [
      {
        id: 1,
        name: "Product 1",
        size: "M",
        color: "Blue",
        amount: 10,
        quantity: 2,
      },
    ];
    const wrapper = shallowMount(BasketPage, {
      global: {
        mocks: {
          $store: {
            state: { cartItems },
            commit: jest.fn(),
          },
        },
      },
    });
    const input = wrapper.find("input");
    await input.setValue(3);
    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith("updateQuantity", {
      item: cartItems[0],
      quantity: 3,
    });
  });
});
