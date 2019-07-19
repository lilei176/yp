<template>
  <div>
    <div class="user-top">
      <div class="user-img">
        <img src="image/user.png" alt="">
      </div>
      <div class="user-login" v-if="uid==undefined">
        <router-link to="/login">请登录</router-link>
        <img src="image/device_shop_right_arrow.png" alt="">
      </div>
      <div class="user-login" v-else>
        <router-link to="">{{realname}}</router-link>
        <img src="image/device_shop_right_arrow.png" alt="">
      </div>
    </div>
    <div class="container">
      <div class="myorder-bt myorder">
        <span>我的订单</span>
        <img src="image/device_shop_right_arrow.png" alt="">
      </div>
    </div>
    <div class="administration">
      <div class="administration-list" v-for="(item,i) of await" :key="i">
        <img :src="item.img" alt="">
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="img-180">
      <a href=""><img src="image/df15.png" /></a>
    </div>
    <div class="container"  v-for="(item,i) of arrtitle" :key="i">
      <div class="myorder">
        <div class="myorder-img">
          <img src="image/personal_icon_assets.png" alt="">
          <span>{{item}}</span>
        </div>
        <div class="next">
          <img src="image/device_shop_right_arrow.png" alt="">
        </div>    
      </div>
    </div>
    <div class="btns" v-show="uid!=undefined">
      <span @click="logout">退出</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      await:[{title:'待付款',img:'image/personal_icon_paid.png'},{title:'待收货',img:'image/personal_icon_paid.png'},{title:'待评价',img:'image/personal_icon_paid.png'},{title:'退款订单',img:'image/personal_icon_paid.png'}],
      arrtitle:['我的资产','拼团','我的收藏','地址管理','资质证照','协议规则']
    }
  },
  components:{
    
  },
  props:['uid','realname'],
  methods:{
    logout(){
      sessionStorage.clear();
    }
  }
 
}
</script>
<style scoped>
  .user-top{
    padding: 1em ;
    align-items: center;
    background: #845F3F;
    display: flex;
    justify-content: space-between;
  }
  .user-img{
    width: 50%;
  }
  .user-img img{
    width: 40%;
  }
  .user-login{
    display: flex;
  }
  .user-login a{
    color: #fff;
  }
  .user-login img{
    width: 22%;
  }
  .container{
    border-bottom:1px solid rgb(229, 229, 229);
    font-size: 14px;
  }
  .myorder{
    display: flex;
    justify-content: space-between;
    margin:0.2em 1em;
    align-items: center;
  }
  .myorder-bt{
    margin:1em 1em;
  }
  .myorder img{
    width: 5%;
  }
  .administration{
    display: flex;
    justify-content: space-between;
  }
  .administration-list{
    width: 24%;
    display: flex;
    flex-direction: column;
    margin: 1em 0.5em;
    align-items: center;
  }
  .administration-list img{
    width: 40%;
  }
  .img-180{
    width: 100%;
    border-top: 0.5em solid #F4F4F4;
  }
  .img-180 img{
    width: 100%;
    height: 100%;
  }
  .myorder-img{
    display: flex;
    align-items: center;
  }
  .myorder-img>img{
    width: 23%;
  }
  .next{
    width: 20%;
    text-align: right;
    
  }
  .next img{
    width: 28%;
  }
  .btns{
    text-align: center; 
  }
  .btns span{
     padding: 2em;
     display: block;
  }
</style>
