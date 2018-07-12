<template>
<div class="item">
  <p>请选择支付方式</p>

  <div class="item1" @click="wxClick">
    <img src="../assets/weixin.png">
    <span>微信</span>
    <span id="you">
      <img src="../assets/右箭头.png">
    </span>
  </div>

  <div class="item1" @click="zfbClick">
    <img src="../assets/zhifubao.png" style="height: 44px;width: 44px;margin-left: 10px">
    <span>支付宝</span>
    <span id="you"><img src="../assets/右箭头.png"></span>
  </div>


  <mt-popup class="wx"
    v-model="popupVisible"
    position="middle">
    <p>微信支付</p>
    <img src="../assets/wx.png">
  </mt-popup>

  <mt-popup class="zfb"
            v-model="zfb"
            position="middle">
    <p>支付宝支付</p>
    <img src="../assets/zfb.jpg">
  </mt-popup>
</div>
</template>

<script>
  import { Popup } from 'mint-ui';
  export default {
    data(){
      return {
        popupVisible:false,
        zfb:false,
        }
      },
    created(){
    },
    methods:{
      wxClick: function() {
        this.popupVisible = true
      },
      zfbClick: function() {
        this.zfb = true
      },
    }
  }
</script>

<style scoped lang="less">
.item{
  margin-top: 43px;
  .zfb{
    text-align: center;
    img{
      width: 300px;
      height: 300px;
    }
  }
  .wx{
    text-align: center;
    img{
      width: 300px;
      height: 300px;
    }
  }
  p{
    margin-left: 10px;
    height: 34px;
    line-height: 50px;
    font-size: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #E8E8E8;
  }
  .item1{
    font-size: 16px;
    height: 62px;
    line-height: 62px;
    border-bottom: 1px solid #E8E8E8;
    position: relative;
    img{
      height: 44px;
      width: 44px;
      margin-left: 10px
    }
    #you{
      position: absolute;
      right: 20px;
      img{height: 14px;
      width: 14px}
    }
  }
}

</style>
