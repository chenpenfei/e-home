<template>
  <div class="content">
    <i class="iconfont icon-fanhui" @click="back"></i>
    <p></p>
    <router-link to ="/zhangshang_mz_summary">
     <mt-button class="button">个人总结</mt-button>
    </router-link>

    <router-link to ="/zhangshang_mz_discuss">
      <mt-button class="button">民主评议</mt-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "zhanghsang_sx",
    methods:{
      back(){
        this.$router.push("/zhangshang")
      },
    }
  }
</script>

<style scoped lang="less">
  .content{
    margin-top: 43px;
    text-align: center;
    i{
        text-align: left;
      position: fixed;
      left: 0;
      right: 0;
      top: 12px;
      z-index: 998;
      margin-left: 10px;
      color: white;
    }
    p{
   margin: 262px 0;
    }
    .button{
      display: block;

      font-size: 16px;
      width: 208px;
      height: 44px;
      color: white;
      background: #EF473A;
      margin: 22px auto;
    }
  }
</style>
