<template>
<div class='group'>
<slot></slot>
</div>
</template>



<style>
.group{display:flex;vertical-align: middle;margin-top:10px}
.group .g-button{margin-left:-1px;border-radius:0px}
.group .g-button:hover{ border-color:var(--border-hover-color);z-index:1}
.group .g-button:first-child{border-radius:4px 0 0 4px}
.group .g-button:last-child{border-radius: 0 4px 4px 0}
</style>



<script> 
</script>