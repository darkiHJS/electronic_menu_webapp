<template>
  <div class="menu">
    <swiper/>
    <goods/>
  </div>  
</template>

<script>
import Swiper from './components/Swiper'
import Goods from './components/Goods'

export default {
  components: {
    Swiper,
    Goods
  },
  mounted() {
  
  }
}
</script>

<style lang="stylus" scoped>
.menu
 height 100%
</style>

