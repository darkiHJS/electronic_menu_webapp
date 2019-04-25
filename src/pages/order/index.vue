<template>
  <div class="order">
    <div class="no-order" v-if="true">
      没有订单你可以<br/><br/>
      <router-link to="menu">现在下单</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.order
  position relative
  height 100%
  background-color #f8f8f8
  .no-order
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    text-align center
</style>
