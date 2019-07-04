// 滑动组件
<template>
  <div class="sliding-div">
    <div class="sliding">
      <div class="sliding-list" :style="{width:sWidth+'px'}">
        <div v-for="(item,i) of product" :key="i" class="slidingfigure">
          <div class="sliding-list-img">
            <img :src="item.img" alt="">
          </div>
          <div class="sliding-price">
            <div>{{item.title}}</div>
            <price :price="price" :total="item.price"></price>
          </div>            
        </div>
         <!-- <div class="sliding-list">
          <a href="">查看更多</a>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
//引入子组件 price
import price from './price.vue'
export default {
  data(){
    return{
      price:[{symbol:'￥',total:129}],
      start:0,
      move:0,
      end:0,
      movex:0,
      change:0,
      clientWidth:0,
      ulwidth:0,
      width:0,
      n:0,
      sWidth:0  ,
      product:[]
    }
  },
  mounted(){
    this.sWidth=window.innerWidth;
    // console.log(this.screeWidth)
    this.loading();
  },
  components:{
    price
  },
  methods:{
    loading(){
      this.axios.get("product/productlist",{params:{}}).then(result=>{
        this.product=result.data.result;
        // console.log(this.product)
    })
  }
    
    //触摸屏幕时触发；
    // touchstart(e){
    //   e.preventDefault();
    //   this.start=e.touches[0].pageX;
    //   //console.log(this.start)
      
     
    // },
    // //在屏幕上滑动时连续的触发。
    // touchmove(e){
    //   e.preventDefault();
    //   this.move=e.touches[0].pageX;     
    //   this.movex=this.move-this.start+this.change;  
    //   if(this.movex>0){
    //     this.movex=0;
    //     this.change=0;
    //   }else if(this.n<0){      
    //     this.movex=-this.ulwidth+this.width;
    //     this.change=-this.ulwidth+this.width
    //   }   
    // },
    // //从屏幕上移开时触发
    // touchend(e){
    //   e.preventDefault();
    //   this.width = this.$el.parentNode.clientWidth;
    //  // console.log(e.changedTouches[0].pageX);
    //   this.end=e.changedTouches[0].pageX;
    //   this.change+=this.end-this.start;
    //   this.movex=this.change;
    //   var width = 0.4*window.innerWidth;
    //   this.ulwidth=width*9;
    //   //console.log(right)
    //   this.n=this.ulwidth+this.movex-this.width-40
    //   if(this.movex>0){
    //     this.movex=0;
    //     this.change=0;
    //   }else if(this.n<0){       
    //     this.movex=-this.ulwidth+this.width;
    //     this.change=-this.ulwidth+this.width
    //   }     
    // }
  }
}
</script>
<style>
  .sliding-div{
    width: 100%;
  }
  .sliding-list{
    box-sizing: border-box;
    display: flex;  
    flex-shrink: 0;
    position: relative;
    margin: 0 0.5em; 
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .sliding-list::-webkit-scrollbar{
    display: none
  }
  .slidingfigure{
    display: flex;
    flex-direction: column;
    align-content: space-between;
    flex-shrink: 0;
    border-right:1px solid #EEEEEE ;
    width: 33%;
    text-align: center;
    white-space: nowrap;
  }
  .sliding-list-img{
    background: #F8F8F8;
    padding: 0.6em 0;
  }
  .sliding-list-img img{
    width: 63%;
  }
  .sliding-price{
    font-size: 14px;
  }
</style>
