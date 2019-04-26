import Toast from './toast.vue'

export default{
    install (Vue, options) {
        Vue.prototype.$toast = function (messages) {
            let constructor=Vue.extend(Toast)
            let toast =new constructor()
            toast.$slots.default=[messages]
            toast.$mount()

            document.body.appendChild(toast.$el)

          }



    }



}