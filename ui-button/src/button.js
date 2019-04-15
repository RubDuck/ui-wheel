import Vue from 'vue'
import button from './button.vue'
import  icon from  './icon.vue'
Vue.component('g-button',button)
Vue.component('g-icon',icon)

new  Vue({
    el:'#app'

})