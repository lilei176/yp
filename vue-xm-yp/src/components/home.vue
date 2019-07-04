<template>
  <div>
    <advertising></advertising>
    <!-- 切换控制面板 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="index">
        <navbar :uid='uid'></navbar>
        <index :uid='uid'></index>
      </mt-tab-container-item>
      <mt-tab-container-item id="classify">
        <classify></classify>
      </mt-tab-container-item>
      <mt-tab-container-item id="taste">
        <taste></taste>
      </mt-tab-container-item>
      <mt-tab-container-item id="me">
        <me :uid='uid' :realname='realname'></me>
      </mt-tab-container-item>
      <mt-tab-container-item id="cart">      
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- tabbar列表 -->
    <mt-tabbar v-model="active" class="tabbar" fixed>
      <mt-tab-item id="index" @click.native="changeState(0)">
        <Tabbaricon :selectedImage="require('../assets/bar2.png')" :normalImage="require('../assets/bar1.png')" :focused="currentIndex[0].isSelect"></Tabbaricon>
      <span>首页</span>   
      </mt-tab-item>     
      <mt-tab-item id="classify"  @click.native="changeState(1)">
        <Tabbaricon :selectedImage="require('../assets/bar4.png')" :normalImage="require('../assets/bar3.png')" :focused="currentIndex[1].isSelect"></Tabbaricon>
        <span>分类</span>
      </mt-tab-item>
      <mt-tab-item id="taste"  @click.native="changeState(2)">
        <Tabbaricon :selectedImage="require('../assets/bar6.png')" :normalImage="require('../assets/bar5.png')" :focused="currentIndex[2].isSelect"></Tabbaricon>
        <span>品味</span>
      </mt-tab-item>
      <mt-tab-item id="cart"  @click.native="changeState(3)">
        <Tabbaricon :selectedImage="require('../assets/bar8.png')" :normalImage="require('../assets/bar7.png')" :focused="currentIndex[3].isSelect"></Tabbaricon>
        <span>购物车</span>
      </mt-tab-item>
      <mt-tab-item id="me"  @click.native="changeState(4)">
        <Tabbaricon :selectedImage="require('../assets/bar10.png')" :normalImage="require('../assets/bar9.png')" :focused="currentIndex[4].isSelect"></Tabbaricon>
        <span>我的</span>
      </mt-tab-item>
    </mt-tabbar>  
  </div>
 
</template>
<script>
//引入子组件 首页
import index from './src/index'
//引入子组件 
import Tabbaricon from './src/Tabbaricon'
//引入子组件 nav
import navbar from './src/navbar'
//引入子组件
import classify from './src/classify'
//引入子组件 taste
import taste from './src/taste'
//引入子组件 me
import me from './src/me'
//引入子组件 广告 advertising
import advertising from './src/advertising'
import cart from './cart'
import userCart from './src/userCart'

export default {
  data(){
    return {
      active:'index',
      currentIndex:[
            {isSelect:true},
            {isSelect:false},
            {isSelect:false},
            {isSelect:false},
            {isSelect:false},
        ],
        uid:sessionStorage.getItem('uid'),
        realname:sessionStorage.getItem("realname")   
    }
  },
  components:{
     index,
     Tabbaricon,
     navbar,
     classify,
     taste,
     me,
     advertising,
     cart,
     userCart
  },
  methods:{
    changeState(n){
            for(var i=0;i<this.currentIndex.length;i++){
                if(n==i){
                    this.currentIndex[i].isSelect=true;
                }else{
                    this.currentIndex[i].isSelect=false;
                }
                if(n==3){
                  if(this.uid!=undefined){
                    this.$router.push({path:'/userCart',query:{uid:this.uid}});
                  }else{
                    this.$router.push({path:'/cart'})
                  }
                }
            }
        },
    gotocart(){
          
        }  
  }
}
</script>
<style scoped> 
.tabbar{
  align-self: stretch;
  height: 54px;
  overflow: hidden;
  z-index: 999;
  background: #fff;
}
.mint-tabbar > .mint-tab-item.is-selected {
    /* background-color: #eaeaea; */
    background: 0; 
}
.mint-tabbar > .mint-tab-item.is-selected span{
   color: #CABCA8;
}
.tabbar span{
  color: #8f8f94;
}
</style>
