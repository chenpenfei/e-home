<template>
  <div id="app">
    <myheader > </myheader>
    <router-view/>
  </div>
</template>

<script>
  import myheader from '@/base/myheader'
export default {
  name: 'App',
  components:{
    myheader
  },

}
</script>

<style lang="less">
  @import './style/init.css';
*{
  text-decoration: none;
  a:hover{
    text-decoration: none;
  }
}
</style>
