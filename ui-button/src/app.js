import Vue from 'vue'
import button from './button.vue'
import  icon from  './icon.vue'
import gbutton from './button-group.vue'
import input from './input.vue'
import col from './col.vue'
import row from './row.vue'
import { builtinModules } from 'module';
Vue.component('g-button',button)
Vue.component('g-icon',icon)
Vue.component('g-button-group',gbutton)
Vue.component('g-input',input)
Vue.component('g-row',row)
Vue.component('g-col',col)

new  Vue({
    el:'#app',
    data:{
    
        loading:true
    }
})

//单元测试1

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
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



//单元测试4

{
    
    const Constructor=Vue.extend(button)
    const vm =new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    
    vm.$mount()
    let spy=chai.spy(function(){})
    vm.$on('click',spy)
    let Butto=vm.$el
    Butto.click()
    expect(spy).to.have.been.called()
}

