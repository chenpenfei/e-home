<template>
<div class="content">
  <i class="iconfont icon-fanhui" @click="back"></i>
  <img src="../assets/reviewing.png" class="img" v-if="data.code==400||data.type==2">
  <img src="../assets/pass.png" class="img" v-else="data.type==1">
  <p>{{msg}}</p>
  <mt-button class="button" @click="button"  v-if="data.type==0">关闭</mt-button>
  <mt-button class="button" v-else="data.type==1||data.type==2" @click="con">继续提交</mt-button>
</div>
</template>

<script>
  export default {
    components:{
    },
    data(){
      return{
        data:
          {
            isRead:"",
            type:"",
          },
        msg:""
      }
    },
    created(){
      this.getreport()
    },
    methods: {
      back(){
        this.$router.push("/zhangshang")
      },
      con(){
        this.$router.push("/zhangshang_sx-refer")
      },
      button(){
        this.$router.push("/zhangshang")
      },
      getreport() {
        this.$axios.post("getreport",{kind:1}).then(res => {
          // console.log(res);
          this.data = res.data;
          if(res.data.type==1){
            this.msg=("审核通过")
            this.msg=this.msg
          }
          if(res.data.type==2){
            this.msg=("审核不通过")
          }
          if(res.data.type==0){
            this.msg=("正在审核")
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
.content{
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
  margin-top: 23px;
  text-align: center;
  .img{
    height: 101px;
    width: 101px;
    margin-top: 50px;
  }
  p{
    font-size: 14px;
    margin: 10px;
    color: #666;
  }
  .button{
    border-radius: 10px;
    font-size: 16px;
    width: 248px;
    height: 40px;
    color: white;
    background: #cd0200;
    margin-top: 94px;
  }
}
</style>
