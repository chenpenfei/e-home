<template>
<div class="content">
  <div class="tou">
    <div class="tou-left">
      <img src="../assets/01.png">
      <span v-show="sh" @click="btn">登录</span>
    </div>
  </div>
  <div class="swipe">
      <mt-swipe :auto="5000">
        <mt-swipe-item v-for="swipe in swipes" :key="swipe._id" >
          <router-link :to="'/suishi?id='+swipe._id ">
            <div class="wrap">
              <img :src="swipe.pic">
              <div class="desc">
                <p>{{swipe.title}}</p>
              </div>
            </div>
          </router-link>
        </mt-swipe-item>

      </mt-swipe>
  </div>

  <div class="se-bg" >
    <div class="se-top">
      <router-link to="/xingong" class="se-bottom">
        <img src="../assets/icon_01.png" >
        <p>信工新闻眼</p>
      </router-link>
      <router-link to="/zhangshang" class="se-bottom">
        <img src="../assets/icon_03.png" >
        <p>掌上组织生活</p>
      </router-link>
      <div class="se-bottom" @click="btninfo">
        <img src="../assets/icon_05.png" >
        <p>党员云互动</p>
      </div>
    </div>
    <div class="se-top">
      <router-link to="/dangjian" class="se-bottom">
      <img src="../assets/icon_04.png" >
      <p>党建一点通</p>
      </router-link>
      <router-link to="/dangyuan2" class="se-bottom">
      <img src="../assets/icon_06.png" >
      <p>党员亮身份</p>
      </router-link>
      <router-link to="/dangshi" class="se-bottom">
      <img src="../assets/icon_02.png" >
      <p>党史上的今天</p>
      </router-link>
    </div>
  </div>

  <div class="tu">
    <img src="../assets/banner02.png" >
  </div>

  <div class="foot">
    <div class="foot-left">
    </div>
    <div class="foot-right">
      <div class="row">
        <router-link to = 'xue'></router-link>
        <router-link to = 'pai'></router-link>
      </div>
      <div class="row">
        <router-link to = 'jianshe'></router-link>
        <router-link to = 'huodong'></router-link>
      </div>
    </div>
  </div>
  <tab></tab>
</div>
</template>

<script>
import tab from '../base/tab'
export default {
  name: 'index',
  components:{
  tab
  },
  data() {
      return{
        sh:"",
        swipes:[
          {
            createTime:"",
            updateTime:"",
            _id:"",
            pic:"",
            title:"",
            url:"",
          }
        ]
      }
    },
  created(){
    this.show();
    this.swipe();
},
  methods:{
    btn(){
      this.$router.push({path:"/login",query:{mark:"wode"}})
    },
    show(){
      this.$axios.post("getInfo").then(res=>{
        // console.log(res);
        if(res.data.code == 401 ){
          this.sh =true
        }
      })
    },
    swipe(){
      this.$axios.get("getswipe").then(res=>{
        // console.log(res.data);
        this.swipes = res.data;
      })
    },
    btninfo(){
      this.$axios.post("getInfo").then(res=>{
        if(res.data.code==200){
          this.$router.push({path:"/dangyuan1"})
        }else{
          this.$router.push({path:"/login",query:{mark:"index"}})
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/index.css";
</style>
