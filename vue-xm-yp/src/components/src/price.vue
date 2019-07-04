// 价格组件
<template>
  <div class="price">
    <span class="price-span">{{price[0].symbol}}</span><span>{{total}}</span><span class="price-span">{{price[0].rise}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:{
    price:"",
    total:''
  }
}
</script>
<style>
  .price span{
    font-size: 15px;
    line-height: 15px;
    color: rgb(182, 9, 9);
  }
  .price-span{
    font-size: 10px!important;
  }
</style>
