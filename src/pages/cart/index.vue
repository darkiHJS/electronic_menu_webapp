<template>
  <div class="cart">
    <cart-list/>
    <cart-list/>
  </div>
</template>

<script>
import CartList from './components/CartList'
export default {
  components: {
    CartList
  }
}
</script>

<style lang="stylus">
.cart
  height 100%
  background-color #f8f8f8
</style>
