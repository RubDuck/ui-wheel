<template>
   <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot></slot>
  </div>

</template>


<div class="row">
    <slot></slot>
  </div><style>

.row{
    display:flex;
    background: #E8E8E8;
    margin-top:10px;
 
}




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
    }
}


</script>