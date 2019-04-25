<template>
  <div class="footer">
    <router-link to="/" class="btn footer-btn"><i class="iconfont">&#xe747;</i>首页</router-link>
    <router-link to="/menu" class="btn footer-btn"><i class="iconfont">&#xe764;</i>菜单</router-link>
    <router-link to="/cart" class="btn footer-btn"><i class="iconfont">&#xe888;</i>购物车</router-link>
    <router-link to="/order" class="btn footer-btn"><i class="iconfont">&#xe713;</i>订单</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
@import '~_styl/config.styl';
.footer
  display flex
  justify-content space-around
  padding-top 4px
  .btn
    color $textColor
    background-color rgba(0,0,0,0)
    text-align center
    i
      display block
      width 100%
      font-size 28px
      line-height 32px
</style>
