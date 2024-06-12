import { shallowMount } from "@vue/test-utils";
import GridCard from "@/components/GridCard.vue";

describe("GridCard.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(GridCard);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const users = [
    {
      login: { uuid: "2" },
      name: { first: "Jane", last: "Doe" },
      picture: { medium: "https://via.placeholder.com/150" },
    },
  ];

  global.fetch = jest.fn(() => Promise.resolve(() => users));

  it("increments apiPage when button is clicked", async () => {
    console.log("testeee", wrapper.vm);
    const initialPage = wrapper.vm.apiPage;
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.vm.apiPage).toBe(initialPage + 1);
  });
});
