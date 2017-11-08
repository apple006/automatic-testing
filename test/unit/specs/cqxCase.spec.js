import Vue from 'vue'
import MyTitle from '@/components/cqxCase.vue'

describe('i have a dream', () => {
  const Constructor = Vue.extend(MyTitle)
  const vm = new Constructor().$mount()

  // 检查是否是function的类型
  it('我也是有一个function滴!',() =>{
    expect(typeof MyTitle.data).to.equal('function')
  })
  it('有信息哒',()=>{
    expect(vm.msg).to.equal('hi there');
  })
})
