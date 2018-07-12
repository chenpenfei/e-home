<template>
<div class="content">
  <div class="top">
    <i class="iconfont icon-fanhui" @click="back"></i>
  </div>

  <div class="ctn" v-for="user in users">
    <router-link :to ="'/zhangshang_mz_discuss_dis-zj?id='+user._id">
      <div class="mi">
        <img :src="user.header">
        <span>{{user.username}}</span>
      </div>

      <div class="ri">
        <span>{{user.branchName}}</span>
      </div>

    </router-link>
  </div>
</div>
</template>

<script>

  export default {
    components:{
    },
    data(){
      return{
        users:[{
          branchId: "",
          branchName: "",
          createIime: "",
          header: "",
          idCard: "",
          partyIdentity: "",
          partyStatus: "",
          updatetime: "",
          username: "",
          _id: "",
          }] ,
        branchs:[
          {

          }
        ],
      }
    },
    created(){
      this.getuserlist();
    },
    methods: {
      back(){
        this.$router.push("/zhangshang_mz_discuss")
      },
      getuserlist() {
        this.$axios.post("getuserlist", {branchId:this.$route.query.id}).then(res => {
        this.users= res.data.data;
          // console.log(res);
        })
      }
    }
  }
</script>

<style scoped lang="less">
.content{
  width: 100%;
  .top{
    height: 43px;
    i{
    position: fixed;
    left: 0;
    right: 0;
    top: 12px;
    z-index: 998;
    margin-left: 10px;
    color: white;
   }
  }
  .ctn{
    width: 97%;
    height: 54px;
    line-height: 54px;
    margin: 0 auto;
    font-size: 15px;
    color: #666666;
    border-bottom: 1px solid #bababa;
    a{display: flex;
      .mi{
        flex: 0.8;
        img{
          width: 32px;
          height: 32px;
        }
        span{
          margin-left: 12px;
        }
      }
      .ri{
        flex: 2.4;
        text-align: right;
      }
    }
  }
}

</style>
