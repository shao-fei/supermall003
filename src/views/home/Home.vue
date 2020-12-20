<template>
  <div id="home">

    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    我是home
  </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import {getHomeMultidata} from "@/network/home"


  export default {
    name: 'home',
    components: {
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        //console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })

      //getH()
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #F6F6F6;
  }

  .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }

</style>
