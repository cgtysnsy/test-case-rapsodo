import { mount } from "@vue/test-utils";
import BasketPage from "@/components/BasketPage.vue";

describe("BasketPage", () => {
  it("displays the correct items and subtotal", () => {
    const state = {
      cartItems: [
        {
          id: 1,
          name: "Product 1",
          size: "M",
          color: "Red",
          amount: 10,
          quantity: 2,
        },
        {
          id: 2,
          name: "Product 2",
          size: "L",
          color: "Blue",
          amount: 20,
          quantity: 1,
        },
      ],
    };
    const getters = {
      total: 40,
    };
    const store = {
      state,
      getters,
      commit: jest.fn(),
    };
    const wrapper = mount(BasketPage, {
      global: {
        plugins: [store],
      },
    });

    const items = wrapper.findAll(".basket-item");
    expect(items).toHaveLength(2);

    const item1 = items[0];
    expect(item1.find("h3").text()).toBe("Product 1");
    expect(item1.find(".size").text()).toBe("Size: M");
    expect(item1.find(".color").text()).toBe("Color: Red");
    expect(item1.find(".price").text()).toBe("$20");
    expect(item1.find(".quantity-input").element.value).toBe("2");

    const item2 = items[1];
    expect(item2.find("h3").text()).toBe("Product 2");
    expect(item2.find(".size").text()).toBe("Size: L");
    expect(item2.find(".color").text()).toBe("Color: Blue");
    expect(item2.find(".price").text()).toBe("$20");
    expect(item2.find(".quantity-input").element.value).toBe("1");

    const subtotal = wrapper.find(".subtotal");
    expect(subtotal.text()).toBe("Subtotal $40");
  });
});
