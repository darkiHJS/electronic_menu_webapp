<template>
  <div class="banner" @click="handleClick">
    <div class="banner-centent">
      <h4 class="title">{{ config.title }}<span class="promotion" v-if="!!config.promotion" >{{ config.promotion }}</span></h4>
      <h4 class="title__sub">{{ config.sub }}</h4>
      <span class="iconfont title__icon" v-html="config.icon"/>
    </div>
  </div> 
</template>

<script>
export default {
  props:['config'],
  methods:{
    handleClick() {
      if(this.config.next) this.$router.push(this.config.next)
    }
  }
}
</script>

<style lang="stylus">
@import '~_styl/config.styl';
.banner
  padding-left .2rem
  padding-right .2rem
  .banner-centent
    position relative
    box-sizing border-box
    height 1.5rem
    border-bottom 1px solid #ddd
    padding .4rem 0
    h4
      padding-left .1rem
    .title
      font-size 16px
      font-weight bold
      margin-bottom .15rem
      .promotion
        display inline-block
        padding .04rem
        font-weight 100
        border-radius .04rem
        margin-left .1rem
        background-color $styleColor
        color #fff
        font-size 12px
    .title__sub
      font-size 10px
      color #ccc 
    .title__icon
      position absolute
      font-size 48px
      font-weight 100
      top 50%
      transform translateY(-50%)
      right 0
</style>
