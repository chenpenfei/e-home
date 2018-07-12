<template>
  <div  class="content">
    <div class="image">
     <img src="../../src/assets/logo.png">
    </div>
    <form class="form" @submit.prevent>
      <div class="input-wrap">
        <input type="text" placeholder="身份证号" v-model="formData.idCard">
      </div>
      <div class="input-wrap">
        <input type="password" placeholder="密码" v-model="formData.pwd">
      </div>
      <div class="input-wrap">
        <mt-button size="large" @click="login">登录</mt-button>
      </div>
    </form>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
  name:"login",
  data() {
    return{
      formData:{
        idCard:"",
        pwd:""
      }
    }
  },
  methods:{
    login(){
      this.$axios.post("login",this.formData).then(res=>{
        // console.log(res)
        if(res.data.code == 200 ){
          Toast("登录成功")

          this.changepath="/"+ this.$route.query.mark;
          this.$router.push({path:this.changepath})

          // localStorage.setItem("token",res.data.data)
        }else{
          Toast("登录失败")
        }
      })
    }
  }
}

</script>
<style scoped>
  .mint-button {
    background: #e3574f;
    font-size: 14px;
    color: #fff;
    margin: 8px 0px 8px -15px;
    width: 331px;
  }
  .login-deng{
    font-size:18px;
    color: white;
    text-align: center;
    line-height: 44px;
  }
  .content{
    background: #c7000a;
      position: absolute;
      top: -1px;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: 10px;
      overflow-y: auto;
      margin-top: 44px;
      margin-bottom: -1px;
      height: auto;
      background: #c7000a;

  }
  .content .image{
    margin: 0  auto;
    padding: 20px;
    width: 300px;
    background: #c7000a;
    text-align: center;
  }
  .content .image img{
   width: 225px;
    height: 54px;

  }
  .form {
    width: 300px;
    margin: 0 auto;}

  .input-wrap {
    margin-bottom: 4px;}

  .form .input-wrap input{
    width: 318px;
    margin: 5px 0px 5px -15px;
    padding: 14px 6px;
    border: 1px solid #ff0;
    border-radius: 4px;
    background: #c7000a;
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
</style>
