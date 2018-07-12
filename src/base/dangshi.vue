<template>
  <div class="xw">
    <h2></h2>
    <h4></h4>
    <p v-html="data">
    </p>
    <img src="">
  </div>
</template>

<script>
  export default {
    components:{
    },
    data(){
      return{
        data:{

        }
      }
    },
    created(){
      this.gethistory();
    },
    methods: {
      gethistory() {
        this.$axios.get("history").then(res => {
          // console.log(res.data);
          this.data=res.data
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .xw{
    position: absolute;
    top:44px;
    margin: 10px;
    h4{
      font-size: 20px;
      font-weight: normal;
    }
    h2{
      font-size: 24px;
      font-weight: normal;
      margin-bottom: 10px;
    }
    p{
      font-size: 13px;
      line-height: 28px;
    }
  }
</style>

