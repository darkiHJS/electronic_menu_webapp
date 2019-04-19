<template>
  <div class="menu">
    <swiper/>
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
        :side="true"
        :data="goods"
        v-if="goods.length && goodsList[1].goods.length"
        >
        <template v-for="item in goods">
         <cube-scroll-nav-panel
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul>
            <li v-for="food in goodsList[item.sort].goods" :key="food.id">
              {{food.name}}
            </li>
          </ul>  
        </cube-scroll-nav-panel>
        </template>
       
      </cube-scroll-nav>
    </div>
  </div>  
</template>

<script>
import Swiper from './components/Swiper'
import api from '_http/api'

export default {
  components: {
    Swiper
  },
  data(){
    return {
      goods: '',
      goodsList: ''
    }
  },
  mounted() {
    api.getData('goods').then(d => {
      this.goods = d.data.data
    })
    api.getData('goods/all').then(d => {
      this.goodsList = d.data.data
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "~cube-ui/src/common/stylus/mixin.styl"
@import "~cube-ui/src/common/stylus/variable.styl"
.menu
    position: relative
    text-align: left
    height: 100%
  .scroll-nav-wrapper
    position: absolute
    width: 100%
    top: 0
    left: 0
    bottom: 48px
  >>> .cube-scroll-nav-bar
    width: 80px
    white-space: normal
    overflow: hidden
  >>> .cube-scroll-nav-bar-item
    padding: 0 10px
    display: flex
    align-items: center
    height: 56px
    line-height: 14px
    font-size: $fontsize-small
    background: $color-background-ssss
    .text
      flex: 1
      position: relative
    .num
      position: absolute
      right: -8px
      top: -10px
    .support-ico
      display: inline-block
      vertical-align: top
      margin-right: 4px
  >>> .cube-scroll-nav-bar-item_active
    background: $color-white
    color: $color-dark-grey
  >>> .cube-scroll-nav-panel-title
    padding-left: 14px
    height: 26px
    line-height: 26px
    border-left: 2px solid $color-col-line
    font-size: $fontsize-small
    color: $color-grey
    background: $color-background-ssss
  .food-item
    display: flex
    margin: 18px
    padding-bottom: 18px
    position: relative
    &:last-child
      border-none()
      margin-bottom: 0
    .icon
      flex: 0 0 57px
      margin-right: 10px
      img
        height: auto
      .content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: $fontsize-medium
          color: $color-dark-grey
        .desc, .extra
          line-height: 10px
          font-size: $fontsize-small-s
          color: $color-light-grey
        .desc
          line-height: 12px
          margin-bottom: 8px
        .extra
          .count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: $fontsize-medium
            color: $color-red
          .old
            text-decoration: line-through
            font-size: $fontsize-small-s
            color: $color-light-grey
      .cart-control-wrapper
        position: absolute
        right: 0
        bottom: 12px
    .shop-cart-wrapper
      position: absolute
      left: 0
      bottom: 0
      z-index: 50
      width: 100%
      height: 48px  
</style>

