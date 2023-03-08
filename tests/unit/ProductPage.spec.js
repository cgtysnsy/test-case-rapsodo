import { shallowMount } from "@vue/test-utils";
import ProductPage from "@/components/ProductPage.vue";

describe("ProductPage", () => {
  const mockProducts = [
    { id: 1, name: "Product 1", size: "Small", color: "Red", amount: 10 },
    { id: 2, name: "Product 2", size: "Medium", color: "Blue", amount: 20 },
    { id: 3, name: "Product 3", size: "Large", color: "Green", amount: 30 },
  ];

  it("renders the correct number of products", async () => {
    const wrapper = shallowMount(ProductPage, {
      global: {
        mocks: {
          $store: {
            state: {
              products: mockProducts,
            },
            dispatch: jest.fn(),
          },
        },
      },
    });

    await wrapper.vm.$nextTick();
    const products = wrapper.findAll(".mx-auto");
    expect(products.length).toBe(mockProducts.length);
  });
});
