import Toast from './toast.vue'
let toast
export default{
    install (Vue, options) {
        Vue.prototype.$toast = function (messages, toastOptions) {
            let constructor=Vue.extend(Toast)
            if(toast){
                toast.close()
            }
            console.log(toastOptions)
            toast =new constructor({
                propsData: {
                    closeButton:toastOptions.closeButton,
                    enableHtml:toastOptions.enableHtml,
                    position:toastOptions.position
                }
                
            })
       
            toast.$slots.default=[messages]
            toast.$mount()
            document.body.appendChild(toast.$el)

          }



    }



}