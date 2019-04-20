<template>
  <div class="food-item">
    <div class="icon">
      <img :src="food.imgUrl">
    </div>
    <div class="content">
      <h3 class="name">{{food.name}}</h3>
      <h4 class="en-name">{{food.enName}}</h4>
      <p class="price">￥<span class="price-strong">{{food.price}}</span></p>
      <button class="iconfont btn btn-add">&#xe6e0;</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['food']
}
</script>

<style lang="stylus" scoped>
@import '~_styl/config.styl';
.food-item
  padding .36rem
  display flex
  position relative
  .icon
    width 90px
    height 90px
    img
      width 100%
  .content
    flex 1
    padding-top .2rem
    padding-left .3rem
    .name
      font-size 15px
      font-weight bold
      margin-bottom .1rem
    .en-name
      color #ccc
      font-size 10px
    .price
      position absolute
      bottom .5rem
      .price-strong
        font-size 16px
        font-weight bold
    .btn
      background rgba(0,0,0,0)
    .btn-add
      position absolute 
      right .36rem
      bottom .36rem
      color $textColor
      font-size 24px
</style>

