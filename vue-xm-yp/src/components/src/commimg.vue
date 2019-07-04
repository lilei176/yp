// 通用图片
<template>
  <div class="img">
    <a href=""><img :src="comm" /></a>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:{
    comm:{default:""}
  }
}
</script>
<style scoped>
  .img{
    width: 100%;
    border-top: 0.5em solid #F4F4F4;
  }
  .img img{
    width: 100%;
    height: 100%;
  }
</style>
