const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../ui-button/src/input'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
        vm.$destroy()
      })
     it('接收 disabled', () => {
        vm = new Constructor({
          propsData: {
            disabled: true
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
      })
      it('接收 value', () => {
        vm = new Constructor({
          propsData: {
            value: '1234'
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
      })
      it('接收 readonly', () => {
        vm = new Constructor({
          propsData: {
            readonly: true
          }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.readOnly).to.equal(true)
      })
      it('接收 error', () => {
        vm = new Constructor({
          propsData: {
            error: '你错了'
          }
        }).$mount()
        const useElement = vm.$el.querySelectorAll('use')
        expect(useElement[0].getAttribute('xlink:href')).to.equal('#icon-error')
        const errorMessage = vm.$el.querySelector('.errorMessage')
        expect(errorMessage.innerText).to.equal('你错了')
      })
    })