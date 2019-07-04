<template>
  <div>
    <div class="detail-nav">
      <div @click="gotohome">
        <img src="image/normal.png" alt="">
      </div>
       <div class="menu">
        <img src="image/transparent.png" alt="">
      </div>
    </div>
    <div class="detail-banner">
     <!-- 轮播图  -->
     <van-swipe @change="onChange" class="banner">
      <van-swipe-item v-for="(item,i) of banner" :key="i"><img :src='item' alt=""></van-swipe-item>    
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/{{banner.length}}
      </div>
    </van-swipe>
    </div>
    <div class="detail-introduce">
      <div class="title-total">
        <div class="total">
          <span>￥{{result.price}}</span><span class="original" v-show="result.original!=0">￥{{result.original}}</span><span v-show="result.original!=0">特价</span>
        </div>
      </div>
      <div class="detail-introduce-title">
        <h4>{{result.title}}</h4>
      </div>
      <div class="detailed-introduction">
        <span>{{result.subtitle}}</span>
      </div>
    </div>
    <div>
       <div class="detail-introduce-img">
        <img src="image/d1.png" alt="">
      </div>
      <div class="detail-introduce-img">
        <img src="image/d2.png" alt="">
      </div>
    </div>
    <div class="pop-up">
      <div class="choice" @click="alert">
        <div class="choice-text">
          <span>已选</span><span>{{count}}件</span>
        </div>  
        <div class="choice-icon">
          <img src="image/device_shop_right_arrow.png" alt="">
        </div>
      </div>  
    </div>
    <div class="pop-up">
      <div class="choice" >
        <div class="choice-text">
          <span>送至</span><span class="city">湖北省 武汉市 洪山区</span ><span class='supply'>有货</span>
        </div>  
        <div class="choice-icon">
          <img src="image/device_shop_right_arrow.png" alt="">
        </div>
      </div>
    </div>  
    <div class="pop-up">
      <div class="choice" >
        <div class="choice-text commitment">
          <span>服务</span><span><img src="image/detail_icon_service_v2.png" alt="">满150包邮</span ><span><img src="image/detail_icon_service_v2.png" alt="">有品自营</span><span><img src="image/detail_icon_service_v2.png" alt="">7天无理由</span>
        </div>  
        <div class="choice-icon">
          <img src="image/device_shop_right_arrow.png" alt="">
        </div>
      </div>  
    </div>
    <div class="user-comment">
      <div class="pop-up border-none">
        <div class="choice" >
          <div class="choice-text commitment">
            <span>用户评论(11998)</span>
          </div>  
          <div class="choice-bilv">
            <span>89%满意度</span>
            <img src="image/device_shop_right_arrow.png" alt="">
          </div>
        </div>  
      </div>
      <div class="evaluate">
        <div v-for="(item,i) of evaluate" :key="i">
          <span>{{item}}</span> 
        </div> 
      </div>
      <div>
        <div class="horizontally">
          <div class="evaluate-list" v-for="(item,i) of 5" :key="i">
            <div class="evaluate-list-user">
              <div>白**小姐</div>
              <div><img src="image/evaluation_btn_level.a_sel_light.png" alt="" v-for="(item,i) of 5" :key="i">
              </div>
            </div>
            <div>
              <span>挺好的，洗的也干净，白色很简单，好看</span>
            </div>  
          </div>  
        </div>  
      </div> 
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab :title="result.name1">       
            <div class="summarize" v-for="(item,i) of summarize" :key="i">
              <img :src=item alt="">
            </div>
        </van-tab>
        <van-tab :title="result.name2">
          <div class="summarize" v-for="(item,i) of parameter" :key="i">
              <img :src=item alt="">
            </div>
        </van-tab>
      </van-tabs>  
    </div>
    <div class="bottom-bar">
      <div class="bar-item">
        <div class="bar-item-counm">
          <img src="image/device_shop_detail_unfavor_v3.png" alt="">
          <span>收藏</span>
        </div>
        <div class="bar-item-counm">
          <img src="image/shop_cart_v3.png" alt="">
          <span @click="gotoshoping">购物车</span>
        </div>
        <div class="addcart">
          <div @click="alert">加入购物车</div>
        </div>
      </div>
    </div>  
    <van-action-sheet v-model="show" :title="result.title" class="height">
      <div class="detailed-list">
        <div class="detailed-list-img">
          <img :src="result.img" alt="">
        </div>
        <div class="detailed-list-title">
          <span><sub>￥</sub>{{result.price}}</span>
          <div>
            <span>已选:</span><span>{{count}}件</span>
          </div>   
        </div>
      </div>
      <div class="product-list">
        <span class="product-count">数量</span>
        <div class="btns">
          <div @click="cull"><img src="image/cull.png" alt=""></div><span>{{count}}</span><div @click="addcount"><img src="image/add.png" alt=""></div>
        </div>
      </div>
      <div class="add-shopping" @click="addShopping">
        <span>加入购物车</span>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>

export default {
  data(){
    return {
      current: 0,
      evaluate:['有图(32122)','外观漂亮(2122)','值得拥有(555)','很漂亮(321)'],
      banner:[],
      show: false,
      count:1,
      active:0,
      summarize:[],
      parameter:[],
      result:'',
      uid:'',     
    }
  },
  props:['pid'],
  created(){
    this.loading()
    this.uid=this.$route.query.uid;
  },
  methods:{
     onChange(index) {
      this.current = index;
    },
    alert(){
      this.show = true;
    },
    addcount(){
      this.count++;
    },
    cull(){
      if(this.count>1){
        this.count--;
      }else{
        this.$toast({position:'top',className:'actived',message:'商品数量已达到了最小哟'});
      }
    },
    addShopping(){
      if(this.uid!=null){
        console.log(`加入购物车`);
        var uid=this.uid;
        var pid=this.pid;
        var price=this.result.price;
        var title=this.result.title;
        var count=this.count;
        var img=this.result.img;
        console.log(count)
        this.axios.get('product/addcart',{params:{uid,pid,price,title,count,img}}).then(result=>{
          if(result.data.code==1){          
            var wthis=this;
            this.show=false;
            setTimeout(function(){
              wthis.$toast({message:'加入购物车成功'}); 
            },1000)
                  
          }
        })

      }else{
        this.$toast({message:'请先去登录用户'})
        var _this=this;
        setTimeout(function(){
           _this.$router.push({path:'/login'})
        },2000);
      }  
    },
    gotoshoping(){
      if(this.uid!=null){
        this.$router.push({path:'/userCart',query:{uid:this.uid}})
      }else{
        this.$toast({message:'请先去登录用户'})
        var _this=this;
        setTimeout(function(){
           _this.$router.push({path:'/login'})
        },2000);
      }
    },
    loading(){
      this.axios.get("product/detail",{params:{pid:this.pid}}).then(result=>{
        // this.productitem=result.data.result;
       // console.log(result.data.result)
        this.result=result.data.result[0];
        this.banner=result.data.result[0].banner.split(',');
        this.summarize=result.data.result[0].summarize.split(',');
        this.parameter=result.data.result[0].parameter.split(',');
        
      })
    },
    gotohome(){
      this.$router.push({path:'/'})
    }
  },  
}
</script>
<style scoped>
  .detail-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 999;
    width: 100%;
  }
  .detail-nav div{
    width: 20%;
  }
 .detail-nav img{
   width: 50%;
 }
 .menu{
   text-align: right;
   margin-right: 0.5em;
 }
 .detail-nav .menu img{
   width: 33%;
 }
  .banner{
    position: relative;
  }
 .banner img{
   width: 100%;
 }
 .custom-indicator{
  position: absolute;
  bottom: 2em;
  right: 1em;
  width: 10%;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  background: #CCCCCC;
  opacity: 0.5;
 } 
 .original {
   text-decoration:line-through;
 }
 .detail-introduce{
   margin: 0.5em 0.8em;
 }
 .title-total{
   margin: 0.5em 0;
 }
 .total span:nth-child(1){
   font-size: 25px;
    color: rgb(182, 9, 9);
    margin-right: 0.2em;
 }
 .total span:nth-child(2){
   color: rgb(153, 153, 153);
   margin-right: 0.2em;
 }
 .total span:nth-child(3){
   color: rgb(191, 17, 17);
   font-size: 9px;
   background: #F6EDED;
 }
 .detail-introduce-title h4{
   color: rgb(51, 51, 51);
 }
 .detailed-introduction{
   margin: 0.2em 0;
   font-size: 14px;
 }
 .detail-introduce-img img{
   width: 100%;
 }
  .choice{
    display: flex;
    justify-content: space-between;
  }
  .pop-up{
    border-bottom: 1px solid #F8F8F8;
    padding: 0.8em;
  }
  .choice-icon{
    text-align: right;
  }
  .pop-up img{
    width: 35%; 
  }
  .choice-text span:nth-child(1){
    color: rgb(153, 153, 153);
    font-size: 14px;
    margin-right: 0.6em;
  }
  .choice-text span:nth-child(2){
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: bold;
  }
  .detailed-list{
    display: flex;
    justify-content: flex-start;
    margin-left: 0.5em;
  }
  .detailed-list img{
    width:85%;
    margin: 0 auto;
  }
  .detailed-list-img{
    background: #F8F8F8;
    text-align: center;
    border-radius: 20%;
  }
  .detailed-list>div{
    width: 40%;
  }
  .detailed-list-title{
    display: flex;
    flex-direction: column;
    padding: 2em 0.5em;
  }
  .detailed-list-title>span{
    color: rgb(182, 9, 9);
    font-size: 20px;
    margin-bottom: 1em;
  }
  .detailed-list-title>div>span{
    color: rgb(102, 102, 102);
    font-size:12px;
  }
  .btns{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
  }
  .btns img{
    width: 100%;
  }
   .btns div{
    width: 70%;
  }
   .btns span{
    display: block;
    width: 35%;
    height: 50%;
    text-align: center;
    background: #F4F4F4;
   }
   .product-count{
     color: #CCCCCC;
     font-size: 14px;
   }
   .product-list{
     margin: 0.5em 0.8em;
   }
   .height{
     height: 19em;
   }
   .actived{
     position: relative;
     z-index: 5000!important;
   }
   .add-shopping{
    margin: 0.5em 0.8em;
    background-color: rgb(191, 17, 17);
    height: 2.5em;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    border-top-right-radius: 19px;
    border-top-left-radius: 19px;
    text-align: center;
    line-height: 2.5em;
    color: #fff;
   }
   .choice-text .city{
     color: rgb(51, 51, 51)!important;
     font-weight: normal!important;
     margin-right: 0.5em;
   }
   .supply{
     color: rgb(191, 17, 17)!important;
     font-size: 14px!important;
   }
   .commitment img{
     width: 5%!important;
     margin: -2px 0;
  }
   .commitment span{
     color: rgb(102, 102, 102);
     font-size: 14px;
     font-weight: normal!important;
     margin-right: 0.8em;
   }
   .choice-bilv{
    width: 50%;
    text-align: right;
    font-size: 14px;
   }
   .choice-bilv img{
     width: 7%;  
   }
   .border-none{
     border: 0;
   }
   .evaluate{
     display: flex;
     font-size: 11px;
     justify-content: flex-start;
    margin: 0 0.8em;
   }
   .evaluate div{
    width: 25%;
    background: #F4ECE0;
    margin-left: 0.5em;
    text-align: center;
    border-radius: 50%;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    border-top-right-radius: 19px;
    border-top-left-radius: 19px;
   }
   .evaluate-list{
     width: 80%;
     background: #F8F8F8;
     font-size: 14px;
     padding: 0.8em;
     margin: 0.8em 0 0.8em 0.8em;
   }
   .evaluate-list-user{
     display: flex;
     margin-bottom: 1em;
   }
   .evaluate-list-user img{
     width: 5%;
   }
   .evaluate-list-user>div:nth-child(1){
     width: 25%;
     margin-right: 1em;
   }
   .horizontally{
    overflow: hidden;
    overflow-x: scroll;
    display: flex;
    white-space: nowrap;
   }
   .user-comment{
     border-top:0.5em solid #F8F8F8;
     border-bottom: 0.5em solid #F8F8F8;
   }
    .summarize{
      width: 100%;
       height: 100%;
    }
   .summarize img{
     width: 100%;
     height: 100%;
     display: block;
   }
   .bar-item{
     display: flex;
     justify-content: flex-start;
   }
   .bottom-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    border-top: 1px solid rgb(122, 122, 122);
    background: #fff;
   }
   .bar-item-counm{
     display: flex;
     flex-direction: column;
     text-align: center;
     color: rgb(122, 122, 122);
    font-size: 10px;
   }
   .bar-item-counm img{
     width: 30%;
     margin: 0 auto;
   }
   .addcart{
    width: 50%;
    text-align: center;
    padding-top: 0.5em;
   }
   .addcart div{
     background: red;
     color: #fff;
     height: 2em;
    line-height: 2em;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    border-top-right-radius: 19px;
    border-top-left-radius: 19px;
   }
</style>
