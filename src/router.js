import { createRouter, createWebHistory } from "vue-router";
// import BasketIcon from "./components/BasketIcon";
import BasketPage from "./components/BasketPage.vue";
import ProductPage from "./components/ProductPage.vue";
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

  //Other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
