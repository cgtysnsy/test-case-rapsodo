import { createStore } from "vuex";
import { nanoid } from "nanoid";

const store = createStore({
  state: {
    products: [],
    cartItems: [],
    isLoading: false,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setisLoading(state, isLoading) {
      state.isLoading = isLoading;
    },

    //!!!For refractoring, try send index as a argument instead of defining index inside the functions.!!!

    // add a new item to the basket
    addToCart(state, item) {
      // check if the item is already in the basket
      const index = state.cartItems.findIndex((i) => i.name === item.name);

      if (index !== -1) {
        // if the item is already in the basket, increment the quantity
        if (state.cartItems[index].quantity + 1 > item.stock) {
          // check if the item's quantity will exceed the stock number
          alert("Stock limit reached!");
          return;
        }
        state.cartItems[index].quantity++;
      } else {
        // if the item is not in the basket, add it with a quantity of 1
        if (item.quantity > item.stock) {
          // check if the item's quantity is greater than the stock number
          alert("Stock limit reached!");
          return;
        }
        state.cartItems.push({
          ...item,
          quantity: item.quantity,
        });
      }
      item.showInput = true;
    },
    // increase the quantity of an item in the basket
    increaseQuantity(state, item) {
      const index = state.cartItems.findIndex((i) => i.name === item.name);
      if (state.cartItems[index].quantity + 1 > item.stock) {
        // check if the item's quantity will exceed the stock number
        alert("Stock limit reached!");
        return;
      }
      state.cartItems[index].quantity++;
    },
    // decrease the quantity of an item in the basket
    decreaseQuantity(state, item) {
      const cartItem = state.cartItems.find((i) => i.name === item.name);

      if (cartItem && cartItem.quantity > 1) {
        // if the quantity is greater than 1, decrease the quantity
        cartItem.quantity--;
      } else {
        // if the quantity of the item is 1, remove it from the basket
        const index = state.cartItems.findIndex((i) => i.name === item.name);
        state.cartItems.splice(index, 1);
      }
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
    updateQuantity(state, { item, quantity }) {
      const product = state.products.find((p) => p.name === item.name);
      const cartItem = state.cartItems.find((i) => i.name === item.name);

      if (!product || !cartItem) {
        return; // product or item not found, do nothing
      }

      if (quantity > 0 && quantity <= product.stock) {
        // if the quantity is within the stock range, update the quantity
        cartItem.quantity = Number(quantity);
      } else if (quantity <= 0) {
        // if the quantity is 0 or negative, remove the item from the basket
        const index = state.cartItems.findIndex((i) => i.name === item.name);
        state.cartItems.splice(index, 1);
      }
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setisLoading", true); //set loading state to true
      try {
        const response = await fetch(
          "https://fe-test-case-eeca77cfvq-ue.a.run.app"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        if (!Array.isArray(products)) {
          throw new Error("Invalid response data format");
        }
        this.products = products.map((product) => ({
          ...product,
          showInput: false,
          quantity: 1,
          id: nanoid(),
        }));
        commit("setProducts", this.products);
        commit("setisLoading", false);
      } catch (error) {
        console.error(error);
        // Handle the error by displaying a friendly message to the user
      }
    },
    addToCart({ commit }, item) {
      commit("addToCart", item);
    },
    increaseQuantity({ commit }, item) {
      commit("increaseQuantity", item);
    },
    decreaseQuantity({ commit }, item) {
      commit("decreaseQuantity", item);
    },
    removeFromCart({ commit }, item) {
      commit("removeFromCart", item);
    },
    updateQuantity({ commit }, { item, quantity }) {
      commit("updateQuantity", { item, quantity });
    },
  },
  getters: {
    itemCount: (state) => state.cartItems.length,
  },
});

export default store;
