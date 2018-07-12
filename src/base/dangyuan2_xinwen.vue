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
          {id:this.$route.query.id,type :3}).then(res => {
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
      letter-spacing:1px;
      text-indent: 2rem;
      width: 100%;
      font-size: 16px;
      line-height: 30px;
    }
  }
  #da{
    width: 95%;
    margin: 0 auto;
  }
</style>
