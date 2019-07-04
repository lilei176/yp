<template>
  <div class="advertising" v-show="isshow" @click="hidden">
    <div class="img-1">
      <img src="image/padlock.png" alt="">
    </div>
    <div>
      <img src="image/img22.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isshow:true
    }
  },
  create(){
    
  },
  methods:{
    hidden(){
      this.isshow=false;
    }
  }
}
</script>
<style scoped>
  .advertising{
    width: 100%;
    background:rgba(102, 102, 102, 0.6);
    text-align: center;
    padding: 11em 0;
    position: absolute;
    z-index: 2;
    position:fixed;
  }
  .advertising img{
    width: 50%;
  }
  .advertising .img-1{
    width: 24%;
    margin: 0 60%;
  }
</style>
