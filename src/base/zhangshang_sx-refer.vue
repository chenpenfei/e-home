<template>
  <div class="container">
    <i class="iconfont icon-fanhui" @click="back"></i>
    <div class="top"></div>
    <div class="ajax">
      <label for="load" class="label">
        <input id="load" class="input" type="file"
               accept="image/jpeg,image/png,iamge/gif" @change="up">
        <img :src="img" v-if="img">
      </label>
    </div>

    <mt-button type="danger" class="button" @click="addport">提交审核
    </mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import axios from 'axios'
  export default {
    data(){
      return{
        token:"",
         img:"",
      }
    },
    created(){
      this.getToken();
    },
    methods:{
      back(){
        this.$router.push("/zhangshang")
      },
      up($event){
        var file =$event.target.files[0];
        var form = new FormData();
        form.append("file",file);
        form.append("token",this.token);
        axios.post("https://upload-z1.qiniup.com",form, {
          headers:{"Content-Type":"multipart/form-data"}
        }).then(res=>{
          this.img = res.data.url
          // console.log(this.img);
        })
      },
      getToken(){
        axios.get(" http://up.yaojunrong.com/getToken").then
        (res=>{
          this.token = res.data.data;
        })
      },
      addport(){
        this.$axios.post("addport",
          {img:this.img,  kind:1}).then(res=>{
          // console.log(res);
          if( res.data.type==0){
            Toast("提交成功")
            this.$router.push("/zhangshang")
          }else{
            Toast("提交失败")
          }
        })
      },
    },
  }
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    i{
      position: fixed;
      left: 0;
      right: 0;
      top: 12px;
      z-index: 998;
      margin-left: 10px;
      color: white;
    }
   .top{
     height: 43px;
     width: 100%;
   }
    .ajax{
      position: fixed;
      top: 60px;left: 15px;
      .label{

        background: url("../assets/加号.png");
        display: block;
        border: 1px solid #bababa;
        height:100px ;
        width: 100px;
        text-align: center;
        span{

        }
        .input{
          display: none;
        }
        img{
          height: 100px;
          width: 100px;
        }
      }
    }
    .button{
      position: fixed;
      bottom: 30px;
      height: 46px;
      width: 95%;
      margin: 570px 2.5% 0 2.5%;
      font-size: 16px;
      background: #EF473A;
    }
  }
</style>
