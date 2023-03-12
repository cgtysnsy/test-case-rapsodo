import { createRouter, createWebHistory } from "vue-router";
// import BasketIcon from "./components/BasketIcon";
import BasketPage from "../src/components/BasketPage";
import ProductPage from "../src/components/ProductPage";
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
