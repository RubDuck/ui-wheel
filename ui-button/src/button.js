import Vue from 'vue'
import button from './button.vue'
import  icon from  './icon.vue'
import gbutton from './g-button.vue'
Vue.component('g-button',button)
Vue.component('g-icon',icon)
Vue.component('g-button-group',gbutton)

new  Vue({
    el:'#app',
    data:{
        loading:true
    }

})