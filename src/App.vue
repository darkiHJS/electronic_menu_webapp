<template>
  <div id="app">
    <shop-info/>
    <div class="main">
      <keep-alive> <!-- 组件缓存 -->
        <router-view/>
      </keep-alive>
    </div>
    <footerbar/>
  </div>
</template>

<script>
import ShopInfo from './components/ShopInfo'
import Footerbar from './components/Footer'
export default {
  name: 'app',
  components: {
    ShopInfo,
    Footerbar
  }
}
</script>

<style lang="stylus">
@import '~_styl/config.styl';
#app 
  height 100%
.main
  height calc(100% - 100px)
  overflow hidden
</style>
