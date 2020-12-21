<template>

  <div class="goodsitem">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="">
      <div>
        <p class="item_title">{{strTitle}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="cfav">收藏 {{goodsItem.cfav}}</span>
      </div>
    </a>

  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {

    },
    computed: {
      strTitle() {
        return this.goodsItem.title.substring(0, 24) + '...'
      }
    }
  }
</script>

<style scoped>
  .goodsitem {
    float: left;
    width: 50%;
    padding: 20px 10px;
  }

  .goodsitem  img{
    width: 100%;
    height: 245px;
  }

  .price {
    background-color: var(--color-tint);
    padding: 2px;
    font-size: 12px;
  }

  .cfav {
    margin-left: 10px;
    color: var(--color-tint);
    padding: 2px;
    font-size: 12px;

  }

  .item_title {
    font-size: 14px;
  }
</style>
