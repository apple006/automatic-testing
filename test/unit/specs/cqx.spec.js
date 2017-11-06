import Vue from 'vue'
import checkbox from '@/components/cqx.vue'

describe('checkbox', () => {
  const Constructor = Vue.extend(checkbox)
  const vm = new Constructor().$mount()
  it('input value has nothing', () => {
    expect(vm.$el.querySelector('input').textContent)
      .to.equal('')
  })
  it('choose the second one', () => {
    expect(vm.picked).to.equal('Two')
  })

})
