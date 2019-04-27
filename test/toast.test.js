 const expect = chai.expect;
 import Vue from 'vue'
 import Toast from '../ui-button/src/toast'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Toast', () => {
    it('Toast存在.', () => {
        expect(Toast).to.be.ok
    })
   
})