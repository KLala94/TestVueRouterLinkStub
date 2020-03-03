import {  mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import Third from "@/components/third.vue"
import router from "@/router/index.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("renders a component on route push", async () => {
    // const router = new VueRouter({ routes })
    const wrapper = mount(App, { 
      localVue,
      router
    })

    router.push("/third")
    await wrapper.vm.$nextTick()

    expect(wrapper.find(Third).exists()).toBe(true)
  })
})
