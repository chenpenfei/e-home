<template>
  <div class="content">
    <div class="top">
      <i class="iconfont icon-fanhui" @click="back"></i>
    </div>
    <p>个人总结</p>
    <img :src="data.pic">

    <div class="foot">
      <input type="radio" value="0" name="choose" v-model="status">
      <label>优</label>
      <input  type="radio" value="1" name="choose" v-model="status">
      <label>良</label>
      <input type="radio" value="2" name="choose" v-model="status">
      <label>中</label>
      <input type="radio" value="3" name="choose" v-model="status">
      <label>差</label>
      <button @click="submit">提交</button>
    </div>
  </div>

</template>

<script>
  import { MessageBox } from 'mint-ui';
  import { Toast } from 'mint-ui';
  export default {
    components:{
    },
    data(){
      return{
        discuss :[{
          _id:""
        }] ,
        data:[{
          pic:"",
          id:"",
        }],
        status:""
      }
    },
    created(){
      this.getdiscuss();
    },
    methods: {
      back(){
        this.$router.history.go(-1)
      },
      getdiscuss(){
        this.$axios.get("getdiscuss").then(res=>{
          // console.log(res.data);
          this.discuss=res.data
          this.getOther();
        })
      },
      getOther(){
        this.$axios.get("getOther",
          {discussId:this.discuss._id,otherUserId:this.$route.query.id}).then(res=>{
          // console.log(res.data);
          this.data=res.data;
          if(res.data == null){
            Toast("该用户没有完善个人总结");
            this.$router.push("/zhangshang_mz_discuss")
          }
        })
      },
      submit(){

          MessageBox.confirm('确定提交吗?').then(action => {
            this.$axios.post("discuss",
              {id:this.data.id,status:this.status}).then(res=>{
              // console.log(res);
              Toast("提交成功")
              this.$router.push("/zhangshang_mz_discuss")
          })
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    text-align: center;
    .top{
      height: 43px;
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
    }
    p {
      margin-top: 20px;
      text-align: center;
      font-size: 16px;
      margin-bottom: 20px;
    }
    img {
      width: 95%;
      height: 261px;
      margin: 5px;
    }
    .foot{
      margin: 0 auto;
      font-size: 14px;
      line-height: 40px;
      width: 95%;
      height: 40px;
      position: fixed;
      bottom: 2px;
      right: 0;
      left: 0;
      label{
        margin-right: 20px;
      }
      button{
        background: white;
        color: red;
        border:1px solid red;
        border-radius: 5px;
      }
    }
  }
</style>
