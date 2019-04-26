<template>
<div class='wrap' :class='position'>
<div class="wrapToast">
<slot v-if='!enableHtml'></slot>
<div v-if='enableHtml' @click="onClickClose" v-html='$slots.default[0]' ></div>
</div>
<div  class='wrapClose' @click="onClickClose" >{{closeButton.text}}</div>
</div>

</template>


<script>
export default{
  props:{
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

      },10000)
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
  
  &.top{
  top:0;
    transform: translateX(-50%);
  }
  &.bottom{
    bottom:0;
    transform: translateX(-50%);
  }
  &.middle{
    top:50%;
    transform: translate(-50%);
  }
  &Toast{
  @include size;
  padding: 10px  16px;
  border-radius:  4px  0 0 4px;
 
 
    
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