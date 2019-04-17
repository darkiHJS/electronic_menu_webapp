<template>
    <div class="classify-card">
      <div class="card-body">
        <img :src="goods.imgUrl" class="classify-card-img">
        <div class="classify-card-info">
          <h3 class="card-info__name">{{ goods.title }}</h3>
          <p class="card-info__rich">
            {{ goods.description }}
          </p>
          <button @click="handleClickTank(goods.sort)" class="card-info__tips">
            按"F"进入坦克
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['goods'],
  methods: {
    handleClickTank: function(sort){
      this.$emit('handle',sort)
    }
  }
}
</script>

<style lang="stylus">
.classify-card
  width 100vw
  padding 1rem .5rem 0 .5rem 
  .card-body
    padding .3rem 1rem
    background-color #fff
    width calc(100% - 3rem)
    border-radius .2rem
    box-shadow 0 2px 8px #ddd
    .classify-card-img
      box-sizing border-box
      width 100%
      padding 0 .3rem
    .classify-card-info
      color: #fab1a0
      text-align center
      .card-info__name
        font-size .5rem
        font-weight 500
        margin-top 1rem
      .card-info__rich
        margin-top .8rem
        font-size 15px
      .card-info__tips
        margin-top 1rem
        color #aaa
</style>
