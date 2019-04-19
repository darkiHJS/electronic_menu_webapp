<template>
  <div class="swiper">
     <swiper :options="swiperOption" class='swiper-box'>
        <swiper-slide v-for="item of swiperData" :key="item.id">
          <img class="swiper-img" :src="item.url">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperData: [
        {id: '001', url: require('_img/green.jpg')}, 
        {id: '002', url: require('_img/blue.jpg')}, 
        {id: '003', url: require('_img/red.jpg')}, 
      ],
      swiperOption: {
        autoplay: true,
        pagination: {
            el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus">
.swiper
  .swiper-box
    position relative
    width 100%
    height 0
    padding-bottom 66.7%
    border-radius .1rem
    overflow hidden
    .swiper-img
      width 100%
  .swiper-pagination-bullet-active
    background #fff
</style>

