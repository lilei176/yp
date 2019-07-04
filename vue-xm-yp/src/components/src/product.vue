<template>
  <div :style="{height:sheight+'px'}">
    <div class="navbar">
      <div class="nav">
      <div class="nav-logo" @click="toHome">
        <img src="image/left.png"  >
      </div>
      <div class="nav-search">
        <img src="image/search.png" width="15px" height="15px">
        <input type="text" placeholder="搜一搜" v-model="searchinput" @focus="hidden">
      </div>
      <div class="message" @click="searchsql">
        <div>搜索</div>
      </div>
    </div>
    </div>
      <!-- 未点击搜索 -->
    <div class="mainbody" v-show="isnosearch">
      <div class="tab1">
        <div >
          <div class="hot-search">热门搜索</div>
        </div>
        <div class="hot-search-list">
          <div v-for="(item,i) of popularcontent" :key="i">
            <span @click="inputadd(item)">{{item}}</span>
          </div>
        </div>
        <div style="display:none">
          <div class="history">
            <div>历史记录</div>
            <a href=""><img src="image/delete.png" alt=""></a>
          </div>
          <div class="hot-search-list">
          <div>
            <span>电动牙刷</span>
          </div>
        </div>
        </div>
      </div>
      <div>     
      </div>
    </div>
    <div v-show="isproduct">
      <div class="product-nav">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
          <van-dropdown-item v-model="value4" :options="option4" />
        </van-dropdown-menu>
      </div>
      <div class="product-list" >
        <div class="product-item" v-for="(item,i) of listproduct" :key="i" @click="gotodetaile(item.pid)">
          <div class="product-item-img">
            <img :src="item.img" alt="">
            <span>{{item.title}}</span>
          </div>
          <div class="product-introduce">
            <span>{{item.subtitle}}</span>
            <price :price="price" :total="item.price"></price>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import price from './price.vue'
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return {
      searchinput:'',
      isproduct:false,
      isnosearch:true,
      color:"",
      text:'',
     
      sheight:0, 
       value1: 0,
      value2: 'a',
      value3:'e',
      value4:10,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '销量', value: 'a' },
        { text: '好评优先', value: 'b' },
        { text: '价格优先', value: 'c' },
      ],
      option3: [
        { text: '品牌', value: 'e' },
        { text: '有品自营', value: 'f' },
        { text: '贝医生', value: 'g' },
      ],
      option4: [
        { text: '分类', value: 10 },
        { text: '洗护', value: 11 },
        { text: '口腔', value: 12 },
      ],
       price:[{symbol:'￥'}],
       popularcontent:['洗衣机','电动牙刷','空调','风扇','加湿器','保温杯','阿宽','AI音响','记录仪'],
       listproduct:[],
       uid:''
    }
  },
  created(){
   this.load;
   this.uid=this.$route.query.uid;
  },
  computed:{
    load(){
      this.sheight=window.innerHeight-50;
    }
  },
  methods:{
    onConfirm() {
      this.$refs.item.toggle();
    },
    toHome(){
      this.$router.push({path:'home'})
    },
    searchsql(){
      if(this.searchinput!=''){
        // console.log(this.searchinput)
        this.isproduct=true;
        this.isnosearch=false;
        var subject=this.searchinput;
        this.axios.get("product/list",{params:{subject}}).then(result=>{
          if(result.data.code==1){
            this.listproduct=result.data.result;
            // console.log(this.listproduct)
          }else{         
           MessageBox('提示', '请输入正确的关键字');
            this.hidden();
          } 
      })
      }
    },
    inputadd(item){
      this.searchinput=item;
      this.searchsql();
     
    },
    hidden(){
      this.isproduct=false;
      this.isnosearch=true;
    },
    gotodetaile(pid){
      this.$router.push({path:`/detail/${pid}`,query:{uid:this.uid}})
    }

    // randomcolor(){
    //   for(let i=0;i<this.popularcontent.length;i++){
    //     var color=`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`
    //     this.color=color
    //   }
      
    // }
  },
  components:{
    price
  }
}
</script>
<style scoped>
  .navbar{
    height: 48px;
  }
  .nav{
    display: flex;
    justify-content: space-between;
    width: 99%;
    align-items: center;
     position: fixed; 
    z-index: 999;
    overflow: hidden;
    background: #fff;
    padding: 0.5em 0;  
    }
  .nav-logo {
   width: 10%;
    display: flex;
    align-items: center;
    margin-top: 2px;
}
.nav-search{
  background: #F4F4F4;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  color: #A4BDDE;
  font-size: 14px;
  height: 3em;
}
.nav-search input{
  margin-left:10px;
  margin: 0;
  border: 0;
  outline: 0;
  background: #F4F4F4;
}
.message{
  width: 10%;
  display: flex;
  justify-content: flex-end;
}
.mainbody{
  margin: 1.5em  0; 
}
/* .tab1{
   margin: 0 1em;
} */
.hot-search{
  background: #F4F4F4;
  padding: 0.7em 1em;
}
.hot-search-list{
  margin: 1.5em 0;
  padding: 0em 1em;
}
.hot-search-list div{
  display: inline-block;
  width: 22%;
  text-align: center;
  background: #A4BDDE;
  margin: 0.2em 0.2em;
  box-sizing: border-box;
  border-radius: 5%;
}
.history{
  display: flex;
  justify-content: space-between;
  background: #F4F4F4;
  padding:0.5em 1em;
  align-items: center;
}
.product-nav{
  position: fixed;
  width: 100%;
  height: 38px;
  top: 43px;
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

</style>
