import store from "@/store";

describe("store", () => {
  it("should initialize with an empty cart", () => {
    expect(store.state.cartItems).toEqual([]);
  });

  it("should add an item to the cart", () => {
    const item = { name: "Test Item", stock: 10, price: 9.99 };
    store.commit("addToCart", item);
    expect(store.state.cartItems).toEqual([
      { ...item, quantity: 1, showInput: true },
    ]);
  });

  it("should increase the quantity of an item in the cart", () => {
    const item = { name: "Test Item", stock: 10, price: 9.99 };
    store.commit("addToCart", item);
    store.commit("increaseQuantity", item);
    expect(store.state.cartItems[0].quantity).toBe(2);
  });

  it("should decrease the quantity of an item in the cart", () => {
    const item = { name: "Test Item", stock: 10, price: 9.99 };
    store.commit("addToCart", item);
    store.commit("increaseQuantity", item);
    store.commit("decreaseQuantity", item);
    expect(store.state.cartItems[0].quantity).toBe(1);
  });

  it("should remove an item from the cart", () => {
    const item = { name: "Test Item", stock: 10, price: 9.99 };
    store.commit("addToCart", item);
    store.commit("removeFromCart", 0);
    expect(store.state.cartItems).toEqual([]);
  });

  it("should update the quantity of an item in the cart", () => {
    const item = { name: "Test Item", stock: 10, price: 9.99 };
    store.commit("addToCart", item);
    store.commit("updateQuantity", { item, quantity: 3 });
    expect(store.state.cartItems[0].quantity).toBe(3);
  });

  it("should fetch products", async () => {
    await store.dispatch("fetchProducts");
    expect(store.state.products.length).toBeGreaterThan(0);
  });

  it("should calculate the item count", () => {
    store.state.cartItems = [
      { name: "Test Item 1", quantity: 2 },
      { name: "Test Item 2", quantity: 3 },
    ];
    const count = store.getters.itemCount;
    expect(count).toBe(5);
  });
});
