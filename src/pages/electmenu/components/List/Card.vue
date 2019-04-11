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
  data() {
    return {
      goods: {
        imgUrl: 'http://qcloud.dpfile.com/pc/jaiLvB3rlLUSYkD-FLVfeJD22lDumnC2RT1Yp2K1uOhgtOtqc64tQgL2KqiKoY-8joJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg', 
        name: '爱斯基汲汲',
        price: 300,
        buy: 0
      }
    }
  }
}
</script>

<style lang="stylus">
.card
  overflow hidden
  border-radius .3rem
  box-shadow 0 3px 5px pink 
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
