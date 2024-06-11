import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
  it('increments count when button is clicked', async () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.text()).toContain('0');
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.text()).toContain('1');
  });
});
