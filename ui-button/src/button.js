import Vue from 'vue'
import button from './button.vue'
import  icon from  './icon.vue'
import gbutton from './g-button.vue'
import { builtinModules } from 'module';
Vue.component('g-button',button)
Vue.component('g-icon',icon)
Vue.component('g-button-group',gbutton)

new  Vue({
    el:'#app',
    data:{
        loading:true
    }
})

//单元测试1

import chai from 'chai'
const expect= chai.expect
{
const Constructor=Vue.extend(button)
const vm =new Constructor({
    propsData:{
        icon:'setting'
    }
})

vm.$mount('#test')
let useElement=vm.$el.querySelector('use')
expect(useElement.getAttribute('xlink:href')).to.eq('#icon-setting')
vm.$el.remove()
vm.$destroy()

}


//单元测试2

{
    const Constructor=Vue.extend(button)
    const vm =new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    
    vm.$mount()
    let useElement=vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading') 
    vm.$el.remove()
    vm.$destroy()
}




//单元测试3

{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(button)
    const vm =new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    
    vm.$mount(div)
    let useElement=vm.$el.querySelector('svg')
    let {order}=window.getComputedStyle(useElement)
    expect(order).to.eq('-1')  
    vm.$el.remove()
    vm.$destroy()
}

