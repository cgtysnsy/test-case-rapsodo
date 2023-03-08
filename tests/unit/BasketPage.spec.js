import { mount } from "@vue/test-utils";
import BasketPage from "@/components/BasketPage.vue";

describe("BasketPage.vue", () => {
  it("should render the correct elements when the cart is empty", () => {
    const wrapper = mount(BasketPage, {
      data() {
        return {
          cartItems: [],
        };
      },
    });

    expect(wrapper.find(".empty-basket-message").exists()).toBe(true);
    expect(wrapper.find(".basket-total").text()).toBe("$0");
  });

  it("should render the correct elements when the cart is not empty", () => {
    const wrapper = mount(BasketPage, {
      data() {
        return {
          cartItems: [
            {
              id: 1,
              name: "Product 1",
              size: "M",
              color: "red",
              amount: 10,
              quantity: 2,
            },
            {
              id: 2,
              name: "Product 2",
              size: "L",
              color: "blue",
              amount: 20,
              quantity: 1,
            },
          ],
        };
      },
    });

    expect(wrapper.findAll(".basket-item")).toHaveLength(2);
    expect(wrapper.find(".basket-total").text()).toBe("$40");
  });

  // Add more tests as needed
});
