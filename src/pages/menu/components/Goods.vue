<template>
  <div class="goods">
    <div class="scroll-nav-wrapper" v-if="goods && goodsList"> 
      <cube-scroll-nav
        :side="true"
        :data="goods"
        >
        <template v-for="item in goods">
         <cube-scroll-nav-panel
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul>
            <food-item v-for="food in goodsList[item.sort].goods" :key="food.id" :food="food"/>
          </ul>  
        </cube-scroll-nav-panel>
        </template>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
import api from '_http/api'
import FoodItem from './FoodItem'
export default {
  components: {
    FoodItem
  },
  data(){
    return {
      goods: false,
      goodsList: false
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
@import '~_styl/config.styl';
.goods
  position relative
  text-align left
  height: 80vh
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
    font-size: 14px
    background: #f7f7f7
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
    background: #fff
    color: #ccc
  >>> .cube-scroll-nav-panel-title
    padding-left: 14px
    height: 26px
    line-height: 26px
    border-left: 2px solid $textColor
    font-size: 14px
    color: #ccc
    background: #fff
</style>
