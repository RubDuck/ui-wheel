<template>
   <div class="row" :style="colStyle">
    <slot></slot>
  </div>

</template>



<style scoped>

.row{display:flex;background: #E8E8E8;margin-top:10px;}

</style>

<script>
export default{
    props:{
        gutter:{
            type:[Number,String]
        }
    },
    mounted(){
        this.$children.forEach(vm=>{
            vm.gutter=this.gutter
        })
    },
    computed:{
        colStyle(){
            let gutter=this.gutter
            return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
        }
    }
}


</script>