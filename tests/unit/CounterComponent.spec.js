import { shallowMount } from "@vue/test-utils";
import CounterComponent from "@/components/CounterComponent.vue";

describe("CounterComponent.vue", () => {
  it("increments count when button is clicked", async () => {
    const wrapper = shallowMount(CounterComponent);
    expect(wrapper.text()).toContain("0");
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.text()).toContain("1");
  });
});
