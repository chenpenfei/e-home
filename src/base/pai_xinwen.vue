<template>
  <div class="xw">
    <div id="da">
      <h5></h5>
      <img :src="data.img">
      <p id="q" v-html="data.contentText"></p>
      <div id="w">
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    components:{
    },
    data(){
      return{
        data:[
          {
            author:"",
            content:"",
            contentText:"",
            createTime:"",
            eye:"",
            img:"",
            title:"",
            type:"",
            updateTime:"",
            _id:""
          }
          ]
      }
    },
    created(){
      this.get()
    },
    methods: {
      get() {
        this.$axios.post("getNews",
          {id:this.$route.query.id,type :9}).then(res => {
          // console.log(res.data);
          this.data = res.data.data[0];
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .xw{
    margin-top: 70px;
    width: 100%;
    #da{
      width: 100%;
      margin: 0 auto;
      text-align: center;
    h5{
      font-size: 24px;
      font-weight: normal;
      margin-bottom: 10px;
    }
    #q{
      text-align: center;
      font-size: 15px;
      margin: 15px 0;
    }
    #w{
      font-size: 14px;
      width: 96%;
      line-height: 30px
    }
  }
  }
</style>
