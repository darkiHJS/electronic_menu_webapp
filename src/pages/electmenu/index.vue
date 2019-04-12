<template>
  <div class="menu">
    <!-- <router-view></router-view> -->
    <menu-tabs/>
		<menu-list/>
	</div>
</template>

<script>
import MenuTabs from './components/Tabs/index'
import MenuList from './components/List/index'
export default {
	name: 'electmenu',
	components: {
    MenuTabs,
		MenuList
	},
	methods:{
	},
	mounted() {

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
