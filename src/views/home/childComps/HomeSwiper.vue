<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img style="width: 100%;" :src="item.image" alt="">
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 180px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
