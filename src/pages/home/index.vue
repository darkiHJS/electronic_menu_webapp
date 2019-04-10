<template>
  <div class="home">
		<div class="shop-info">
			XXX甜品馆，<span :style="{color:'red'}">欢迎您</span>
		</div>
		<swiper/>
		<noway/>
	</div>
</template>

<script>
import Swiper from './components/Swiper'
import Noway from './components/Noway'
export default {
	name: 'home',
	components: {
		Swiper,
		Noway
	},
	mounted() {
		this.$router.push('/welcome')
	}
	/**
	 *  1.发送桌号申请通知
	 *  2.有桌位，进入引导页。没有桌位，加入排队桌，cooki缓存消费者讯息，显示排队信息，开启轮询来更新排队信息
	 *  3.预点餐按钮
	 * 	4.预点餐菜单
	 */
}
</script>

<style lang="stylus">
.home
	min-height 100vh
	padding 0 .4rem
	background-color #fab1a0
	color #fff
.shop-info
	padding .2rem .4rem
	text-align right 
</style>
