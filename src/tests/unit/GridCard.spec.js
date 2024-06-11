import { shallowMount } from '@vue/test-utils';
import GridCard from '@/components/GridCard.vue';

describe('GridCard.vue', () => {
  it('fetches users and displays them', async () => {
    const wrapper = shallowMount(GridCard);
    await wrapper.vm.$nextTick(); // Wait for the next DOM update cycle
    expect(wrapper.vm.users.length).toBeGreaterThan(0);
  });

  it('increments apiPage when button is clicked', async () => {
    const wrapper = shallowMount(GridCard);
    const initialPage = wrapper.vm.apiPage;
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.vm.apiPage).toBe(initialPage + 1);
  });
});
