<template>
  <!-- //首页头部搜索栏 -->
    <div class="nav">
      <div class="nav-logo">
        <img src="image/navi_title_v4.png" width="64px" height="28px" >
      </div>
      <div class="nav-search" @click="toProduct">
        <img src="image/search.png" width="15px" height="15px">
        <span>搜一搜</span>
      </div>
      <div class="message">
        <img src="image/std_titlebar_home_message.png" width="38px" height="38px" >
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:['uid'],
  methods:{
    toProduct(){
      this.$router.push({path:'product',query:{uid:this.uid}})
    }
  }
}
</script>
<style scoped>
  .nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    position: fixed;
    z-index: 999;
    overflow: hidden;
    background: #fff;
    padding: 0.5em 0;  
    }
  .nav-logo {
   width: 16%;
    display: flex;
    align-items: center;
    margin-top: 2px;
}
.nav-search{
  background: #F4F4F4;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  color: #A4BDDE;
  font-size: 14px;
  height: 3em;
}
.nav-search span{
  margin-left:10px;
}
.message{
  width: 10%;
  display: flex;
  justify-content: flex-end;
}

</style>
