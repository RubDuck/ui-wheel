<template>
<div class='wrap'>
 <input type='text' :value="value" :disabled="disabled" :readonly="readonly">
 <template v-if='error'>
    <g-icon  name="error" class="icon-error" ></g-icon>
    <span class="errorMessage">{{error}}</span>
</template>
 <template v-if='ok'>
    <g-icon  name="ok" class="icon-ok" ></g-icon>
</template>

</div>

</template>





<script>
import Icon from './icon.vue'

export default{
    components:{
            'g-icon':Icon
        },
    props:{
        value: {
        type: String
      },
      disabled:{
          type: Boolean,
          default: false
      },
    readonly: {
        type: Boolean,
        default: false
      },
    error: {
        type: String,
      },
    ok:{
        type:String
    }

    }


    
}
</script>




<style scoped>

.wrap{display:inline-block;margin-right:20px}

input{
    margin-top:10px;
    padding: 0 1em;
    height:32px;
    width:128px;
    color:#666666; 
    font-size: var(--font-size);
    border-radius: var(--border-radius);
    background: #FFFFFF;
    border: 1px solid rgba(102,102,102,1);
}
input:hover{
     border-color:var(--border-hover-color)
 }
input:focus {box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5);outline: none;}

span{
    font-size: 12px;
}



</style>