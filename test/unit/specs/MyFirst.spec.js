import Vue from 'vue'
import MyFirst from '@/components/MyFirst'

describe('MyFirst.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MyFirst)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('我的第一个')
  })
})
