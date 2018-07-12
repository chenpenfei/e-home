<template>
  <div>
  <mt-header :title="title" fixed class="myheader">
    <mt-button icon="back" @click="goBack" slot="left"
      v-if="this.$route.path !== '/wode'&&
      this.$route.path !== '/tongzhi'&&
      this.$route.path !== '/index'&&
      this.$route.path !== '/wode_xinxi'&&
      this.$route.path !== '/wode_xinxi_edit'&&
      this.$route.path !== '/zhangshang_sx'&&
      this.$route.path !== '/zhangshang_sx-refer'&&
      this.$route.path !== '/zhangshang_xd'&&
      this.$route.path !== '/zhangshang_xd-refer'&&
      this.$route.path !== '/zhangshang_mz_summary'&&
      this.$route.path !== '/zhangshang_mz_discuss'&&
      this.$route.path !== '/zhangshang_mz_discuss_dis'&&
      this.$route.path !== '/zhangshang_mz_discuss_dis-zj'&&
      this.$route.path !== '/zhangshang_mz'&&
      this.$route.path !== '/zhangshang'">
    </mt-button>
  </mt-header>
  </div>
</template>

<script>
  export default {
    name: "myheader",
    data(){
      return{
        data:[{

        }]
      }
    },
    computed: {
      title() {
        return this.$route.meta.title;
      },

    },
    methods: {
      goBack() {
        return this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>
.myheader{
  z-index: 998;
  background: #c7000a;
  height: 44px;
  width: 100%;
  font-size: 16px;
}
h1{
  margin: 50px;
}
</style>
