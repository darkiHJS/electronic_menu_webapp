<template>
  <div class="menu">
    <!-- <router-view></router-view> -->
    <tabs/>
	</div>
</template>

<script>
import Tabs from './components/tabs/Tabs'
export default {
	name: 'menu',
	components: {
    Tabs
	}
	/**
	 *  1. 进入后开启Socket, 同步更新餐桌菜单
	 *  2. 
	 *  
	 */
}
</script>

<style lang="stylus">
.menu
	min-height 100vh
	padding 0 .4rem
	background-color #fab1a0
	color #fff
</style>
