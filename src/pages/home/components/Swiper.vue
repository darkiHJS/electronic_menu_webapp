<template>
  <div class="swiper">
     <swiper :options="swiperOption" class='swiper-box' autoplay autoplay-speed="3000" loop>
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
        {id: '001', url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2514783203,3781447737&fm=26&gp=0.jpg'}, 
        {id: '002', url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3001629862,864860266&fm=11&gp=0.jpg'}, 
        {id: '003', url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1832592474,3883206671&fm=26&gp=0.jpg'}, 
      ],
      swiperOption: {
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
    padding-bottom 33.3%
    border-radius .1rem
    overflow hidden
    .swiper-img
      width 100%
  .swiper-pagination-bullet-active
    background #fff
</style>

