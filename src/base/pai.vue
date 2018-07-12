<template>
  <div class="pai">

    <div class="pai-content" >

      <router-link :to="'/pai_xinwen?id='+data._id" v-for="data in datas"
                   :key="data._id">
        <img :src="data.img">
        <p>{{data.title}}</p>
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
        datas:[
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
        this.$axios.post("getNews",{type:9}).then(res => {
          // console.log(res.data.data);
          this.datas = res.data.data;
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .pai{
    width: 100%;
    margin-top: 46px;

    .pai-content{
      display: flex;
      flex-wrap: wrap;

      a{
        text-align: center;
        padding: 10px;
        margin: 0 auto;
        width: 44%;

      img{
        width: 140px;
        height: 133px;
      }
      p{

        margin: 4px auto;
        width: 155px;
      }}
    }

  }
</style>
