import Menu from "@/views/Menu.vue";
import First from "@/components/first.vue";
import { mount, RouterLinkStub } from '@vue/test-utils'
import flushPromises from "flush-promises";
describe("Menu.vue", () => {

  test("click on first routes to ./first", async () => {
    const wrapper = mount(Menu, {
      stubs: {
        RouterLink: RouterLinkStub,
        First
      }
    })

    await flushPromises();
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/first')
  })});