<template>
  <div class="user-index">
    <div v-show="vshow">
      <div class="header">
          <img src="image/cart_top_bg_image.png" alt="">        
          <div class="title">           
            <div>
              <div @click="gotohome">主页</div>
              <div>购物车</div>
              <div v-if="isshow==true" @click="compile">编辑</div>
              <div v-else @click="compile">完成</div>
            </div> 
          </div>
      </div>
      <div class="usercart">
        <div>
          <div class="nav-cart">
            <input type="checkbox" v-model="ischeck" @change="allchecked">
            <span>有品精选</span>
          </div>
          <div class="cart-list" v-for="(item,i) of result" :key="i">
            <div>
              <input type="checkbox" v-model="isselected[i].check" @change="checkeditem()">
            </div>
            <div class="checked">
              <div class="cart-img">
                <img :src="item.img" alt="">
              </div>  
            </div>
            <div class="cart-title">
              <div>{{item.title}}</div>
              <div class="cart-count">
                  <span>￥{{item.price}}</span>
                  <div class="product-list">
                    <div class="btns">
                      <div @click="cull(i)"><img src="image/cull.png" alt=""></div>
                      <span>{{count[i]}}</span>
                      <div @click="addcount(i)"><img src="image/add.png" alt=""></div>
                    </div>
                  </div>  
                </div>
              </div>            
            </div>     
        </div>
      </div>
    </div>
    <div v-show="iscart">
      <!-- 引入mint-ui header -->
      <mt-header title="购物车">
        <div slot="left">
          <mt-button icon="back" @click="gotohome">返回</mt-button>     
        </div>     
      </mt-header>
      <div class="nocart-login">
        <div class="cart">
          <img src="image/cart_empty.png" alt="">
        </div>
        <div>
          <div class="nocart-text">
          购物车还没有商品哦~     
          </div>
          <div class="nocart-btn">     
            <router-link to="/home">去逛逛</router-link>
          </div>
        </div>      
      </div>
    </div>
    <div class="tuijian">为你推荐</div>
    <div class="product-list" >
        <div class="product-item" v-for="(item,i) of product" :key="i" @click="gotodetaile(item.pid)">
          <div class="product-item-img">
            <img :src="item.img" alt="">
            <span></span>
          </div>
          <div class="product-introduce">
            <span>{{item.title}}</span>
            <price :price="price" :total="item.price"></price>
          </div>
        </div>
    </div>
    <div class="bottom-bar" v-show="vshow">
      <div class="bar-item">
        <div class="all-checked">
            <input type="checkbox" id="checked" v-model="ischeck" @change="allchecked">
            <label for="checked">全选</label>
        </div>          
        <div class="bar-check" v-if="isshow==true">
          <div>
            <span>合计￥</span><span>{{total}}</span>
          </div>
          <div class="addbtn">结算</div>
        </div>
         <div class="bar-check" v-else>        
          <div class="addbtn" @click="deleteproduct">删除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import price from './price'
export default {
  data(){
    return{
      isshow:true,
      count:[],
      isselected:[],
      ischeck:true,
      uid:'',
      vshow:true,
      iscart:'',
      result:'',
      price:[{symbol:'￥',rise:'起'}],
      product:''
    }
  },
  watch:{
     
  },
  created(){
    this.uid=this.$route.query.uid;
    // console.log(this.uid)
    this.loading();
  },
  computed:{
    total:function(){
      var total=0;
      for(var i=0;i<this.result.length;i++){
        if(this.isselected[i].check==true){
          total+=this.count[i]*this.result[i].price
        }
      }
      return total.toFixed(2);
    }
  },
  components:{
    price
  },
  methods:{
     alert(){
      this.show = true;
    },
    addcount(i){
      var n=++this.count[i];
      this.$set(this.count,this.count[i],n)
    },
    cull(i){  
      if(this.count[i]>1){
        var n=--this.count[i];
        this.$set(this.count,this.count[i],n)
      }else{
        this.$toast({className:'actived',message:'商品数量已达到了最小哟'});
      }
    },
    addShopping(){
      console.log(`加入购物车`)
      //console.log(this.summarize)
    },
    compile(){
      this.isshow=!this.isshow;
    },
    allchecked(){
      for(var item of this.isselected){
        item.check=this.ischeck;
      }
    },
    checkeditem(){   
      //  console.log(this.isselected[i].check)
      var n=0;
      for(var item of this.isselected){
        if(item.check==false){
          this.ischeck=false;
          break;
        }else{
          n++;
        }
        if(n==this.isselected.length-1){
          this.ischeck=true;
        }
      }
    },
    loading(){
      var uid=this.uid
      this.axios.get("product/cart",{params:{uid}}).then(result=>{
        console.log(result)
        if(result.data.result.length!=0){
          this.vshow=true;
          this.iscart=false;
          this.result=result.data.result;       
          for(var item of result.data.result){
            this.isselected.push({check:true});
            this.count.push(item.count);
          }
          console.log(this.result)             
        }else{
           this.vshow=false;
           this.iscart=true;
        }
      })
      this.axios.get('product/indexprodcut',{params:{}}).then(result=>{
        console.log(result);
        this.product=result.data.result;
      })
    },
    gotodetaile(pid){
      this.$router.push({path:`/detail/${pid}`,query:{uid:this.uid}})
    },
    gotohome(){
      this.$router.push({path:'/'})
    },
    deleteproduct(){
      console.log(`删除成功`)
    }
  },
  
}
</script>

<style scoped>
.user-index{
  /* background: #F3F3F3; */
}
  .header{
    height: 7em;  
  }
  .header img{
    width: 100%;
  }
  .title{
    left: 43%;
    position: absolute;
    top: 26px;
  }
  .title>div{
     display: flex;
     color: #fff;
     justify-content: flex-start;
  }
  .title>div>div:nth-child(1){
   text-align: left; 
   position: relative;
   left: -145px;
  }
  .title>div>div:nth-child(2){
    margin-right: 5em;   
  }
  .title>div>div:nth-child(3){
    font-size: 14px;   
  }
  .usercart{
    background: #fff;
    position: relative;
    top: -2em;
    margin: 0 0.6em;
    border: 1px solid #DCA752;
  }
  .usercart{
    padding-left:1em;
  }
  .nav-cart{
    display: flex;
    align-items: center;
  }
  .nav-cart>span{
    margin-left: 1em;
  }
  .btns{
    display: flex;
    justify-content: flex-start;
    width: 50%;
    margin-left: 4em;
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
   .actived{
     position: relative;
     z-index: 5000!important;
   }
   .cart-img{
     text-align: center;
   }
   .cart-img img{
     width: 80%;
     
   }
   .cart-list{
     display: flex;
    justify-content: space-between;
     align-items: center;
     margin: 0.5em 0;
   }
   .checked{
     display: flex;
    align-items: center;
    width: 60%;
   }
   .cart-count{
     display: flex;
     justify-content: flex-start;
     align-items: center;
   }
   .cart-title{
     font-size: 14px;
   }
   .cart-count>span{
     font-size: 16px;
     color: rgb(182, 9, 9);
   }
   input[type=checkbox]{
     border: 1px solid #999;
     border-radius:50%;
     -webkit-appearance: none;
    height: 15px;
    width: 15px;
   }
   input[type=checkbox]:checked{
     border: 3px solid red;
   }
   .bottom-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    border-top: 1px solid rgb(122, 122, 122);
    background: #fff;
    height: 3em;
    line-height: 3em;
    padding: 0 0.8em;
   }
   .bar-item-counm{
     display: flex;
     flex-direction: column;
     text-align: center;
     color: rgb(122, 122, 122);
    font-size: 10px;
   }
   .bar-item{
     display: flex;
     align-items: center;
     justify-content: space-between;
   }
   .bar-check{
     display: flex;
     align-items: center;
   
   }
   .addbtn{
     margin-left: 1em;
    padding: 0.5em;
    background: red;
    color: #fff;
    height: 2em;
    line-height: 1em;
    border-radius: 19px;
    
   }
   .all-checked{
    padding-left: 0.5em;
    display: flex;
    align-items: center;
   }
   .product-list{
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  margin: 2em 0.5em 0;
}
.product-item{
  width: 50%;
  border: 1px solid rgb(239, 239, 239);
}
.product-item-img{
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
}
.product-item-img span{
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product-item-img span{
  color: rgb(132, 95, 63);
}
.product-item-img img{
  width: 80%;
  margin: 0 auto;
}
.product-introduce{
  background: #F7F7F7;
  padding: 0 0.2em;
  font-size: 12px;
  color: rgb(51, 51, 51);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tuijian{
  text-align: center;
}
.nocart-login{
    font-size: 14px;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 1em auto;
    background: #FAFAFA;
  }
  .nocart-login img{
    width: 80%;
  }
  .nocart-text{
    color: rgb(102, 102, 102);
    margin-bottom: 2em; 
  }
  .nocart-btn a{
    color: #fff;
    display: block;
  }
  .nocart-btn{
    background: #E27368;
    width: 50%;
    /* text-align: center; */
    margin: 0 auto;
  }
  .cart{
    width: 40%;
    width: 40%;
    text-align: right;
  }
</style>
