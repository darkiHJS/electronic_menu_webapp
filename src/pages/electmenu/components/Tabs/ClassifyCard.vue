<template>
    <div class="classify-card">
      <img :src="src" class="classify-card-img">
      <div class="classify-card-info">
        <h3 class="card-info__name">风味炸物</h3>
        <p class="card-info__rich">
          油炸食品因其酥脆可口、香气扑鼻，能增进食欲，深受许多成人和儿童的喜爱，但经常食用油炸食品对身体健康却极为不利。
        </p>
        <p class="card-info__tips">
          按"F"进入坦克
        </p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['src']
}
</script>

<style lang="stylus">
.classify-card
  background-color #fff
  position relative
  border-radius .2rem
  top 1rem
  box-shadow: 1px 2px 8px #bbb;
  color #fab1a0
  .classify-card-img
    position relative
    border-radius .2rem 
    top 0
    left 0
    right 0
    width 100%
  .classify-card-info
    padding .4rem 0
    text-align center
    .card-info__name
      font-size 24px
      font-weight bold
      padding-bottom .5rem
    .card-info__rich
      padding 0 .6rem
      padding-bottom 1rem
    .card-info__tips
      position absolute
      bottom .3rem
      left 50%
      transform translateX(-50%)
      color: #999
</style>
