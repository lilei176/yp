<template>
  <div class="containner">
    <!-- 轮播图 -->
    <div class="banner">
      <!-- <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item >
          
        </van-swipe-item>
      </van-swipe> -->
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,i) of images" :key="i"> 
          <a href=""><img :src=item /></a>
        </mt-swipe-item>
      </mt-swipe>     
    </div>
    <!-- 标题栏 -->
    <div class="nav-title  border-b">
      <div class="nav-title-list " v-for="(item,i) of navtitle" :key="i">
        <div class="title-list-img">
          <a href=""><img :src=item.img ></a>
        </div>
        <span>{{item.title}}</span>
      </div>      
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <div class="recommend-vessel">
        <div class="recommend-vessel-one" v-for="(item,i) of recommend" :key="i">
          <span>{{item.title}}</span>
          <h6>{{item.subtitle}}</h6>
          <div class="recommend-img">
            <img :src=item.img alt="">
          </div>
        </div>             
      </div>
    </div>
    <!-- 图片180元红包 -->
    <div>
      <commimg :comm=imgs[0] class="border-b"></commimg>
      <crosshead :title='title[0]'  :titleimg="titleimg" ></crosshead>
      <a class="title" href="">
        <div class="title-container">
          <div class="title-container-left">
            <span class="subtitle">Yeelight 智能凉霸组合套装</span>
            <span class="subtitle-span">风随灯来，澎湃凉风，高效吸烟降尘，米家联动</span>
            <price :price="price" :total="5999"></price>
          </div>
          <div class="title-container-right">
            <div class="title-container-right-img">
              <img src="image/6.png" alt="">
            </div> 
          </div>
        </div>
        <support :sum='support[0].sum' :sup='support[0].sup' :explode='support[0].explode' :hot='support[0].hot' :rate='support[0].rate' ></support>
      </a>
      <div class="product-title">
        <a class="title" href="" v-for="(item,i) of productlist" :key="i">
          <span class="subtitle">{{item.title}}</span>
        <div class="title-container">
          <div class="title-container-left">                  
            <price :price="price" :total="item.total"></price>
          </div>
          <div class="title-container-right">
            <div class="title-container-right-img">
              <img :src=item.img alt="">
            </div> 
          </div>
        </div>
        <support :sum='support[0].sum' :sup='support[0].sup' :explode='support[0].explode' :hot='support[0].hot' :rate='support[0].rate' ></support>
      </a>
      </div>
    </div>
    <!-- 抢购 -->
    <!-- <div> 
      <crosshead :title="title" :titleimg="titleimg" ></crosshead>
      <slidingFigure></slidingFigure> 
    </div> -->
    <!-- 每日上新 -->
    <div v-for="(item,i) of 2" :key="i">
      <commimg :comm=imgs[i+1]></commimg>
      <div class="product-list">
        <div class="product-list-for" v-for="(item,i) of productitem" :key="i" @click="gotodetaile(item.pid)">
          <div>
            <div class="product-image">
              <!-- 34-39 -->
              <img :src="item.img" alt="">
              <span>新品</span>   
            </div> 
          </div>
          <span>{{item.title}}</span>
          <price :price="price" :total="item.price"></price>
        </div>  
      </div>
    </div>
    <!-- 有品市集 -->
    <div>
      <crosshead :title="title[1]" :titleimg="titleimg" ></crosshead> 
      <div class="fair" >
        <div class="fair-list"  v-for="(item,i) of scoprt" :key="i">
          <span>{{item.t1}}</span>
          <span>{{item.t2}}</span>
          <div class="fair-list-img">
            <img :src="item.img1" alt="">
            <img :src="item.img2" alt="">
          </div>
        </div>
      </div>
      <div class="fair-x" >
        <div class="fair-list-x"  v-for="(item,i) of fair" :key="i">
          <span>{{item.t1}}</span>
          <span>{{item.t2}}</span>
          <div class="fair-list-x-img">
            <img :src="item.imgs" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 品味生活 -->
    <div class="taste ">
      <crosshead :title="title[2]" :titleimg="titleimg" ></crosshead>
      <div class="taste-for border-b">
        <div class="taste-img">
          <img src="image/h1.jpeg" alt="">         
        </div>
        <div class="taste-position">
          <slidingFigure></slidingFigure>
        </div>
      </div>        
    </div>
    <!-- 更多购物 敬请期待 -->
    <div class="expect">
      <div>-- 更多购物 敬请期待 --</div>
    </div>
  </div>
</template>
<script>
//引入子组件 img
import commimg from './commimg.vue'
//引入子组件 crosshead(小标题)
import crosshead from './crosshead.vue'
//引入子组件 price(商品价格)
import price from './price.vue'
//引入子组件 support(支持率)
import support from './support'
//引入子组件 slidingFigure(滑动图)
import slidingFigure from './slidingFigure'
export default {
  data(){
    return {
      images:["image/banner1.png","image/banner2.jpg","image/banner3.jpg","image/banner4.jpg","image/banner5.jpg","image/banner6.jpg"],
      navtitle:[{img:"image/5.png",title:"每日新品"},{img:"image/6.png",title:"小米众筹"},{img:"image/7.png",title:"限时抢购"},{img:"image/8.png",title:"热销榜单"},{img:"image/9.png",title:"随便逛逛"}],
      imgs:["image/t1.png",'image/t2.jpeg','image/t3.jpeg'],
      title:['欢乐购','有品市集','品味生活'],
      titleimg:"image/X.png",
      price:[{symbol:'￥',total:129,rise:'起'}],
      support:[{sum:5776,sup:'/500人支持',explode:'爆',hot:'',rate:"1153%"}],
      recommend:[{img:'image/cd1.png',title:'热卖不打烊',subtitle:'爆款最高立省300'},{img:'image/cd2.png',title:'德尔玛品牌馆',subtitle:'爆款至高立减200元'},{img:'image/cd3.png',title:'小米电视暑期档',subtitle:'爆品799元起'},{img:'image/cd4.png',title:'6月运动好物推荐',subtitle:'高性能装备大赏'}],
      productlist:[{title:'德尔玛高温蒸汽清洁机',total:'299',img:'image/s1.png'},{title:'北斗星智能集成灶',total:'5599',img:'image/s2.png'}],
      scoprt:[{t1:'运动生活',t2:'活力四射快乐能量',img1:'image/39.png',img2:'image/40.png'},
        {t1:'婴童好物',t2:'宝宝好物甄选推荐',img1:'image/m1.png',img2:'image/m2.png'}
      ],
      fair:[{t1:'烹饪专家',t2:'智能小厨电',imgs:'image/m3.png'},{t1:'家庭影院',t2:'声临其境',imgs:'image/m4.png'},{t1:'亲子时光',t2:'宝宝甄选',imgs:'image/m5.png'},{t1:'运动健身',t2:'愉悦畅享',imgs:'image/m6.png'}],
      // background:['image/h1.jpeg','image/h2.jpeg',,'image/h3.jpeg',,'image/h4.jpeg',,'image/h5.jpeg',,'image/h6.jpeg',,'image/h7.jpeg',,'image/h8.jpeg',,'image/h9.jpeg','image/h10.jpeg',,'image/h11.jpeg',,'image/h12.jpeg'],
      productitem:[]
    }
  },
  props:['uid'],
  components:{
     commimg,
     crosshead,
     price,
     support,
     slidingFigure
  },
  created(){
    this.loading()
  },
  methods:{
    loading(){
      this.axios.get("product/indexprodcut",{params:{}}).then(result=>{
        this.productitem=result.data.result;
        // console.log(this.productitem)
    })
  },
  gotodetaile(pid){
    this.$router.push({path:`/detail/${pid}`,query:{uid:this.uid,pid:pid}})
  }
  }
}
</script>
<style scoped>
  .containner{
    margin-top: 3.5em;
    overflow: hidden;
  } 
.banner{
  width: 100%;
  height: 12em;
}
.banner img{
  width: 100%;
  height: 100%;
}
.nav-title{
  display: flex;
  justify-content:space-between;
  padding: 0.5em  0.5em  0 0.5em;
}
.nav-title-list{
  display: flex;
  flex-direction: column;
  align-content:center;
  align-items: center;
  flex-shrink: 0;
  font-size: 14px;
  color: rgb(102, 102, 102);
  width: 20%;
}
.nav-title-list .title-list-img img{
  width: 100%;
  height: 100%;
}
 .border-b{
   border-bottom:0.5em solid #F4F4F4;
 }
 .van-swipe__indicators{
   left: 90%!important;
 }
 .van-swipe__indicator{
   border-radius: 0!important;
 }
 .van-swipe__indicator--active{
   width: 0.5em!important;
   height: 0.5em!important;
 }
 .title{
   display: block;
   margin: 0 0.5em;
   background: #F9F3E9;
   border-bottom: 4px solid #F69A0C;
   padding: 0 0.5em;
 }
 .title-container{
   display: flex;
   justify-content: space-between; 
 }
 .title-container-left{
   width: 100%;
 }
 .subtitle{
    font-size: 16px;
    margin-top: 0.5em;
    color: rgb(51, 51, 51);
    display: block;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
 }
 .subtitle-span{
   display: block;
   font-size: 12px;
    margin-top: 0.1em;
    margin-bottom: 0.5em;
    color: rgb(153, 153, 153);
    text-overflow: ellipsis;
    overflow: hidden;
 }
 .title-container-right-img img{
   height: 100%;
   width: 100%;
 }
 .product-title{
   display: flex;
   justify-content:space-around;
   margin: 0.3em 0.5em;
 }
 .product-title .title{
   background: #F4F4F4;
 }
 .product-title .title{
  width: 49%;
  margin: 0;
 }
 .product-title .title-container-right-img{
   width: 100%;
   height: 100%;
 }
 .recommend-vessel{
   display: flex;
   justify-content: space-around;
   flex-flow:wrap;
   align-content: center;
   padding:0 0.5em;
   margin-bottom: 0.5em;
 }
 .recommend-vessel-one{
   width: 49%;
  background-color: rgb(229, 233, 243);
  padding: 0.5em 0.5em;
  margin-bottom: 0.2em;
 }
 .recommend-img{
  width: 78%;
  margin: 0 auto;
 }
 .recommend-vessel-one span{
   font-size: 16px;
 }
 .recommend-img img{
   width: 100%;
   height: 100%;
 }
 .product-list{
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   margin: 0 0.5em;
 }
 .product-list-for{
   width: 32%;
   margin-bottom: 0.5em;
 }
 .product-image{
   width: 100%;
   height: 100%;
   background: #F8F8F8;
 }
  .product-image img{
   width: 100%;
   height: 100%;
 }
 .product-image span{
   background: #8DBA6D;
   color: #fff;
 }
 .product-list span{
    font-size: 14px;
 }
 .fair{
   display: flex;
   justify-content: space-around;
   margin: 0.2em 0.5em;
 }
 .fair-list{
   width: 49%;
   padding: 0.5em 0.5em;
   background: #FAF7EF;
 }
 .fair-list span,.fair-list-x span{
   display: block;
 }
 .fair-list span:nth-child(1){
   font-size: 14px;
   color: #ff6700;
 }
 .fair-list span:nth-child(2),.fair-list-x span:nth-child(2){
   font-size: 12px;
   color: rgb(153, 153, 153);
 }
 .fair-list-img{
   display: flex;
   width: 49%;
 }
 .fair-list-img img{
   width: 100%;
   height: 100%;
 }
 .fair-x{
    display: flex;
    justify-content: space-around;
    margin: 0.2em 0.5em;
 }
 .fair-list-x{
   width: 25%;
   background: #F8F8F8;
   margin: 0.1em 0.1em;
   text-align: center;
 }
  .fair-list-x span:nth-child(1){
   font-size: 14px;
 }
 .fair-list-x-img{
   width: 65%;
   margin: 0 auto;
 }
 .fair-list-x-img img{
   width: 100%;
   height: 100%;
 }
 .taste-img{
   display: flex;
   width: 100%;
 }
 .taste-img img{
   width: 100%;
   height: 100%;
 }
 .taste-for{
   position: relative;
 }
  .taste-position{
    position: absolute;
    top: 40%;
  }
  .expect{
   padding: 5em;
   background: #F4F4F4;
    color: rgb(153, 153, 153);
  }
</style>
