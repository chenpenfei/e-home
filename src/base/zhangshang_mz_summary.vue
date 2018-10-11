<template>
  <div class="container">
    <i class="iconfont icon-fanhui" @click="back"></i>

    <div class="ajax">
      <label for="load" class="label">
        <input id="load" class="input" type="file" accept="image/jpeg,image/png,iamge/gif" @change="up">
        <img :src="img" v-if="img">
      </label>
    </div>

    <mt-button type="danger" class="button" @click="addsummary">提交审核
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
        data:{
            _id:"",
            title:"",
            content:"",
            contentText:"",
            createdAt:"",
            updatedAt:""
          },
        file:{
          discussId:"",
          pic:""
        }
      }
    },
    methods:{
      back(){
        this.$router.push("/zhangshang_mz")
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
          this.file.pic=this.img
        })
      },
      getToken(){
        axios.get(" http://up.yaojunrong.com/getToken").then
        (res=>{
          this.token = res.data.data;
        })
      },
      getdiscuss(){
        this.$axios.get("getdiscuss").then(res=>{
          this.data = res.data
          this.file.discussId=this.data._id
        })
      },
      addsummary(){

        this.$axios.post("addsummary",

          {discussId:this.file.discussId,pic:this.file.pic}).then(res=>{
          console.log(res);
          if( res.data.code == 200){
            this.$router.push("/zhangshang_mz")
          }
          if( res.data.code == 400){
            Toast("个人总结不能重复提交")
            }else{
            Toast("提交失败")
          }
        })
      }
    },
    created(){
      this.getToken();
      this.getdiscuss();
    }
  }
</script>

<style scoped lang="less">
  .container{
    i{
      height: 43px;
      position: fixed;
      left: 0;
      right: 0;
      top: 12px;
      z-index: 998;
      margin-left: 10px;
      color: white;
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
      width: 95%;
      position: fixed;
      bottom: 70px;
      height: 46px;
      margin: 570px 2.5% 0 2.5%;
      font-size: 16px;
      background: #EF473A;
    }
  }
</style>
