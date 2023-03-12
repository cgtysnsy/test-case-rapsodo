import { createStore } from "vuex";
// import { nanoid } from "nanoid";

const updateLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const store = createStore({
  state: {
    products: [],
    cartItems: [],
    cartItemsStorage: [],
    isLoading: false,
    isFetched: false,
    images: [
      "https://cdn.shopify.com/s/files/1/0597/7853/1477/files/mlm-home_360x.png?v=1655992541",
      "https://cdn.shopify.com/s/files/1/0597/7853/1477/files/hitting-home_360x.png?v=1655993152",
      "https://cdn.shopify.com/s/files/1/0597/7853/1477/files/pitching-home_360x.png?v=1655993240",
      "https://cdn.shopify.com/s/files/1/0597/7853/1477/files/pro3-home_360x.png?v=1655993277",
    ],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCartItemsFromLocalStorage(state) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      state.cartItemsStorage = cartItems;
    },
    setisLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setIsFetched(state, isFetched) {
      state.isFetched = isFetched;
    },
    //!!!For refractoring, try send index as a argument instead of defining index inside the functions.!!!

    // add a new item to the basket
    addToCart(state, item) {
      // check if the item is already in the basket

      const index = state.cartItemsStorage.findIndex(
        (i) => i.name === item.name
      );

      if (index !== -1) {
        // if the item is already in the basket, increment the quantity
        if (state.cartItemsStorage[index].quantity + 1 > item.stock) {
          // check if the item's quantity will exceed the stock number
          alert("Stock limit reached!");
          return;
        }
        state.cartItemsStorage[index].quantity++;
      } else {
        // if the item is not in the basket, add it with a quantity of 1
        if (item.quantity > item.stock) {
          // check if the item's quantity is greater than the stock number
          alert("Stock limit reached!");
          return;
        }
        state.cartItemsStorage.push({
          ...item,
          quantity: item.quantity,
        });
      }

      // item.showInput = true;

      updateLocalStorage("cartItems", state.cartItemsStorage);
    },

    // increase the quantity of an item in the basket
    increaseQuantity(state, item) {
      const index = state.cartItemsStorage.findIndex(
        (i) => i.name === item.name
      );
      if (state.cartItemsStorage[index].quantity + 1 > item.stock) {
        // check if the item's quantity will exceed the stock number
        alert("Stock limit reached!");
        return;
      }
      state.cartItemsStorage[index].quantity++;
      console.log("state.cartItemStora", state.cartItemsStorage[0].quantity);
      updateLocalStorage("cartItems", state.cartItemsStorage);
    },
    // decrease the quantity of an item in the basket
    decreaseQuantity(state, item) {
      // const cartItem = state.cartItemsStorage.find((i) => i.name === item.name);
      const index = state.cartItemsStorage.findIndex(
        (i) => i.name === item.name
      );
      if (
        state.cartItemsStorage[index] &&
        state.cartItemsStorage[index].quantity > 1
      ) {
        // if the quantity is greater than 1, decrease the quantity
        state.cartItemsStorage[index].quantity--;
      } else {
        // if the quantity of the item is 1, remove it from the basket
        const index = state.cartItemsStorage.findIndex(
          (i) => i.name === item.name
        );

        state.cartItemsStorage.splice(index, 1);

        const productIndex = state.products.findIndex((p) => p.id === item.id);
        console.log("productIndex", productIndex);
        let updatedProducts = [...this.state.products];
        updatedProducts[productIndex].showInput = false;

        updateLocalStorage("productsStorage", updatedProducts);
      }

      updateLocalStorage("cartItems", state.cartItemsStorage);
    },
    removeFromCart(state, item) {
      const index = state.cartItemsStorage.findIndex((i) => i.id === item.id);
      console.log("index", index);
      state.cartItemsStorage.splice(index, 1);
      const productIndex = state.products.findIndex((p) => p.id === item.id);
      console.log("productIndex", productIndex);
      let updatedProducts = [...this.state.products];
      updatedProducts[productIndex].showInput = false;

      updateLocalStorage("productsStorage", updatedProducts);
      updateLocalStorage("cartItems", state.cartItemsStorage);
    },
    updateQuantity(state, { item, quantity }) {
      const product = state.products.find((p) => p.id === item.id);
      const cartItem = state.cartItemsStorage.find((i) => i.id === item.id);

      if (!product || !cartItem) {
        return; // product or item not found, do nothing
      }

      if (quantity > 0 && quantity <= product.stock) {
        // if the quantity is within the stock range, update the quantity
        cartItem.quantity = Number(quantity);
      } else if (quantity <= 0) {
        // if the quantity is 0 or negative, remove the item from the basket
        const index = state.cartItemsStorage.findIndex(
          (i) => i.name === item.name
        );
        state.cartItemsStorage.splice(index, 1);
        const productIndex = state.products.findIndex((p) => p.id === item.id);
        console.log("productIndex", productIndex);
        let updatedProducts = [...this.state.products];
        updatedProducts[productIndex].showInput = false;

        updateLocalStorage("productsStorage", updatedProducts);
      }
      updateLocalStorage("cartItems", state.cartItemsStorage);
    },
  },
  actions: {
    async fetchProducts({ commit, state }) {
      commit("setisLoading", true); //set loading state to true
      console.log("state.isFetched", state.isFetched);
      if (state.isFetched) {
        const productsStorage = JSON.parse(
          localStorage.getItem("productsStorage")
        );
        console.log("producstStoragesdc", productsStorage);

        commit("setProducts", productsStorage);
        commit("setisLoading", false);
      } else {
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

          this.products = products.map((product, index) => ({
            ...product,
            showInput: false,
            quantity: 1,
            id: index + 1,
            showTooltip: false,
            imageUrl: this.state.images[Math.floor(Math.random() * 4)],
          }));

          updateLocalStorage("productsStorage", this.products);
          const productsStorage = JSON.parse(
            localStorage.getItem("productsStorage")
          );
          console.log("producstStorage", productsStorage);

          commit("setProducts", productsStorage);

          // commit("setProducts", this.products);
          commit("setIsFetched", true);
          commit("setisLoading", false);
        } catch (error) {
          console.error(error);

          // Handle the error by displaying a friendly message to the user
        }
      }
    },

    addToCart({ commit }, item) {
      const productToAdd = this.state.products.find((p) => p.id === item.id);
      const productIndex = this.state.products.findIndex(
        (p) => p.id === item.id
      );
      if (productToAdd.stock > 0) {
        productToAdd.showInput = true;
        let updatedProducts = [...this.state.products];
        updatedProducts[productIndex].showInput = true;
        updateLocalStorage("productsStorage", updatedProducts);
        const productsStorage = JSON.parse(
          localStorage.getItem("productsStorage")
        );

        commit("setProducts", productsStorage);
      }

      commit("addToCart", item);
    },
    initializeCartItemsFromLocalStorage({ commit }) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      commit("setCartItemsFromLocalStorage", cartItems);
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
    getData(state) {
      return state.products;
    },
  },
});

export default store;
