<template>
  <div class="top">
    <i class="iconfont icon-fanhui" @click="back"></i>

    <div id="edit">
    <router-link to="/wode_xinxi_edit">编辑</router-link></div>
    <div class="top-1">
      <span>头像</span>
      <img :src="data.header">
    </div>
    <div class="top-2" >
      <span>姓名</span>
      <span id="y">{{data.username}}</span>
    </div>
    <div class="top-2">
      <span>身份证</span>
      <span id="y">{{data.idCard}}</span>
    </div>
    <div class="top-2">
      <span>家庭住址</span>
      <span id="y">{{data.hometown}}</span>
    </div>
    <div class="top-2">
      <span>工作地址</span>
      <span id="y">{{data.address}}</span>
    </div>
    <div class="top-2">
      <span>民族</span>
      <span id="y">{{data.nation}}</span>
    </div>
    <div class="top-2">
      <span>微信号</span>
      <span id="y">{{data.wxNum}}</span>
    </div>
    <div class="top-2">
      <span>QQ号</span>
      <span id="y">{{data.qqNum}}</span>
    </div>
    <div class="top-2">
      <span>性别</span>
      <span id="y" v-if="data.sex == 1">男</span>
      <span id="y" v-else="data.sex == 0">女</span>
    </div>
    <div class="top-2">
      <span>最高学历</span>
      <span id="y">{{data.education}}</span>
    </div>
    <div class="top-2">
      <span>职称</span>
      <span id="y">{{data.jobRank}}</span>
    </div>
    <div class="top-2">
      <span>薪资水平</span>
      <span id="y">{{data.salary}}</span>
    </div>
    <div class="top-2">
      <span>入党时间</span>
      <span id="y" >{{data.joinTime}}</span>
    </div>
    <div class="top-2">
      <span>党费最后缴纳时间</span>
      <span id="y">{{data.payTime}}</span>
    </div>
    <div class="top-2">
      <span>当前身份</span>
      <span id="y">{{data.partyIdentity}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          data:{
            allscore:"",
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
          },
          date:"",
        }
      },
      created(){
        this.getInfo()
      },
      methods:{
        change(){

        },
        back(){
          this.$router.push("/wode")
        },
        getInfo(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data.data);
            this.data = res.data.data

            this.change();

            if(res.data.code==401){
              this.$router.push({path:"/login",query:{mark:"wode_xinxi"}})
            }
          })
        }
      }
    }
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
    #edit a{
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
      width: 100%;
      text-indent: 0.5rem;
     img{
      margin:8px;
      height: 35px;
      width: 40px;
      position: absolute;
      top: 2px;
      right: 5px;
    }}
    .top-2{
      margin: 0 auto  ;
      width: 98%;
      border-top: 1px solid #E8E8E8;
      text-indent: 0.5rem;
      position: relative;
    #y{
      text-align: right;
      position: absolute;
      right: 8px;
     }
    }

  }
</style>
