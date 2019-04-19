<template>
  <div class="swiper">
     <swiper class='swiper-box'>
        <swiper-slide v-for="item of swiperData" :key="item.id">
          <img class="swiper-img" :src="item.url">
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperData: [
        {id: '001', url: require('_img/banner2.jpg')}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  .swiper-box
    position relative
    width 100%
    height 0
    padding-bottom 32%
    border-radius 0
    overflow hidden
    .swiper-img
      width 100%
  .swiper-pagination-bullet-active
    background #fff
</style>

