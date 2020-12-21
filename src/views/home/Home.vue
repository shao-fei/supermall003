<template>
  <div id="home">

    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommend-viwe :recommends="recommends"> </home-recommend-viwe>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>
    <good-list :goods = "goods['pop'].list"/>
 </div>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import TabControl from '@/components/content/tabControl/TabControl.vue'
  import GoodList from '@/components/content/goods/GoodsList.vue'

  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommendViwe from './childComps/HomeRecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'


  import { getHomeMultidata, getHomeGoods } from "@/network/home"





  export default {
    name: 'home',
    components: {
      NavBar,
      TabControl,
      GoodList,

      HomeSwiper,
      HomeRecommendViwe,
      FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    created() {
      //1,请求幻灯片及下面信息
      this.getMHomeMultidata()

      //2，请求流行，新款，精选信息
      this.getMHomeGoods('pop')
      this.getMHomeGoods('new')
      this.getMHomeGoods('sell')


    },
    methods: {
      getMHomeMultidata(){
        getHomeMultidata().then(res => {
          //console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getMHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list)//把得到的数组逐个依次压进所属数组
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #F6F6F6;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    background-color: #FFFFFF;
  }


</style>
