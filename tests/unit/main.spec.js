import { createApp } from "vue";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import store from "@/store";
import { mount } from "@vue/test-utils";

describe("main.js", () => {
  it("creates the Vue app with the correct options", async () => {
    const app = createApp(App);
    app.use(vuetify);
    app.use(router);
    app.use(store);

    const wrapper = mount(app);
    expect(wrapper.findComponent(App).exists()).toBe(true);
    expect(wrapper.vm.$vuetify).toBe(vuetify);
    expect(wrapper.vm.$router).toBe(router);
    expect(wrapper.vm.$store).toBe(store);
  });
});
