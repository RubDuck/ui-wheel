<template>
    <button class="g-button">
        <g-icon v-if="icon" :name="icon" :position="position" ></g-icon>
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




</style>


<script>
    export  default {
        props: {
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