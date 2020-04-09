import Menu from "@/views/Menu.vue";
import { mount, RouterLinkStub } from '@vue/test-utils'
import flushPromises from "flush-promises";
describe("Menu.vue", () => {

  const wrapper = mount(Menu, {
    stubs: {
      RouterLink: RouterLinkStub,
    }
  })
  test("click on first routes to ./first", async () => {

    await flushPromises();
    expect(wrapper.find('#testFirst').props().to).toBe('/first')
    expect(wrapper.find('#testFirst').text()).toBe('first')
  });
  test("click on second routes to ./second", async () => {
    await flushPromises();
    expect(wrapper.find('#testSecond').props().to).toBe('/second')
    expect(wrapper.find('#testSecond').text()).toBe('second')

  });
  test("click on third routes to ./third", async () => {
    await flushPromises();
    expect(wrapper.find('#testThird').props().to).toBe('/third')
    expect(wrapper.find('#testThird').text()).toBe('third')

  })
  test("click on Main routes to ./", async () => {
    await flushPromises();
    expect(wrapper.find('#testMain').props().to).toBe('/')
    expect(wrapper.find('#testMain').text()).toBe('Main Page')

  });
});