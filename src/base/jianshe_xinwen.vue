<template>
  <div class="xw">
    <div id="da">
      <h5>{{data.title}}</h5>
      <p id="q">{{data.author}}</p>
      <div id="w" v-html="data.content">
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
        data:
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

      }
    },
    created(){
      this.get()
    },
    methods: {
      get() {
        this.$axios.post("getNews",
          {id:this.$route.query.id,type :5}).then(res => {
          // console.log(res.data);
          this.data = res.data.data[0];
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .xw{
    margin-top: 48px;
    width: 100%;
    h5{
      font-size: 24px;
      font-weight: normal;
      margin-bottom: 10px;
    }
    #q{
      margin-bottom: 10px;
    }
    #w{
      color: #777777;
      text-indent: 2rem;
      letter-spacing:1px;
      font-size: 14px;
      width: 100%;
      line-height: 30px;

    }
  }
  #da{
    width: 96%;
    margin: 0 auto;
  }
</style>
