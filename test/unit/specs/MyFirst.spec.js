import Vue from 'vue'
import MyFirst from '@/components/MyFirst'

describe('MyFirst', () => {
  const Constructor = Vue.extend(MyFirst)
  const vm = new Constructor().$mount()
  it('h1应该有正确的内容', () => {
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('我的第一个')
  })
  it('应该有值', () => {
    expect(MyFirst.data().msg)
      .to.equal('我的第一个')
  })
})
