<template>
  <div class="home">
		<div class="shop-info">
			XXX甜品馆，<span :style="{color:'red'}">欢迎您</span>
		</div>
		<swiper/>
		<template v-if="true">
			<noway/>
		</template>
		<div v-else>桌号信息</div>
		<div>热销品活动信息</div>
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
	}
	/**
	 *  1.发送桌号申请通知
	 *  2.有桌位，进入引导页。没有桌位，加入排队桌，cooki缓存消费者讯息，显示排队信息，开启websokit（同步通知）
	 *  3. ui 店信息。推荐菜， 中间排队信息
	 */
}
</script>

<style lang="stylus">
.home
	padding 0 .4rem
.shop-info
	padding .2rem .4rem
	text-align right 

</style>
