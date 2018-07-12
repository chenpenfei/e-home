<template>
<div class="all">
  <div class="top"></div>

  <div class="content" v-for="list in lists" v-lazy="list">
    <div class="he">

      <img :src="list.header" class="left">

      <div class="mid">
        <p class="username">{{list.username}}</p>
        <p>
          <img src="../assets/时间.png" style="height: 14px;width: 12px">
          <span>{{list.createTime}}</span>

          <img src="../assets/声音.png" style="height: 14px;width: 12px">
          <span>公开</span>
        </p>
      </div>

      <img src="../assets/党员互动icon.png" class="right">
    </div>

    <div class="ping">{{list.content}}</div>

    <div class="huifu">
      <router-link :to="'/dangyuan1_huifu?id='+list._id" >回复</router-link>
    </div>
    <div class="add" @click="isshow">
      <i class="iconfont icon-jiahao2"></i>
    </div>
  </div>
  <form  class="form" v-if="show">
    <textarea class="put" v-model="content"></textarea>
    <input type="button" value="发布" class="push" @click="addrevert">
    <input data-v-04bd02fb="" type="button" value="取消" class="cancle" @click="notshow">
  </form>
</div>
</template>

<script>
  import { Lazyload } from 'mint-ui';
  import { Toast } from 'mint-ui';
    export default {
        name: "dangyuan",
    data(){
      return{
        lists:[
          {
            content: "",
            createTime: "",
            header: "",
            updateTime: "",
            user_id: "",
            username: "",
            _id: "",
        }
        ],
       content:"",
      show:false
      }
    },
    created(){
      this.getlist();
    },
    methods:{
      isshow(){
        this.show=true;
      },
      notshow(){
        this.show=false;
      },
      getlist(){
        this.$axios.get("getlist").then(res=>{
          // console.log(res.data);
          this.lists= res.data
        })
      },
      addrevert(){
        this.$axios.post("addrevert",{content:this.content}).then(res=>{
          console.log(res.data);
          if(res.data.code==200){
            this.show=false;
            Toast("发布成功")
          }
          return this.$router.go(0)
          // this.$axios.get("getlist").then(res=>{
          //   // console.log(res.data);
          //   this.lists= res.data
          //
          // })

         })
      }
    }
  }
</script>

<style scoped lang="less">
.all{
  width: 100%;
  .top{
    height: 43px;
    width: 100%;
  }
  .content{
    height: 131px;
    width: 93%;
    margin: 0 auto 10px auto;
    padding: 10px 15px;
    border-bottom: 10px solid #e0e0e0;
    .he{
      position: relative;
      width: 95%;
      margin-top: 10px;
      padding-top: 5px;
      .ping{
        width: 98%;
      }
    .mid{
      font-size: 12px;
      margin-left: 5px;
      .username{
        font-size: 12px;
        margin-bottom: 2px;
      }
      p{
        span{
          margin-left: 3px;
        }
      }
    }
    .left{
      width: 37px;
      height: 37px;
      border-radius: 50%;
    }
    .right{
      width: 55px;
      height:20px;
      position: absolute;
      right: 0;
      top: 5px;

    }

      display: flex;
    }
    .ping{
      width: 100%;
      margin: 15px 0;
      text-align: left;
      font-size: 16px;
    }
    .huifu{
      width: 95%;
      text-align: right;
      margin: 10px 10px 0 0;
      font-size: 12px;
    }
  }
  .add{
    position: fixed;
    right: 15px;
    bottom: 70px;
    i{
      border-radius: 50%;
      background: white;
      color: red;
      font-size: 50px;
    }
  }
  .form{
    background: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 200px;
    .put{
      font-size: 18px;
      padding-top: 20px;
      width: 100%;
      border: none;
      position: absolute;
      bottom: 40px;
      height: 150px;
    }
    .push{
      border-radius: 5px;
      padding: 6px;
      color: white;
      background: red;
      border: none;
      position: absolute;
      bottom: 10px;
      left:10px;
    }
    .cancle{
      padding: 6px;
      border: none;
      position: absolute;
      bottom: 10px;
      right: 20px;
    }
  }
}

</style>
