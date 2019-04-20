<template>
  <div class="home">
		<swiper/>
		<HomeBanner v-for="item of bannerConfig" :key="item.title" :config="item"/>
		<promotion-info/>
	</div>
</template>

<script>
import Swiper from './components/Swiper'
import HomeBanner from './components/HomeBar'
import promotionInfo from './components/promotionInfo'
export default {
	name: 'home',
	components: {
		Swiper,
		HomeBanner,
		promotionInfo
	},
	data() {
		return {
			bannerConfig: [{
					title: '现在下单',
					sub: 'ORDER NOW',
					promotion: '',
					icon: '&#xe764;',
					next: 'menu'
				},{
					title: '我的卡包',
					sub: 'CARD WALLET',
					promotion: '买2送1',
					icon: '&#xe82e;'
				},{
					title: '礼品券',
					sub: 'GIFT',
					promotion: '',
					icon: '&#xe6ed;'
				}
			]
		}
	}
}
</script>

<style lang="stylus">
@import '~_styl/config.styl';
.home
	height 100%
	padding 0 .2rem
	color $textColor
</style>
