<template>
    <svg class="icon" aria-hidden="true" :class="position" >
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default{
        props:['name','position']
    }
</script>

<style>
    .icon{
        width:1em;
        height:1em;
        vertical-align: middle;
    }
    .icon.left{
        order: -1;
    }
    .icon.right{
        order: 2;
    }
    

</style>