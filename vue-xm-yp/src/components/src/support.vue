// 通用支持率 百分比
<template>
  <div class="title-bottom">
    <div>
      <span class="title-bottom-span">{{sum}}</span>
      <span class="title-support">{{sup}}</span>
      <span class="explode">{{explode}}</span>
      <span class="hot">{{hot}}</span>
    </div>
    <div>
    <span class="title-bottom-span">{{rate}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:{
    sum:'',sup:'',explode:'',hot:'',rate:''
  }
}
</script>
<style>
.title-bottom{
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}
.title-bottom-span{
  font-size: 10px;
  color: rgb(182, 9, 9);
  line-height: 10px;
}
.title-support{
  color: rgb(153, 153, 153);
  margin-left: 5px;
}
.explode{
  margin-left: 5px;
  background-color: rgb(246, 39, 0);
  color: #fff;
}
.hot{
  margin-left: 5px;
  background-color: rgb(254, 207, 0);
  color: #fff;
}
</style>
