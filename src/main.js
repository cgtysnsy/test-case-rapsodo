import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify.js";
import router from "./router";
import store from "./store";
import "vuetify/dist/vuetify.min.css";

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(store);
app.mount("#app");
