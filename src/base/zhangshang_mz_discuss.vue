<template>
<div class="content">
  <i class="iconfont icon-fanhui" @click="back"></i>
  <div class="rules">
    <p class="titi">评议须知</p>
    <div class="rule">
      <p v-html="discuss.content"></p>
      <p>{{discuss.contentText}}</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>

  <div class="foot">
    <select name="partyStatus" class="select" v-model="branch_id">
      <option :value="branch._id" v-for="branch in branchs" >{{branch.label}}</option>
    </select>
    <span class="button" @click="btn">
         下一步
    </span>

  </div>

</div>
</template>

<script>
  export default {
    components:{
    },
    data(){
      return{
        discuss:[
          {
            content: "",
            contentText: "",
            createdAt: "",
            title: "",
            updatedAt: "",
            _id: "",
          }
        ],
        branchs:[
          {
        }
        ],
        branch_id:""
      }
    },
    methods: {
      back(){
        this.$router.push("/zhangshang_mz")
      },
      btn(){
        this.$router.push({path: '/zhangshang_mz_discuss_dis?id='+this.branch_id})
      },
      getbranch(){
        this.$axios.get("getbranch").then(res => {
          this.branchs=res.data;
          // console.log(res);
        })
      },
      getdiscuss(){
        this.$axios.get("getdiscuss").then(res => {
          this.discuss=res.data
          // console.log(res.data);
        })
      }
    },
    created(){
      this.getdiscuss();
      this.getbranch();
    }
  }
</script>

<style scoped lang="less">
.content{
  margin-top: 43px  ;
  i{
    position: fixed;
    left: 0;
    right: 0;
    top: 12px;
    z-index: 998;
    margin-left: 10px;
    color: white;
  }
  .rules{
    .titi{
      font-size: 16px;
      padding: 16px 0;
      text-align: center;
    }
    .rule{
      line-height: 30px;
      font-size: 14px;
      color: #666666;
      padding: 0 10px;
    }
  }
  .foot{
    position: fixed;
    bottom: 10px;
    right: 20px;
    left: 20px;
    text-align: center;
    .select{
      border: none;
      width: 207px;
      height: 44px;
      margin-right: 8px;
      padding: 0 30px;
      font-size: 14px;
      border-radius: 5px;
      background: #C50206;
      color: white;
    }
    .button{
      border: none;
      padding: 15px 35px;
      margin-left: 5px;
      font-size: 12px;
      border-radius: 5px;
      background: #C50206;

        color: white;

    }
  }
}
</style>
