<template>
  <div class="all">
    <div class="top"></div>
    <div class="content">
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
      </div>
      <div class="ping">{{list.content}}</div>

    </div>

    <div class="content" v-for="reply in replys" v-if="">
      <div class="he">
        <img :src="reply.header" class="left">
        <div class="mid">
          <p class="username">{{reply.username}}</p>
          <p>
            <img src="../assets/时间.png" style="height: 14px;width: 12px">
            <span>{{reply.createTime}}</span>

            <img src="../assets/声音.png" style="height: 14px;width: 12px">
            <span>公开</span>
          </p>
        </div>

      </div>
      <div class="ping">{{reply.comment}}</div>

    </div>


    <div class="shuju">还没有数据</div>

    <div class="input">
      <input type="text" v-model="comments.comment">
      <button @click="discuss">评论</button>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        list:[
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
        comments:{
          comment:"",
          forumId:"",
          toUserId:""
        },
        replys:[
          {
          comment: "",
          createTime: "",
          header: "",
          updateTime: "",
          user_id: "",
          username: "",
          _id: "",
        }
        ],
        id:"",
      }
    },
    created(){
      this.getlist();
    },
    methods:{
      getlist(){
        this.$axios.get("getlist",
          {id:this.$route.query.id}).then(res=>{
          this.list= res.data[0];
          this.getrevert();
        })
      },
      discuss(){
        this.comments.forumId=this.list._id;
        this.comments.toUserId=this.list.user_id;
        this.$axios.post("revert",this.comments).then(res=>{
          // console.log(res);
          return this.$router.go(0)

        })
      },
      getrevert(){
        this.id = this.list._id
        // console.log(this.id);
        this.$axios.get("getrevert",{id:this.id}).then(res=>{
          // console.log(res.data);
          this.replys = res.data;
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .all{
    width: 100%;
    .shuju{
      font-size: 14px;text-align: center;
      color: #737373;
    }
    .top{
      height: 43px;
      width: 100%;
    }
    .content{
      height: 111px;
      width: 98%;
      margin: 0 auto 15px auto;
      padding: 10px;
      .he{
        position: relative;
        width: 98%;
        margin-top: 10px;
        padding-top: 5px;
        .mid{
          margin-left: 10px;
          .username{
            font-size: 16px;
            margin-bottom: 2px;
          }
          p{
          span{
              margin-left: 12px;
            }
          }
        }
        .left{
          width: 37px;
          height: 37px;
          border-radius: 50%;
        }
        .right{
          position: absolute;
          right: 3px;
          top: 5px;
        }
        img{
          width: 66px;
          height: 26px;
        }

        display: flex;
      }
    }
    .ping{
      width: 100%;
      margin: 10px 0;
      text-align: left;
      font-size: 18px;
    }
    .huifu{
      text-align: right;
      margin: 10px 10px 0 0;
      font-size: 14px;
    }
    .input{
      background: white;
      line-height: 49px;
      text-align: center;
      height: 49px;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0 auto;
      input{
        width: 75%;
        height: 29px;
        border-radius: 5px;
        border: 1px solid #cd0200;
      }
      button{
        margin-left: 10px;
        border: none;
        background: #cd0200;
        color: white;
        height: 32px;
        width: 40px;
        font-size: 12px;
        border-radius: 5px;
      }
    }
  }

</style>
