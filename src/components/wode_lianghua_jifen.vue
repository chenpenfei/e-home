<template>
<div>
  <div class="top"></div>
  <div class="rank" v-for="data in datas">

    <div id="small">
      <p id="login">{{data.scoreName}}</p>
      <p id="time"> <span>{{data.updateTime}}</span></p>
    </div>
    <div id="rank">{{data.score}}</div>

  </div>
</div>
</template>

<script>
  export default {
    components:{
    },
    data(){
      return{
        datas:[
          {
            createTime: "",
            score: "",
            scoreName: "",
            type: "",
            updateTime: "",
            user_id: "",
            username: "",
            _id: ""
          }
        ]
      }
    },
    created(){
      this.getscore()
    },
    methods: {
      getscore() {
        this.$axios.get("getscore").then(res => {
          // console.log(res.data);
          this.datas = res.data;
        })
      }
    }
  }
</script>


<style scoped lang="less">
  .top{
    width: 100%;
    height: 43px;
  }
  .rank{
    display: flex;
    align-content: space-around;
    width: 100%;
    height: 79px;
    border-bottom: 1px  solid #d8d8d8;
    #small{
      flex: 12;
      padding: 20px;
      #login{
        font-size: 18px;
        padding-bottom: 5px;
      }
      #time{
        font-size: 12px;
      }
    }
    #rank{
      flex: 1;
      padding: 15px;
      line-height: 25px;
      font-size: 16px;
      color: red;
    }
  }
</style>
