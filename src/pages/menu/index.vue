<template>
  <div class="menu">
    <swiper/>
    <goods @openDetil="openDetil"/>
    <FoodDetil v-if="showDetil" :goods="currentGoods" @off-it="offDetil"/>
  </div>  
</template>

<script>
import Swiper from './components/Swiper'
import Goods from './components/Goods'
import FoodDetil from './components/FoodDetil'
export default {
  components: {
    Swiper,
    Goods,
    FoodDetil
  },
  methods:{
    openDetil(food, count) {
      this.currentGoods = {
        ...food,
        count
      }
      this.showDetil = true
    },
    offDetil() {
      this.currentGoods = ''
      this.showDetil = false
    }
  },
  data() {
    return {
      currentGoods: '',
      showDetil: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
 height 100%
</style>

