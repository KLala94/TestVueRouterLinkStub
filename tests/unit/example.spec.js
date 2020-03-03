import Menu from '@/views/Menu.vue'
import {  createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils'
import VueRouter from 'vue-router'
import flushPromises from 'flush-promises'
import Vue from 'vue'
import router from "@/router/index.js"
describe('Menu.vue',  () => {

  const localVue = createLocalVue()
  localVue.use(VueRouter)
  

  test('click on first routes to ./first', async () => {
    const wrapper = shallowMount(Menu, {localVue,
      router, stubs: {
        RouterLink: RouterLinkStub
      }})
    wrapper.find('#testFirst').trigger('click')
    await Vue.nextTick()
    
    // .vm.$emit('click')
    expect(wrapper.find('#testFirst').exists()).toBe(true)
  
  
    await flushPromises()
    expect(location.pathname).toBe('/')
  })
})
