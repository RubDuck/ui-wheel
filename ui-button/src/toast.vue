<template>
<div class="toast">
<slot></slot>
</div>

</template>


<script>

</script>



<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);


.toast{
  height:$toast-min-height;
  background:$toast-bg ;
  color :white;
  display: flex;
    
}




</style>