<template>
<div class="content">
  <h3>{{swipes.title}}</h3>
  <img :src="swipes.pic">
  <p v-on:swipes.url></p>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      swipes:
        {
          createTime: "",
          updateTime: "",
          _id: "",
          pic: "",
          title: "",
          url: "",
        },
    }
  },
  created() {
    this.swipe();
  },
  methods: {
    swipe() {
      this.$axios.get("getswipe",
        {id:this.$route.query.id}).then(res => {
        // console.log(res.data);
        this.swipes = res.data[0];
        // console.log(this.swipes.url);
      })
    },
  }
}
</script>

<style scoped lang="less">
.content{
  margin-top: 60px;
  h3{
    width: 95%;
    margin: 0 auto;
    font-size: 25px
  }
  p{font-size: 18px;
    line-height: 18px;
    margin: 0 10px;
    text-indent: 2rem;
  }
  img{
    width: 95%;
    height: 211px;
    margin: 10px;
  }
}
</style>
