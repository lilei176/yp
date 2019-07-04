<template>
  <div>
    <!-- 品味 -->
    <div class="nav-taste">
      <span>品味</span>
    </div>
    <!-- banner -->
    <div class="taste-banner">
      <mt-swipe :auto="0">
        <mt-swipe-item class="" v-for="(item,i) of image" :key="i">
          <a href=""><img :src=item  alt=""></a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="taste-title border-bt">
      <div v-for="(item,i) of nav" :key="i">
        <img :src="item.img" alt="">
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="scoop">
      <div class="scoop-column">
        <span>独家专栏</span>
      </div>
      <div class="scoop-column-list" v-for="(item,i) of result" :key="i">
        <div class="scoop-column-list-img">
          <img :src="item.img" alt="">
        </div>
        <div class="scoop-column-list-text">
          <div>{{item.title}}</div>
          <div>{{item.subtitle}}</div>
          <div><a href="">去发现</a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      image:["image/banner1.jpeg","image/banner2.jpeg","image/banner3.jpeg"],
      nav:[{img:'image/nav1.jpeg',title:'新品体验馆'},{img:'image/nav2.jpeg',title:'本周值得买'},{img:'image/nav3.jpeg',title:'发现好货'},{img:'image/nav4.jpeg',title:'不可能研究'}],
      result:''
    }
  },
  methods:{
    loading(){
      this.axios.get("product/taste",{params:{}}).then(result=>{
        // this.productitem=result.data.result;
        // console.log(result.data.result)
       this.result=result.data.result;          
      })
    }
  },
  created(){
    this.loading()
  }
}
</script>
<style scoped>
  .nav-taste{
    text-align: center;
    padding: 1em;
    font-size: 16px;
    border-bottom: 0.2em solid #BFBFC0;
  }
  .taste-banner{
    width: 100%;
    height: 10em;
    margin: 0.5em 0;
  }
  .taste-banner img{
    width: 100%;
    height: 100%;
  }
  .taste-title{
    display: flex;
    justify-content: space-around;
    margin: 0 .3em;
    text-align: center;
  }
  .taste-title>div{
    width: 24%;
  }
  .taste-title>div>img{
    width: 88%;
  }
  .taste-title>div>span{
    font-size: 14px;
    color: rgb(153, 153, 153);
  }
  .border-bt{
   border-bottom:0.5em solid #F4F4F4;
 }
 .scoop-column{
   text-align: center;
   padding: 0.5em 0;
 }
 .scoop-column-list{
    margin:0 0.5em ;
 }
 .scoop-column-list-img{
   width: 100%;
 }
 .scoop-column-list-img img{
   width: 100%;
 }
 .scoop-column-list-text{
   margin: 1em 0;
   text-align: center;
 }
 .scoop-column-list-text div:nth-child(1){
   color: rgb(51, 51, 51);
    font-size: 16.6667px;
 }
 .scoop-column-list-text div:nth-child(2){
   color: rgb(153, 153, 153);
   font-size: 13px;
   margin: .3em 0;
 }
 .scoop-column-list-text div:nth-child(3){
   width: 20%;
   background-color: rgb(132, 95, 63); 
   margin: 0 auto; 
 }
 .scoop-column-list-text a{
    color: #fff;
    font-size: 13px;
 }
</style>
