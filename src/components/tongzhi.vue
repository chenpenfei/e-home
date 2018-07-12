<template>
  <div class="tongzhi">
    <router-link :to="'/tongzhi_xinwen?id='+data._id " class="xinwen" v-for="data in datas"
                 :key="data._id">
      <div class="xinwen-tu">
        <img :src="data.img">
      </div>
      <div class="xinwen-neirong" >
        <p class="xinwen-zi">{{data.title}}</p>
        <div class="xinwen-shijian">
          <span id="q">{{data.createTime}}</span>
          <div id="z">
            <span id="m"><img src="../assets/12-eye.png"></span>
            <span id="w">{{data.eye}}</span>
          </div>
        </div>
      </div>
    </router-link>

    <div id="foot">
      <p>没有数据了</p>
    </div>

    <tab></tab>
  </div>
</template>

<script>
  import tab from '../base/tab'
  export default {
    components:{
      tab
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
        this.$axios.post("getNews",{type:8}).then(res => {
          // console.log(res.data.data);
          this.datas = res.data.data;
        })
      }
    }
  }
</script>

<style scoped lang="less">
  * a{
    text-decoration: none;
  }
  .tongzhi{
    width: 100%;
    margin-top: 45px;
  .content{
    height: 43px;}
  .xinwen{
    display: flex;
    height: 101px;
    width: 100%;
    justify-content: space-around;
    border-bottom:1px solid #d8d8d8;
    .xinwen-tu {
      flex: 1;
      margin: auto 8px auto 8px;
      height: 78px;
      width: 78px;
    }
    .xinwen-tu img{
      height: 80px;
      width: 80px;
    }
    .xinwen-neirong{
      flex: 3.7;
      display: flex;
      flex-direction: column;
      margin: 10px 5px 0 5px;
      position: relative;
      p{
        font-size: 16px;
      }
      .xinwen-zi{
        width: 95%;
      }
      .xinwen-shijian{
        display: flex;
        position: absolute;
        bottom: 12px;
        display: flex;
        height: 13px;
        width: 95%;
        justify-content: space-between;
         #q{
        flex: 4;
         }
        #z{
          flex: 1;
          #w{
            margin-left: 2px;
          }
        }

      }
    }
  }
#foot{
  padding: 10px 0;
  color: #666;
  text-align: center;
  font-size: 14px;
}}
</style>
