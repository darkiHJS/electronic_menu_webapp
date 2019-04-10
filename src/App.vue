<template>
  <div id="app">
    <keep-alive> <!-- 组件缓存 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">

</style>
