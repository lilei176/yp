// 
<template>
  <div>
    <!-- 头部搜索 -->
    <div class="search">
       <div class="nav-search">
        <img src="image/search.png" width="15px" height="15px">
        <span>搜一搜</span>
      </div>
    </div>
    <div class="container">
      <div>页面开发中</div>
      <div>敬请期待</div>
      <div>⭐凌晨三点╮（￣﹏￣）╭⭐</div>
      <div>₍₍◡( ╹◡╹ )◡₎₎</div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style scoped>
  .search{
    margin: 0.5em 0;
  }
  .nav-search{
  background: #F4F4F4;
  width: 94%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.5em;
  color: #A4BDDE;
  font-size: 14px;
  height: 2em;
  margin: 0 auto;
  border-radius: 2%;
}
.nav-search span{
  margin-left:10px;
}
.container{
  margin: 0 0.5em;
  text-align: center;
  color: red;
}
</style>
