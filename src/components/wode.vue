<template>
<div class="wode">

  <div class="top">
    <img :src="data.header" v-if="show">
    <img src="../assets/xgmm.png" v-else="show">
    <p @click="btn" v-if="show">{{data.username}}</p>
    <p @click="btn" v-else="show">请登录</p>
  </div>

  <div class="item1" @click="btninfo">
      <img src="../assets/个人信息.png">
      <span>个人信息</span>
      <span><img src="../assets/右箭头.png"></span>
  </div>

  <div class="item1" @click="btnrank">
      <img src="../assets/量化积分icon.png">
      <span>个人量化积分</span>
      <span><img src="../assets/右箭头.png" height="10" width="10"></span>
  </div>
  <div class="item1" @click="btnmima">
      <img src="../assets/修改密码icon.png">
      <span>修改密码</span>
      <span><img src="../assets/右箭头.png" height="10" width="10"></span>
  </div>
  <div class="item1"  @click="btndangfei">
      <img src="../assets/党费缴纳.png">
      <span>党费缴纳</span>
      <span><img src="../assets/右箭头.png" height="10" width="10"></span>
  </div>

  <mt-button type="danger" class="button" @click="button" v-if="show">退出登录</mt-button>
  <tab></tab>
</div>
</template>

<script>
  import tab from '../base/tab'
  import axios from 'axios'
    export default {
        components:{
        tab
        },
      data(){
          return{
            data:{
              username:"",
              header:"",
            },
            show:""
          }
      },
      created(){
          this.getInfo()
      },
      methods:{
        getInfo(){
            this.$axios.post("getInfo").then(res=>{
              // console.log(res);
              this.data = res.data.data ;
              if(res.data.code == 200){
                this.show=true
              } else{
                this.show=false
              }
            })
          },
        button(){
            this.$axios.post("out").then(res=>{
              if(res.data.code==200){
                this.$router.push({path:"/login",query:{mark:"wode"}})
              }
            })
        },
        btninfo(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/wode_xinxi"})
            }else{
              this.$router.push({path:"/login",query:{mark:"wode"}})
             }
            })
          },
        btnrank(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/wode_lianghua"})
            }else{
              this.$router.push({path:"/login",query:{mark:"wode"}})
            }
          })
        },
        btnmima(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/wode_mima"})
            }else{
              this.$router.push({path:"/login",query:{mark:"wode"}})
            }
          })
        },
        btndangfei(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/wode_dangfei"})
            }else{
              this.$router.push({path:"/login",query:{mark:"wode"}})
            }
          })
        },
        btn(){
          this.$router.push({path:"/login",query:{mark:"wode"}})
        },
      }
    }
</script>

<style scoped lang="less">
  * a{
    text-decoration: none;
  }
  .wode{
    width: 100%;
  position: absolute;
  top:43px;

  .button{
  width: 90%;
    height: 47px;
    margin:40px 5%;
    text-align: center;

  }
  .top{
  margin: 0 auto;
  height: 155px;
  background: #cd0200;
  text-align: center;
  img{
    border-radius: 50%;
    height: 69px;
    width: 69px;
  margin-top: 45px;
  margin-bottom: 7px;
  }
  p{
  color: #fff;
  font-size: 12px;
  }
  }
  .item1{
  position: relative;

  height: 54px;
  font-size: 16px;
  color: #999;
  border-top: 0.1px solid #999;
  span img{
  position: absolute;
  right: -4px;
  top: 10px;
  height: 9px;
  width: 9px;
  }
  img{
  height: 32px;
  width: 32px;
  margin: 13px;
  }
  }
  }
</style>
