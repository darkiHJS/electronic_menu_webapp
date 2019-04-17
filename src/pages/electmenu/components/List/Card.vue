<template>
  <div class="card">
    <div class="card-img">
      <img :src="goods.imgUrl" alt="">
    </div>
    <div>{{goods.name}}</div>
    <div>{{goods.price}} 元</div>
    <div>+ 数字 -</div>
    <div>点餐</div>
  </div>
</template>

<script>
export default {
  props: ['goods']
}
</script>

<style lang="stylus">
.card
  overflow hidden
  box-sizing border-box
  padding .4rem
  border-radius .3rem
  box-shadow 0 3px 5px pink 
  color #000
  .card-img
    position relative
    overflow hidden
    width 100%
    height 0
    padding-bottom 100%
    img
      position absolute
      top 50%
      transform translateY(-50%)
      width 100%
</style>
