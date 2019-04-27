import Toast from './toast.vue'
let toast
export default{
    install (Vue, options) {
        Vue.prototype.$toast = function (messages, toastOptions) {
            let constructor=Vue.extend(Toast)
            if(toast){
                toast.close()
            }
    
            toast =new constructor({
                propsData: {
                    closeButton:toastOptions.closeButton,
                    enableHtml:toastOptions.enableHtml,
                    position:toastOptions.position,
                    autoClose:toastOptions.autoClose
                }
                
            })
       
            toast.$slots.default=[messages]
            toast.$mount()
            document.body.appendChild(toast.$el)

          }



    }



}