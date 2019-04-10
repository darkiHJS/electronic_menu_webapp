<template>
  <div class="welcome">
    <P>欢迎用餐</P>
    <p>小桌 032号</p>
    <button @click="handleClickToMenu">进入菜单</button>
	</div>
</template>

<script>
export default {
	name: 'welcome',
	components: {
  },
  methods: {
    handleClickToMenu: function() {
      this.$router.push('/electmenu')
    }
  }
	/**
	 *  1.显示桌号，提示信息
	 *  2.点餐按钮
	 *  3.特色菜品推荐位置
	 */
}
</script>

<style lang="stylus">
.welcome
	min-height 100vh
	padding 0 .4rem
	background-color #fab1a0
	color #fff
</style>
