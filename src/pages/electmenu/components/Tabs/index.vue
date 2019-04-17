<template>
  <div>
    <swiper :options="swiperOption" class="list-carousel">
      <swiper-slide v-for="item of goodsTabs" :key="item.sort">
        <classify-card @handle="handleClickCard" :goods="item"/>
      </swiper-slide>
		</swiper>
  </div>
</template>

<script>
import ClassifyCard from './ClassifyCard'

export default {
  props: ['goodsTabs'],
  data() {
    return {
			swiperOption:{
				loop: true,
			}
    }
  },
  components: {
    ClassifyCard
  },
  methods: {
    handleClickCard: function(sort) {
      this.$emit('openDetai', sort)
    }
  }
}
</script>

<style lang="stylus">

</style>
