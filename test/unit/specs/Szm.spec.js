import Vue from 'vue'
import Szm from '@/components/Szm.vue'

describe('Szm', () => {
  const Constructor = Vue.extend(Szm)
  const vm = new Constructor().$mount()
  it('has a created hook', () => {
    expect(typeof Szm.created).to.equal('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Szm.data).to.equal('function')
    const defaultData = Szm.data()
    expect(defaultData.message).to.equal('Here is a test page')
  })
  it('correctly sets the message when created', () => {
    expect(vm.message).to.equal('Hello!')
  })
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Hello!')
  })
})
