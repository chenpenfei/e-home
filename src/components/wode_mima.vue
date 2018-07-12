<template>
<div class="da">
  <div class="content">
    <p>旧密码:</p>
    <input type="text" v-model="change.pwd">
    <p>新密码:</p>
    <input type="password" v-model="change.newPwd" >
    <p>确认密码:</p>
    <input type="password" v-model="change.newPwd2" >

    <p>
      <mt-button class="btn" type="danger" @click="queding">确定</mt-button>
    </p>

  </div>
</div>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
      name: "wode_mima",
      data() {
        return{
          change:{
            pwd:"",
            newPwd:"",
            newPwd2:""
          }
        }
      },
      methods:{
          queding(){
            if(this.change.newPwd ===this.change.newPwd2){
              this.$axios.post("changePwd",this.change).then(res=>{
                // console.log(res);
                if( res.data.code == 200){
                  this.$axios.post("/out")
                  Toast("修改成功")
                  this.$router.push("/login")
                }
                else{
                  Toast("修改失败")
                }
              })
            }else{
              Toast("两次密码不一致")
            }
          },

      }
    }

</script>

<style scoped lang="less">
.da{
  position: absolute;
  width: 100%;
  padding-top: 43px;
  .content {

    padding-top: 40px;
    margin: 0 10%;
    width: 80%;
    font-size: 18px;
    color: #777;
    line-height: 30px;
    p{
      margin: 8px 0;

      button{
        width: 331px;
        margin-top: 5px;
        height: 45px;
        background: #ef473a;
      }
    }
    input{
      padding: 15px;
      border: 1px solid #999;
      border-radius: 5px;
      outline:none;
      width: 89%;
      margin: 0 auto;
    }
    .btn{
      width: 100%;
      margin: 8px auto;
    }
  }
}
</style>
