<template>
<div class="container" :style="{height:sheight+'px'}">
      <div class="title">
        <h3>欢迎注册有品账户</h3>
      </div>
       <div class="container-input">
        <div class="container-flex-input">
          <input  placeholder="用户名" type="text" required="required" v-model="uname" @blur="inputHidden"  v-on:input ="input(1)"/>
          <a class="uname" href="javascript:;" v-show="focusdel1" @click="empty(1)"></a>
        </div>
        <div class="container-flex-input">
          <input placeholder="密码" type="password" required="required" v-show="downIcon" @blur="inputHidden" v-model="upwd"  v-on:input ="input()"/>
          <input placeholder="密码" required="required" type="text" v-show="!downIcon"  @blur="inputHidden" v-model="upwd"  v-on:input ="input()"/>
          <a class="hidden" href="javascript:;" v-show="focusdel2" @click="empty(2)"></a>
          <span @click="lock()"><img v-show="downIcon" src="image/yanjing.png" alt=""><img v-show="!downIcon" src="image/yanjingclick.png" alt=""></span>    
        </div>
        <div>{{hint}}</div> 
        <mt-button class="btn" size="large" @click="login">注册</mt-button>
        <div class="container-flex-span">
          <span>注册代表你已经同意 <a href="javascript:;">《有品用户协议》</a>、<a href="javascript:;">《有品服务协议》</a>、<a href="javascript:;">《有品服务规则》</a></span>
        </div>
      </div>
    </div>   
</template>
<script>
export default {
  data(){
    return {
      upwd:"",
      uname:"",
      downIcon:true,
      focusdel1:false,
      focusdel2:false,
      hint:'',
      sheight:0
    }
  },
  created(){
    this.load
  },
  computed:{
    load(){
      this.sheight=window.innerHeight-106
    }    
  },
  methods:{
    empty(n){
     if(n==1){
       this.uname="";
     }else{
       this.upwd="";
     }
    },
    lock(){
     this.downIcon = !this.downIcon
    },
    input(a){
      if(a==1){
        this.focusdel1=true;
      }else{
      this.focusdel2=true;
    } 
      
    },
    inputHidden(){
      this.focusdel1=false;
      this.focusdel2=false;
    },
    login(){
      var regname=/^[a-zA-Z\d]\w{3,11}[a-zA-Z\d]$/;
      var regupwd=/^\w{3,10}$/;
      var uname=this.uname;
      var upwd=this.upwd
      if(!uname){
        this.hint='请输入用户名'
      }else if(!upwd){
        this.hint='请输入密码'
      }else if(!regname.test(uname)){
        this.hint='用户名格式错误'
      }else if(!regupwd.test(upwd)){
        this.hint='密码格式错误'
      }else{
         this.hint=""
        this.axios.get("user/reg",{params:{uname,upwd}}).then(result=>{
        if(result.data.code==-1){
          this.hint=result.data.msg;
        }else{
          this.hint=result.data.msg;
          this.$router.push({path:'/login'});
        }    
      })
      }
      }
  }
  
}
</script>
<style scoped>
.container{
 
      margin-top: 3.3em;
}
.title{
  margin: 2em 0;
}
.title h3{
  text-align: center;
  font-weight: normal;
 color: rgb(102, 102, 102); 
}
.container-input{
  margin: 0 2em;
}
.container-flex-input{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #8f8f94!important;
}
.container-flex-input input{
  margin:0;padding:0;
  border:0;outline: 0;
  border:0;
  width: 90%;
  height: 58px;
  line-height: 30px;
}
.container-flex-input a{
   background:url("../../../public/image/x0.png") no-repeat 5px 18px;
  height: 58px;
  width: 10%;
  margin-right: 10px;
}
.container-flex-input span img{
  margin-top: 1em;
}
.container-flex-input .padlock{
  height: 62px;
  width: 10%;
}
.btn{
 background-image: linear-gradient(90deg, #FFDF62 100%, #FECD0F 0%)!important; 
  background: #8f8f94;
  color: #000!important;
  font-size: 16px;
  margin-top: 1em;
  border-radius: 20px;
}
.container-flex-a{
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
}
.container-flex-a a{
   color: #ff6700!important;
}
.container-flex-third{
  display: flex;
  justify-content: space-between;
  margin: 52px 30px 10px;
}
.container-flex-span{
  display: flex;
  justify-content: center;
  font-size: 12px;
}
.container-flex-span a{
  color:#ff6700;
}
.change-show{
  margin-top: 2em;  
}
.change-show a{
  color:#ff6700;
}
</style>