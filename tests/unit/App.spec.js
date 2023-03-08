import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("renders a router-link to the basket page", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find(".route-link").attributes("to")).toBe("/basketpage");
  });

  it("renders a router-link to the home page", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find(".route-link").attributes("to")).toBe("/");
  });

  it("renders a BasketIcon component", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent({ name: "BasketIcon" })).toBeTruthy();
  });

  it("renders a router-view component", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent({ name: "RouterView" })).toBeTruthy();
  });
});
