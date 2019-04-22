<template>
<div class="col" :style="colStyle" :class="colClass">
    <slot></slot>
  </div>
</template>


<style lang='scss' scoped>

.col{height:48px;background: #3D8FEE;border:1px solid red;
    @for $i from 1 through 24 {
       &.col-#{$i} { width: ($i/24) * 100%}
    }   
    @for $n from 1 through 24 {
       &.offset-#{$n} {margin-right: ($n/24) * 100% ;}
}

 @media (max-width: 1201px) {
      @for $n from 1 through 24 {
        &.col-widepc-#{$n} { width: ($n/24) * 100%}
      }
}
 @media (max-width: 993px) {
      @for $n from 1 through 24 {
        &.col-pc-#{$n} { width: ($n/24) * 100%}
      }
}
 @media (max-width: 769px) {
      @for $n from 1 through 24 {
        &.col-narrowpc-#{$n} { width: ($n/24) * 100%}
      }
}
 @media (max-width: 577px) {
      @for $n from 1 through 24 {
        &.col-ipad-#{$n} { width: ($n/24) * 100%}
      }
}





}
   

</style>

<script>

let validator =value=>{
    let keys=Object.keys(value)
    let vaild=true
    keys.forEach(key=>{
        if(!['span','offset'].includes(key)){
            vaild=false
        }
   
    })
    return vaild
}

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
      },
       ipad:{
          type:Object,
          validator,
      },
      narrowpc:{
          type:Object,
          validator,
      },
       pc:{
          type:Object,
          validator,
      },
      widepc:{
          type:Object,
          validator,
      }
    
    },
    computed:{
        colStyle(){
            let gutter=this.gutter
            return {paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'} 
        },
        colClass(){
            let {span,offset,ipad,narrowpc,pc,widepc}=this
            let createclasses=this.createClasses
            return[`col-${this.span}`, this.offset&&`offset-${this.offset}`,...createclasses(ipad,'ipad'),
            ...createclasses(narrowpc,'narrowpc'),
            ...createclasses(pc,'pc'),
            ...createclasses(widepc,'widepc')
            ]
        }

    },
   methods:{
      createClasses(obj, str = ''){
       
        if (!obj) {return []}
        let array = []
        if (obj.span) { array.push(`col-${str}-${obj.span}`) }
        if (obj.offset) { array.push(`offset-${str}-${obj.offset}`) }
    
        return array
      }
    
   }
 
}


</script>