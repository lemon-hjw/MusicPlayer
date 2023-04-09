<template>
  <div class="bg">
    <TopNav class="comp"></TopNav>
    <SwiperTop class="comp"></SwiperTop>
    <IconList class="comp"></IconList>
    <MusicList class="comp"></MusicList>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";
export default {
  name: "Home",
  components: {
    TopNav,
    SwiperTop,
    IconList,
    MusicList,
  },
};
</script>
<style lang="less">
.bg {
  background: url("../assets/bg.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
  // filter: blur(1px);
  // background-color: rgba(0, 0, 0, 1);
  // z-index: -10000;
}
</style>
