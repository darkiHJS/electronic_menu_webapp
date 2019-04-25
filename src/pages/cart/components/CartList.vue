<template>
  <div class="cart-list">
    <p class="goods-name">{{ food.name }}</p>
    <p class="goods-info">{{ food.spec }}</p>
    <p class="goods-price">￥<span class="strong">{{ food.price }}</span></p>
    <p class="goods-number">
      <button class="iconfont off" @click="handleBtnClick(false)">&#xe712;</button>
      {{ food.count }}
      <button class="iconfont add" @click="handleBtnClick(true)">&#xe6e0;</button>
    </p>
    <span class="iconfont cart-list_icon">&#xe77d;</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['food'],
  methods: {
    handleBtnClick(add){
      add ? this.food.count ++ : this.food.count --
      if (this.food.count <= 0) {
        this.$createDialog({
            type: 'confirm', 
            content: '真的不要了吗?',
            onConfirm: () => {
              this.removeCartCount({ id: this.food.id })
              this.$emit('off-it')
            },
            onCancel: () => {
              this.food.count = 1
            }
          }).show()
      }
      this.changeCartCount({id: this.food.id, count: this.food.count})
    },
    ...mapMutations('cart', ['changeCartCount', 'removeCartCount'])
  }
  
}
</script>

<style lang="stylus">
@import '~_styl/config.styl';
.cart-list
  position relative
  box-sizing border-box
  margin-left 1.2rem
  padding .4rem .2rem
  &~.cart-list
    border-top 1px solid #eee
  .goods-name
    font-size 18px
    font-weight bold
  .goods-info
    margin-top .1rem
    font-size 12px
  .goods-price
    font-size 10px
    margin-top .2rem
    font-weight bold    
    .strong
      font-size 16px
  .goods-number
    position absolute
    right .28rem
    bottom .2rem
    font-size 18px
    .add,.off
      background-color rgba(0,0,0,0)
      color $textColor
      font-size 24px
    .add
      margin-left .2rem
    .off
      margin-right .2rem 
  .cart-list_icon
    position absolute
    top 50%
    transform translateY(-50%)
    left -.7rem
    font-size 24px
    color $textColor
</style>
