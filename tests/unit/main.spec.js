import * as vue from "vue";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/store";

describe("main.js", () => {
  it("creates the Vue app with the correct options", () => {
    const app = vue.createApp(App);
    app.use(vuetify);
    app.use(router);
    app.use(store);
    expect(app._component).toBe(App);
    expect(app._installedPlugins).toContain(vuetify);
    expect(app._router).toBe(router);
    expect(app._store).toBe(store);
  });
});
