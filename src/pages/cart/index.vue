<template>
  <div class="cart">
    <template v-if="cart.length">
      <div class="cart-order">
        <cube-scroll ref="scroll" :data="cart">
          <cart-list v-for="food of cart" :key="food.id" :food="food"/>
        </cube-scroll>
      </div>
      <div class="total">
        <p class="total-view">
          应付合计 <span class="strong">￥ {{ this.addUp }}</span>
          <button class="btn btn-settle" @click="handleBtnClear">去结算</button>
        </p>
      </div>
    </template>
    <div class="no-order" v-else>
      没有购物车商品你可以<br/><br/>
      <router-link to="menu">现在下单</router-link>
    </div>
  </div>
</template>

<script>
import CartList from './components/CartList'
export default {
  name: 'cart',
  components: {
    CartList
  },
  methods:{
    handleBtnClear() {
      this.$createDialog({
        type: 'alert',
        content: '需要支付' + this.addUp + '元',
        onConfirm: () => { this.$store.commit('cart/clearCartCount') }
      }).show()
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart.cart // 这里用list比较语义化
    },
    addUp() {
      let acc = 0
      for (let i = 0; i < this.cart.length; i++) {
        acc += this.cart[i].price * this.cart[i].count
      }
      return acc
    }
  }
}
</script>

<style lang="stylus">
@import '~_styl/config.styl';
.cart
  position relative
  height 100%
  background-color #f8f8f8
  .cart-order
    position absolute
    width 100%
    top 0
    bottom .5rem
.total
  position absolute
  width 100%
  height 1rem
  bottom 0
  z-index 999
  .total-view
    line-height 1rem
    padding-left .4rem
    font-size 18px
    background-color #fff
    .strong
      font-size 24px
      font-weight bold
      padding-left .2rem
    .btn
      background-color rgba(0,0,0,0)
    .btn-settle
      position absolute
      width 2.6rem
      height 100%
      color #fff
      background-color $styleColor
      right 0
.no-order
  position absolute
  width 100%
  top 50%
  transform translateY(-50%)
  text-align center

</style>
