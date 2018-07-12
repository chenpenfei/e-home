<template>
<div class="map-wrap ">
  <div id="map"></div>



</div>
</template>

<script>
    export default {
        name: "zhanghsang_ld",
      data(){
          return{
            map:null
          }
      },
      methods:{
          initMap(){
            var map = new BMap.Map('map');
            map.centerAndZoom( new BMap.Point(110.224003, 25.074537),15);
            var marker = new BMap.Marker(new BMap.Point(110.224003, 25.074537));
            map.addOverlay(marker);//标记点
            var top_right_navigation = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,
              type:BMAP_NAVIGATION_CONTROL_ZOOM,offset:new BMap.Size(20,60)});

            var label = new BMap.Label("标注",{offset:new BMap.Size(20,20)});
            marker.setLabel(label)//标注文本

            var geolocationControl = new BMap.GeolocationControl();
            map.addControl(geolocationControl);
            map.addControl(top_right_navigation);
          }
      },
      created(){
          this.$nextTick(()=>{
            this.initMap();
          });
      }
    }
</script>

<style scoped>
html {
  height: 100%;}
body{
  height: 100%;margin: 0px;padding: 0px}

 .map-wrap{
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   height: 100%;
   width: 100%;
 }
  #map{
    height: 100%;
    width: 100%;
  }
</style>
