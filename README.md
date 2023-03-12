# Rapsodo FE Test Case

---

**Requirements**:
• VueJS SPA
• Vuex State Management
• Vuetify
• Vue Router
• Test codes

---

**Dummy data** [https://fe-test-case-eeca77cfvq-ue.a.run.app/](https://fe-test-case-eeca77cfvq-ue.a.run.app/)

---

**Important points;**
• Reasuble components
• Vuetify component usability
• Test codes
• Git commit history

**In listing page;**
• All items will be listed
• Items can add to basket
• Items` amount can increase and decrease
• After add or remove, you can show tooltip. ‘Item has been added’ or ‘Item
has been removed’
• Basket icon can work like router link for Basket page
In basket page;
• Items in the basket will be listed
• Item amount can increase, decrease or remove from basket

---

# Install the necessary tools and dependencies

## Setup Vue Project

1. Install Node.js and npm on your computer. You can download them from the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
2. Open your terminal or command prompt and run the following command to install the Vue CLI globally:

   ```
   npm install -g @vue/cli

   ```

3. Once the installation is complete, create a new project using the Vue CLI by running the following command:

   ```
   vue create my-project

   ```

   (Replace "my-project" with the name of your project. - rapsodo-fed-test-case)

4. Follow the prompts to select the features you want to include in your project, such as Vuex and Vue Router.
5. Once the project is created, you can start the development server by running the following command:

   ```
   cd my-project
   npm run serve

   ```

   This will start a local development server at [http://localhost:8080](http://localhost:8080/) where you can see your project running in the browser.

## Setup Vuex

To install Vuex for state management, follow these steps:

1. Install Vuex using npm by running the following command in your project directory:

   ```
   npm install vuex --save

   ```

2. Once the installation is complete, create a new file called `store.js` in your project directory.
3. In `store.js`, import Vuex and create a new store instance:

   Here is an example of how to set up a Vuex store with Vue 3:

   ```jsx
   import { createStore } from "vuex";

   export default createStore({
     state() {
       return {
         // Your state properties here
       };
     },
     mutations: {
       // Your mutations here
     },
     actions: {
       // Your actions here
     },
   });
   ```

   Instead of `Vue.use(Vuex)`, we use the `createStore` function from Vuex. The rest of the code remains the same as in Vue 2.

4. In your main Vue instance, import the store and add it to the `store` option:

   ```jsx
   import { createApp } from "vue";
   import store from "./store";
   import App from "./App.vue";

   const app = createApp(App);
   app.use(store);
   app.mount("#app");
   ```

   This will make the store available throughout your app.

5. You can now use Vuex to manage your app's state by defining state, mutations, and actions in `store.js`, and accessing them in your components using `store`. Note that in Vue 3, the way to install Vuex has changed slightly. Instead of using `Vue.use(Vuex)`, you should use `app.use(store)` in your main Vue instance. Additionally, the `createStore` function should be used instead of the `new Vuex.Store` syntax.

## Setup Vuetify

To install Vuetify for UI components in Vue 3, follow these steps:

1. Install Vuetify using npm by running the following command in your project directory:

   ```
   npm install vuetify@next

   ```

2. In your `main.js` file, import Vuetify and its CSS styles:

   ```jsx
   import { createApp } from "vue";
   import App from "./App.vue";
   import vuetify from "./plugins/vuetify";

   createApp(App).use(vuetify).mount("#app");
   ```

3. Create a `plugins` directory in your project, and create a new file `vuetify.js` inside it:

   ```
   import { createVuetify } from 'vuetify'
   import 'vuetify/dist/vuetify.min.css'

   export default createVuetify({
     // Your Vuetify options here
   });

   ```

4. In your `main.js` file, import the Vuetify plugin:

   ```jsx
   import vuetify from "./plugins/vuetify";

   const app = createApp(App);
   app.use(vuetify);
   app.mount("#app");
   ```

## Setup Vue Router

To install Vue Router for routing in Vue 3, follow these steps:

1. Install Vue Router using npm by running the following command in your project directory:

   ```
   npm install vue-router@next

   ```

2. In your `main.js` file, import Vue Router and create a new router instance:

   ```
   import { createApp } from 'vue'
   import App from './App.vue'
   import router from './router'

   const app = createApp(App)
   app.use(router)
   app.mount('#app')

   ```

3. In your project directory, create a new file called `router.js`.
4. In `router.js`, import Vue Router and define your routes:

   ```jsx
   import { createRouter, createWebHistory } from "vue-router";

   const routes = [
     {
       path: "/",
       name: "Home",
       component: Home,
     },
     {
       path: "/about",
       name: "About",
       component: About,
     },
     // Your other routes here
   ];

   const router = createRouter({
     history: createWebHistory(),
     routes,
   });

   export default router;
   ```

   Note that in Vue 3, you should use `createRouter` instead of `new VueRouter`. Additionally, the `mode` option has been replaced with the `history` option, which takes a `createWebHistory` or `createWebHashHistory` function to configure the router mode.

5. In your main Vue instance, import the router and add it to the `use` method:

   ```
   import { createApp } from 'vue'
   import App from './App.vue'
   import router from './router'

   const app = createApp(App)
   app.use(router)
   app.mount('#app')

   ```

6. You can now use Vue Router to create dynamic routes and navigate between pages in your VueJS SPA project.

## Setup Testing Frameworks

To set up **Jest** for Vue 3 without TypeScript, follow these steps:

1. Install Jest and the necessary dependencies:

```
npm install --save-dev jest @vue/test-utils vue-jest babel-jest jest-transform-stub

```

> With Vue 3 some peers should be checked for disjointedness.
> I had checked from here for ***@vue/vue3-jest* versions and peer dependencies.**
>
> - _@vue/vue3-jest_ 27.0.0
> - @babel/core @ 7.x
> - babel-jest @ 27.x
> - jest @ 27.x
> - ts-jest @ 27.x
> - typescript @ >= 3.x
> - vue @ ^3.0.0-0

1. Create a `jest.config.js` file in your project root directory and add the following configuration:

```
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest", // add this to transform JS files using Babel
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.m?js$": "babel-jest",
    ".js": "jest-esm-transformer",
  },
  // setupFilesAfterEnv: ["<rootDir>tests/setup.ts"],

  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,ts,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],

  transformIgnorePatterns: [
    "/node_modules/",
    "/node_modules/(?!(vuetify)/)",
    "/node_modules/(?!vuetify)",
    "/node_modules/(?!vuex)",
    "/node_modules/(?!vuetify/lib-to-transform|vuetify/es5/components/index.js')",

    "/node_modules/(?!vuetify).+\\.js$",
    "node_modules/(?!vue-router|@babel|vuetify)",
  ],
  moduleNameMapper: {
    "^vuetify/lib$": "vuetify/es5/entry-lib",
    "^vuetify/lib/(.*)": "vuetify/es5/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^vuetify/lib(.*)": "<rootDir>/node_modules/vuetify/es5$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testMatch: [
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  coverageReporters: ["html", "text-summary"],
  moduleFileExtensions: ["js", "jsx", "json", "vue", "mjs"],
};

//Dont ask me why it is so long :)) I have tried lots of bug fix for solving ES for vuetify.
```

This configuration tells Jest how to transform different types of files, where to find test files, and how to map module paths.

1. Create a `tests/unit` directory in your project, and create a new test file inside it:

```
import { mount } from '@vue/test-utils';
import MyComponent from '@/components/MyComponent.vue';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

```

This is an example of a basic test that checks whether a component renders correctly.

1. Run the Jest test runner using the following command:

```jsx
npm run test:unit

```

This will run all the tests in your `tests/unit` directory and generate a report of the results.

# Start a new VueJS SPA project

- Use the Vue CLI to create a new project
- Configure your project with Vuetify, Vuex, and Vue Router
- Create reusable components like a product card, a basket item, etc.

1. Create a new Vue component by defining a new **`.vue`** file, such as **`ProductCard.vue`**.
2. Inside the **`.vue`** file, define the component template, styles, and script.
3. Define the component's props, which are used to pass data into the component.
4. Define the component's events, which are used to emit data out of the component.
5. Export the component using the **`export default`** statement.
6. Import the component into your main Vue app or into other components where it will be used.
7. Use the component in your app or other components by adding its tag to your template, passing in any necessary props, and listening for any emitted events.

Here's an example of how to create a **`ProductCard`** component:

```jsx

<template>
  <div class="product-card" v-for="product in products" :key="product.id">
    <img :src="product.imageUrl" :alt="product.title" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <button @click="addToCart(product)">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Product 1",
          description: "This is product 1",
          imageUrl: "https://via.placeholder.com/200x150",
        },
        {
          id: 2,
          title: "Product 2",
          description: "This is product 2",
          imageUrl: "https://via.placeholder.com/200x150",
        },
        {
          id: 3,
          title: "Product 3",
          description: "This is product 3",
          imageUrl: "https://via.placeholder.com/200x150",
        },
      ],
      cart: [],
    };
  },

  methods: {
    // addToCart() {
    //   this.$emit("add-to-cart", this.title);
    // },
    addToCart(product) {
      this.cart.push(product);
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid black;
  padding: 1rem;
}
.product-card img {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
}
.product-card h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.product-card p {
  margin-bottom: 1rem;
}
.product-card button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>

```

In this example, the **`ProductCard`** component has three props: **`title`**, **`description`**, and **`imageUrl`**. It also emits an **`add-to-cart`** event when the "Add to Cart" button is clicked.

This component could be imported and used in other parts of your app like this:

```jsx

<template>
  <ProductCard />
</template>

<script>
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  components: {
    ProductCard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

In this example, the **`ProductCard`** component is imported and used inside another component's template using the component's tag. The **`v-for`** directive is used to render a list of products, passing in each product's data as props to the **`ProductCard`** component. When the "Add to Cart" button is clicked, the **`addToCart`** method is called, which adds the product's title to the **`cart`** array in the component's data.

# Set up API integration

- Use the provided dummy data API endpoint to fetch data for product listings and basket items
- Use Vuex state management to manage the fetched data

1. Create a new file named **`store.js`** in your project's **`src`** directory. Inside this file, import Vuex and create a new store instance with a state object, mutations to update the state, actions to fetch data from the API, and getters to get data from the state.

   ```jsx
   //store.js
   import { createStore } from "vuex";

   const store = createStore({
     state: {
       products: [],
       cartItems: [],
     },
     mutations: {
       setProducts(state, products) {
         state.products = products;
       },
       addToCart(state, item) {
         state.cartItems.push(item);
       },
       removeFromCart(state, index) {
         state.cartItems.splice(index, 1);
       },
     },
     actions: {
       async fetchProducts({ commit }) {
         const response = await fetch(
           "https://fe-test-case-eeca77cfvq-ue.a.run.app"
         );
         const products = await response.json();
         commit("setProducts", products);
       },
       addToCart({ commit }, item) {
         commit("addToCart", item);
       },
       removeFromCart({ commit }, item) {
         commit("removeFromCart", item);
       },
     },
   });

   export default store;
   ```

2. In your main **`App.vue`** component, import the Vuex store and use the **`store.dispatch`** method to dispatch the **`fetchProducts`** action to fetch data from the API.

```jsx

//App.vue
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";

const app = createApp(App);
app.use(store);
app.use(vuetify);
app.use(router);
store.dispatch("fetchProducts");
app.mount("#app");

//In ProductCar.vue

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["products", "cartItems"]),
  },
  methods: {
    ...mapActions(["fetchProducts", "addToCart", "removeFromCart"]),
  },
  created() {
    this.fetchProducts();
  },
};
</script>
```

c. Use Vuex getters in your components to get the data from the store and display it in your app. You can also use Vuex mutations to update the store state.

# Epics for Jira

### Epic: User Interface (UI)

Story UI-1: Create a responsive layout using Vuetify
Story UI-2: Create a home page with a list of available items
Story UI-3: Create an item details page with more information about each item???
Story UI-4: Create a shopping cart page to show items added to cart

### Epic: Application State Management (ASM)

Story ASM-1: Set up a Vuex store to manage application state
Story ASM-2: Create actions and mutations to manage shopping cart state
Story ASM-3: Create actions and mutations to manage order history state

### Epic: Routing and Navigation (RN)

Story RN-1: Set up Vue Router to manage application routing
Story RN-2: Create routes for home, item details, shopping cart, checkout, and order history pages
Story RN-3: Create navigation links and buttons to move between pages

### Epic: Backend Integration (BI)

Story BI-1: Connect to the backend API to retrieve item and order data
Story BI-2: Create actions and mutations to handle API requests and responses
Story BI-3: Handle errors and edge cases in API requests and responses

### Epic: Testing and Quality Assurance (QA)

Story QA-1: Write unit tests to test each component and function
Story QA-2: Write integration tests to test the application as a whole???
Story QA-3: Set up a code quality tool like ESLint to ensure consistent code formatting and best practices???
Story QA-4: Set up a code coverage tool like Istanbul to measure test coverage and identify areas for improvement???

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4b895d6-4b57-4f87-8698-6e557a1d4731/Untitled.png)

## Sprints

### Sprint 1:

- Story UI-1: Create a responsive layout using Vuetify
- Story UI-2: Create a home page with a list of available items
- Story RN-1: Set up Vue Router to manage application routing
- Story RN-2: Create routes for home, item details, shopping cart, checkout, and order history pages
- Story RN-3: Create navigation links and buttons to move between pages

### Sprint 2:

- Story UI-3: Create an item details page with more information about each item
- Story UI-4: Create a shopping cart page to show items added to cart
- Story ASM-1: Set up a Vuex store to manage application state
- Story ASM-2: Create actions and mutations to manage shopping cart state

### Sprint 3:

- Story UI-5: Create a checkout page to enter shipping and payment information
- Story UI-6: Create an order history page to track order status
- Story ASM-3: Create actions and mutations to manage order history state
- Story BI-1: Connect to the backend API to retrieve item and order data

### Sprint 4:

- Story BI-2: Create actions and mutations to handle API requests and responses
- Story BI-3: Handle errors and edge cases in API requests and responses
- Story QA-1: Write unit tests to test each component and function
