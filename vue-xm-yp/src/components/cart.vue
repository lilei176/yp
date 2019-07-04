<template>
  <div :style="{height:sheight+'px'}">
    <!-- 引入mint-ui header -->
    <mt-header title="购物车">
      <div slot="left">
        <mt-button  icon="back" @click="returnto">返回</mt-button>     
      </div>     
    </mt-header>
    <div class="nocart-login">
      <div class="cart">
        <img src="image/cart_empty.png" alt="">
      </div>
      <div class="nocart-text">
        登录后才能看到商品哦~     
      </div>
      <div class="nocart-btn">     
        <router-link to="/login">立即登录</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      sheight:0
    }
  },
  created(){
    this.load
  },
  computed:{
    load(){
      this.sheight=window.innerHeight-50;
      console.log(this.sheight)
    }
  },
  methods:{
    returnto(){
       this.$router.push({path:'home'});
       console.log(123)
    }
  }
}
</script>
<style scoped>
  .nocart-login{
    padding: 6em;
    font-size: 14px;
    text-align: center;
    height: 100%;
    margin-top: 1.8em;
  }
  .nocart-login img{
    width: 80%;
  }
  .nocart-text{
     margin-top: 1em;
     color: rgb(102, 102, 102); 
  }
  .nocart-btn a{
    color: #333;
    border: 1px solid  rgb(102, 102, 102);
    display: block;
    padding: 0.5em;
  }
  .nocart-btn{
    padding: 1em;
    width: 50%;
    /* text-align: center; */
    margin: 0 auto;
  }
  .cart{
    width: 40%;
    margin: 7em auto 0;
  }
</style>
