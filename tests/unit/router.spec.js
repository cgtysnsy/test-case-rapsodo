import { createRouter, createWebHistory } from "vue-router";
import BasketPage from "./components/BasketPage.vue";
import ProductPage from "./components/ProductPage.vue";

describe("Router", () => {
  test("Routes are configured correctly", () => {
    const routes = [
      {
        path: "/",
        name: "Home",
        component: ProductPage,
      },
      {
        path: "/basketpage",
        name: "BasketPage",
        component: BasketPage,
      },
    ];

    const router = createRouter({
      history: createWebHistory(),
      routes,
    });

    expect(router.options.routes).toEqual(routes);
    expect(router.options.history).toBeInstanceOf(Function);
  });
});
