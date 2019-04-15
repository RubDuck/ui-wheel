<template>
    <button class="g-button" @click="$emit('click')">
        <g-icon v-if="icon&&!loading" :name="icon" :position="position" ></g-icon>
        <g-icon class='loading' v-if="loading" name="loading" :position="position" ></g-icon> 
        <div class="content">
            <slot></slot>
        </div>

    </button>

</template>


<style>
 .g-button{
     font-size: var(--font-size);
     height: var(--button-height);
     padding: 0 1em;
     border-radius: var(--border-radius);
     border: 1px solid var(--border-color);
     background: var(--button-bg);
     display: inline-flex;
     align-items: center;
     justify-content: center;
     vertical-align: middle;
 }

 @keyframes spin{
     0%{transform:rotate(0deg);}
     100%{transform:rotate(360deg);}

 }
 .loading{
     animation:spin 1s infinite linear;
 }




</style>


<script>
    export  default {
      
        props: {
            loading:{},
            icon: {},
            position: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>