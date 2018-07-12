<template>
  <div class="top">
    <div class="top-1">
      <p>{{data.allscore}}</p>
    </div>
    <div id="ji">
      <router-link to ="wode_lianghua_jifen">
        <img src="../assets/量化积分icon.png">
        <span>积分明细</span>
        <span>
          <img src="../assets/右箭头.png" height="12" width="12">
        </span>
      </router-link>
    </div>
    <div class="top-di top-2">
      <span>积分规则</span>
      <img src="../assets/问号.png" >
    </div>
    <div class="top-2">
      <span>登录App</span>
      <span id="y">0.1</span>
    </div>
    <div class="top-2">
      <span>完善个人积分</span>
      <span id="y">1</span>
    </div>
    <div class="top-2">
      <span>查看积分</span>
      <span id="y">2</span>
    </div>
    <div class="top-2">
      <span>按时缴纳党费</span>
      <span id="y">3</span>
    </div>
    <div class="top-2">
      <span>查看通知</span>
      <span id="y">4</span>
    </div>
    <div class="top-2">
      <span>了解学院工作动态</span>
      <span id="y">5</span>
    </div>
    <div class="top-2">
      <span>上交思想汇报经审核通过</span>
      <span id="y">6</span>
    </div>
    <div class="top-2">
      <span>主动学习相关文件</span>
      <span id="y">7</span>
    </div>
    <div class="top-2">
      <span>认真撰写心得总结并上交，经审核通过</span>
      <span id="y">8</span>
    </div>
    <div class="top-2">
      <span>提交个人总结，并参加评议</span>
      <span id="y">9</span>
    </div>
    <div class="top-2">
      <span>积极参与互动</span>
      <span id="y">10</span>
    </div>
    <div class="top-2">
      <span>学习党建知识</span>
      <span id="y">11</span>
    </div>
    <div class="top-2">
      <span>学习党史</span>
      <span id="y">1</span>
    </div>
    <div class="top-2">
      <span>创新争先事迹</span>
      <span id="y">2</span>
    </div>
    <div class="top-2">
      <span>学党章，学习习近平总书记系列讲话</span>
      <span id="y">3</span>
    </div>
    <div class="top-2">
      <span>用镜头记录两学一做过程中令人感动的人和事</span>
      <span id="y">4</span>
    </div>
    <div class="top-2">
      <span>关注并积极参与特色活动</span>
      <span id="y">5</span>
    </div>
    <div class="top-2">
      <span>制度化，常态化建设</span>
      <span id="y">6</span>
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
        }
      }
    },
    created(){
      this.getInfo()
    },
    methods:{
      getInfo(){
        this.$axios.post("getInfo").then(res=>{
          // console.log(res);
          this.data = res.data.data
          if(res.data.code==401){

            this.$router.push({path:"/login",query:{mark:"wode_lianghua"}})

          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .top{
    padding-top: 43px;
    width: 100%;
    .top-1{
      background: url("../assets/量化积分.png");
      background-size: 100% 100%;
      width: 100%;
      height: 160px;
      p{
        color: white;
        text-align: center;
        padding-top: 70px;
        font-size: 16px;
      }
      img{
        height: 160px;
        width: 100%;
      }}
    .top-di{
      span{color:#000}
      img{
        position: absolute;top: 8px;right: 14px
      }
    }
    .top-2{
      margin: 0 auto;
      color: #999;
      height: 28px;
      width: 100%;
      border-top: 1px solid #E8E8E8;
      text-indent: 0.5rem;
      position: relative;
     padding-bottom: 5px ;
      line-height: 38px;
      #y{
        position: absolute;
        right: 16px;
        color: red;
      }
    }
    #ji{
      position: relative;
      font-size: 16px;
      color: #888;
      height: 54px;
      width: 98%;
      padding-left: 8px;
      line-height: 58px;
      :hover{
        text-decoration: none;
      }
      span{
         margin-left: 6px;
      img{
       position: absolute;
       right: 25px;
        top: 20px;
      } }
    }
  }
</style>
