<template>
  <div class="detil">
    <div v-if="goods" class="detil-foodinfo">
      <div class="foodinfo-img">
        <img :src="goods.imgUrl" />
      </div>
      <div class="foodinfo-brief">
        <h3>商品详情</h3>
        <p v-html="goods.brief"></p>
      </div>
      <div class="price-info">
        <p class="price">￥<strong>{{ goods.price }}</strong></p>
        <p class="counter">
          <button @click="handleBtnClick(false)" class="iconfont btn off">&#xe712;</button>
          {{ goods.count }}
          <button @click="handleBtnClick(true)" class="iconfont btn add">&#xe6e0;</button>
        </p>
        <button @click="handleToCartClick" class="down-order">加入购物车</button>
      </div>
      <button @click="handleClickOffit" class="iconfont btn btn-off">&#xe740;</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['goods'],
  name: 'FoodDetil',
  methods: {
    handleClickOffit() {
      this.$emit('off-it')
    },
    handleBtnClick(add){
      add ? this.goods.count ++ : this.goods.count --
      if (this.goods.count <= 0) {
        this.$createDialog({
            type: 'confirm', 
            content: '真的不要了吗?',
            onConfirm: () => {
              this.removeCartCount({ id: this.goods.id })
              this.$emit('off-it')
            },
            onCancel: () => {
              this.goods.count = 1
            }
          }).show()
      }
      this.changeCartCount({id: this.goods.id, count: this.goods.count})
    },
    handleToCartClick(){
      this.pushCartCount({
        ...this.goods
      })
      this.$createToast({txt: '加入了购物车', type: 'correct'}).show()
      setTimeout(() => this.$emit('off-it'), 500);
    },
    ...mapMutations('cart', ['changeCartCount', 'removeCartCount', 'pushCartCount'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~_styl/config.styl';
.detil
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  z-index 1
  padding 2.4rem .8rem
  background-color rgba(0,0,0,.3)
  .btn
    background rgba(0,0,0,0)
    &.btn-off
      position absolute
      top 0
      right .1rem
      font-size 24px
  .detil-foodinfo
    position relative
    background-color #fff
    width auto 
    height 9rem
    padding 0 .24rem
    border-radius .2rem
    overflow hidden
    .foodinfo-img
      width 100%
      height 3rem
      text-align center
      img 
        height 100%
    .foodinfo-brief
      line-height 18px
      h3
        margin-bottom .1rem
        font-weight bold
    .price-info
      position absolute
      width calc(100% - .5rem)
      bottom .2rem
      .price
        position relative
        top -.4rem
        strong
          font-weight bold
          font-size 24px
      .counter
        position absolute
        top -.5rem
        right 0
        .btn
          color $textColor
          font-size 24px
          &.off
            margin-right .2rem
          &.add
            margin-left .2rem
      .down-order
        display block
        width 100%
        color #fff
        height .6rem
        border-radius .1rem
        background $textColor
</style>
