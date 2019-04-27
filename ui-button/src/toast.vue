<template>
<div class='wrap' :class='position'>
<div class='wrap-main'>
<div class="wrapToast">
<slot v-if='!enableHtml'></slot>
<div v-if='enableHtml' @click="onClickClose" v-html='$slots.default[0]' ></div>
</div>
<div  class='wrapClose' @click="onClickClose" >{{closeButton.text}}</div>
</div>
</div>

</template>


<script>
export default{
  props:{

    autoClose:{
      type:Number,
      default:5
    },
     closeButton: {
      type: Object,
      default () {
        return {
            text: '关闭'
              }
      }
  },
     enableHtml:{
       type: Boolean,
       default: false
     },
     position:{
       type:String,
       default:top,
       validator (value) {
            return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
     }
  },
  methods:{
    onClickClose(){
      this.close()
    },
    execAutoClose(){
      setTimeout(()=>{
        this.close()

      },this.autoClose *1000)
    },
    close(){
      this.$el.remove()
      this.$destroy()
    }
  },
  mounted(){
   this.execAutoClose
  }


}

</script>



<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);

  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes fade-in {
    0% {opacity: 0; }
    100% {opacity: 1;}
  }

.wrap{
  position: fixed;
  display:flex;
  left:50%;
  width:288px;
 
  @mixin size{
      background: $toast-bg; 
      color: white;  
      font-size: $font-size;
      display:flex;
      align-items: center;
      justify-content :center;
      
  }
  &-main{
    display:flex;
  }
  

  &.top{
  top:0;
    transform: translateX(-50%);
    .wrap-main{
       animation: slide-down  300ms;
    }
  }
  &.bottom{
    bottom:0;
    transform: translateX(-50%);
    .wrap-main{
       animation: slide-up  300ms;
    }
  }
  &.middle{
    top:50%;
    transform: translate(-50%);
    .wrap-main{
       animation: fade-in  300ms;
    }
  }
  &Toast{
  @include size;
  padding: 10px  16px;
  border-radius:  4px  0 0 4px;
width:100%;
  flex-wrap:wrap;

 
    
}
&Close{
@include size;
padding:0 13px;
border-left:1px solid white;
border-radius: 0 4px  4px 0;
flex-shrink: 0;

}

}






</style>