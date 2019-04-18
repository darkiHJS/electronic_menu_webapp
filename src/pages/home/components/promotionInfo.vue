<template>
  <div class="promotion-info" :style="{'background-image': 'url(' + bgImg + ')'}">
  </div>
</template>

<script>
export default {
  data(){
    return {
      bgImg: require('_img/banner1.jpg')
    }
  }
}
</script>

<style lang="stylus">
.promotion-info
  height 2rem
  border-radius .1rem
  background-size cover
</style>
