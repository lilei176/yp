// 标题栏
<template>
  <div class="crosshead">
    <span>{{title}}</span>
    <div class="crosshead-right">
       <a href="">更多</a>
       <div class="crosshead-img">
          <img :src="titleimg" alt="">
       </div> 
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
    title:'',
    titleimg:''
  }
}
</script>
<style scoped>
  .crosshead{
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
  }
  .crosshead-right{
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    align-items: center;
  }
  .crosshead-right a{
     color: rgb(102, 102, 102);
     margin-right: 6px;
  }
  .crosshead span{
    font-weight: bold;
  }
  .crosshead-img{
    width: 17px;
    height: 17px;
  }
   .crosshead img{
     width: 100%;
     height: 100%;
     line-height: 10;
   }
</style>
