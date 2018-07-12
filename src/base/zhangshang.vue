<template>
  <div class="zuzhi">
    <i class="iconfont icon-fanhui" @click="back"></i>
    <img src="../assets/timg.jpg">
    <div class="content1">
      <router-link to = "/zhangshang_zz" class="tu">
        <img src="../assets/icon1.png">
        <p>政治学习</p>
      </router-link>
      <div class="tu" @click="btnsx">
        <img src="../assets/icon2.png">
        <p>思想汇报</p>
      </div>
      <div class="tu" @click="btnxd">
        <img src="../assets/icon3.png">
        <p>心得总结</p>
      </div>
      </div>

    <div class="content2">
      <div class="tu" @click="btnmz">
        <img src="../assets/icon4.png">
        <p>民主评议</p>
      </div>
      <router-link to = "/zhangshang_ld" class="tu">
        <img src="../assets/icon5.png">
        <p>流动党员找组织</p>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "zhangshang",
      methods:{
        back(){
          this.$router.push("/index")
        },
        btnsx(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/zhangshang_sx-refer"})
            }else{
              this.$router.push({path:"/login",query:{mark:"zhangshang"}})
            }
          })
          this.$axios.post("getreport",{kind:1}).then(res => {
            // console.log(res.data);
            if(res.data.type==0||res.data.type==1||res.data.type==2){
              this.$router.push("/zhangshang_sx")
            }else{
              this.$router.push("/zhangshang_sx-refer")
            }
          })
        },
        btnxd(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/zhangshang_xd-refer"})
            }else{
              this.$router.push({path:"/login",query:{mark:"zhangshang"}})
            }
          })
          this.$axios.post("getreport",{kind:2}).then(res => {
            // console.log(res.data);
            if(res.data.type==0||res.data.type==1||res.data.type==2){
              this.$router.push("/zhangshang_xd")
            }else{
              this.$router.push("/zhangshang_xd-refer")
            }
          })
        },
        btnmz(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/zhangshang_mz"})
            }else{
              this.$router.push({path:"/login",query:{mark:"zhangshang"}})
            }
          })
        },
      }
    }
</script>

<style scoped lang="less">
.zuzhi{
  width: 100%;
  position: absolute;
  top:43px;
  color: #666666;
  font-size: 14px;
  i{
    position: fixed;
    left: 0;
    right: 0;
    top: 12px;
    z-index: 998;
    margin-left: 10px;
    color: white;
  }
  img{
    width: 100%;
  }
}
.content1{
  display: flex;
  height: 157px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  .tu{
    margin: 0 auto;
    p{
      margin-top: 8px;
      color: #666666;
      font-size: 14px;
    }
    img{
      width: 69%;
    }
  }
}
.content2{
  display: flex;
  height: 157px;
  width: 67%;
  text-align: center;
  align-items: center;
  .tu{
    margin: 0 auto;
    p{
      margin-top: 8px;
      color: #666666;
      font-size: 14px;
    }
    img{
      width: 69%;
    }
  }
}
</style>
