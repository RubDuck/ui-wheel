<template>
<div class="col" :class="[`col-${span}`, offset&&`offset-${offset}`]" :style={paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'} >
    <slot></slot>
  </div>
</template>


<style lang='scss' scoped>

.col{
    height:48px;
    background: #3D8FEE;
    border:1px solid gray;
    @for $i from 1 through 24 {
       &.col-#{$i} { width: ($i/24) * 100%}
    }
    
    @for $n from 1 through 24 {
       &.offset-#{$n} {margin-right: ($n/24) * 100% ;}
}
}
   

</style>


<script>
export default{
    data:function(){
            return {gutter:0}
    },
    props:{
      span:{
          type:[Number,String]
      },
      offset:{
          type:[Number,String]
      }
    },
 
}


</script>