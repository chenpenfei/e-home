<template>
  <div class="top">
    <i class="iconfont icon-fanhui" @click="back"></i>
    <div id="edit">
      <p @click="changeInfo">保存</p>
    </div>
    <div class="top-1">
      <span>头像</span>
      <label class="label" >
        <input type="file" accept="image/jpeg,image/png,iamge/gif"
               @change="up" class="btn">
        <img :src="changeData.header">
      </label>
    </div>
    <div class="top-2" >
      <span>姓名</span>
      <span id="y"><input type="text" v-model="changeData.username"></span>
    </div>
    <div class="top-2">
      <span>身份证</span>
      <span id="y">{{changeData.idCard}}</span>
    </div>
    <div class="top-2">
      <span>家庭住址</span>
      <span id="y"><input type="text" v-model="changeData.hometown"></span>
    </div>
    <div class="top-2">
      <span >工作地址</span>
      <span id="y"><input type="text" v-model="changeData.address"></span>
    </div>
    <div class="top-2">
      <span>民族</span>
      <span id="y"><input type="text" v-model="changeData.nation"></span>
    </div>
    <div class="top-2">
      <span>微信号</span>
      <span id="y"><input type="number" v-model="changeData.wxNum"></span>
    </div>
    <div class="top-2">
      <span>QQ号</span>
      <span id="y"><input type="number" v-model="changeData.qqNum"></span>
    </div>
    <div class="top-2">
      <span>性别</span>
      <span id="x">
        <input type="radio" checked="checked" name="1"
               :value="1" v-model="changeData.sex" />
        男<input  type="radio"  name="1" :value="0"  v-model="changeData.sex" />女
      </span>
    </div>
    <div class="top-2">
      <span>最高学历</span>
      <span id="y"><input type="text" v-model="changeData.education"></span>
    </div>
    <div class="top-2">
      <span>职称</span>
      <span id="y"><input type="text" v-model="changeData.jobRank"></span>
    </div>
    <div class="top-2">
      <span>薪资水平</span>
      <span id="y"><input type="number" v-model="changeData.salary"></span>
    </div>
    <div class="top-2">
      <span>入党时间</span>
      <span id="date">
        <input type="date"
               name="joinPartyTime" id="joinPartyTime"  v-model="changeData.joinTime">
      </span>
    </div>
    <div class="top-2">
      <span>党费最后缴纳时间</span>
      <span id="date">
        <input type="date" name="joinPartyTime" id="joinPartyTime"  v-model="changeData.payTime">
      </span>
    </div>
    <div class="top-2">
      <span>当前身份</span>
      <span id="y">
        <select name="partyStatus"  v-model="changeData.partyIdentity">
          <option value="2">党员</option>
          <option value="1">预备党员</option>
          <option value="0">积极分子</option>
        </select>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        token:"",
        changeData:{
          partyStatus:"",
          createTime:"",
          updateTime:"",
          _id:"",
          partyIdentity:"",
          idCard:"",
          pwd:"",
          username:"",
          branchId:"",
          branchName:"",
          header:"",
          hometown:"",
          address:"",
          nation:"",
          wxNum:"",
          qqNum:"",
          sex:"",
          education:"",
          jobRank:"",
          salary:"",
          joinTime:"",
          payTime:""
        }
      }
    },
    created(){
      this.getInfo();
      this.getToken();
    },
    methods: {
      back(){
        this.$router.push("/wode_xinxi")
      },
      up($event){
        // console.log($event);
        var file =$event.target.files[0];
        var form = new FormData();

        form.append("file",file);
        form.append("token",this.token);

        axios.post("https://upload-z1.qiniup.com",form, {
          headers:{"Content-Type":"multipart/form-data"}
        }).then(res=>{
          // console.log(res);
          this.changeData.header = res.data.url
        })
      },
      getToken(){
        axios.get(" http://up.yaojunrong.com/getToken").then
        (res=>{
          this.token = res.data.data;
        })
      },

      getInfo() {
        this.$axios.post("getInfo").then(res => {
          this.changeData = res.data.data
        })
      },
      changeInfo(){
        this.$axios.post("changeInfo",this.changeData).then(res=>{
          this.changeData = res.data.data
          if(res.data.code==200){
            this.$router.push("wode_xinxi")
          }
        })
      }
    }}
</script>

<style scoped lang="less">
  .top{
    i{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 998;
      margin-left: 10px;
      color: white;
    }
    #edit p{
      position: fixed;
      top: 0px;
      right: 8px;
      font-size: 16px;
      color: white;
      z-index: 998;
    }
    position: fixed;
    top: 43px;
    width: 100%;
    position: relative;
    line-height: 50px;
    font-size: 14px;
    .top-1{
      display: flex;
      width: 100%;
      text-indent: 0.5rem;
      label{
        display: flex;
        .btn{
          display: none;
        }
          img{
            margin:8px;
            height: 35px;
            width: 40px;
            position: absolute;
            top: 2px;
            right: 5px;
        }
       }
    }
  .top-2{
    width: 98%;
    margin: 0 4px;
    border-top: 1px solid #d8d8d8;
    text-indent: 0.5rem;
    position: relative;

    #date{
      position: absolute;
      right: -2px;
      input{
        background: white;
        outline: none;
        border: 0px;
        outline:none;
        font-size: 15px;
        width: 120px;
        line-height: 50px;
        padding:0 5px 0 20px;
        height: 34px;
        margin: 8px 4px;
      }
    }
    #x{
      position: absolute;
      right: 10px;
    }
    #y{
      position: absolute;
      right: 8px;
      input{
        text-align: right;
        border: 0px;
        outline:none;
        width: 25px;
        padding-left: 200px;
      }
      select{
        background: white;
        outline: none;
        border: 0px;
        outline:none;
        height: 40px;
        width: 126px ;
        padding-left: 40px;
        margin-right: -8px;
      }
    }
  }
}
</style>
