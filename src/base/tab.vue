<template>
  <div class="foot">
    <div class="footer">
        <router-link to="/index">
          <img src="../assets/党_red.png" v-if="$route.path =='/index'">
          <img src="../assets/党_grey.png" v-else="$route.path =='/index'">
          <p>首页</p>
        </router-link>

        <router-link to="/tongzhi">
          <img src="../assets/消息_red.png" v-if="$route.path =='/tongzhi'">
          <img src="../assets/消息_grey.png" v-else="$route.path =='/tongzhi'">
          <p>通知早知道</p>
        </router-link>

        <router-link to="/wode">
          <img src="../assets/会员_red.png" v-if="$route.path =='/wode'">
          <img src="../assets/会员_grey.png" v-else="$route.path =='/wode'">
          <p>我的党建</p>
        </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: "tab"
  }
</script>
<style scoped >
  .foot{
    width: 100%;
    left: 0px;
    height: 46px;
   }
  .footer {
    display: flex;
    padding-bottom: 4px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 15px;
    height: 46px;
    background: #fff;
    text-align: center;
    flex: 1;

  }
.footer  img{
  height: 24px;
  width: 24px;
}
.footer a{
  flex: 1;
  padding-top: 4px;
  text-decoration: none;
}
a.router-link-active{
  border-top: 2px solid red;
  color: red;
}
</style>
