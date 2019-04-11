<template>
	<div class="list">
		<div class="list-header">
			<h2 class="header__title">风味炸物</h2>
			<button class="header-btn__back" @click="handleClickBack">返回</button>
			<div class="header__bg"></div>
		</div>
		<swiper :options="swiperOption" class="list-carousel">
			<swiper-slide class="list-carousel-item">
				<card class="block"/>
				<div class="block"></div>
				<div class="block"></div>
				<div class="block"></div>
			</swiper-slide>
			<swiper-slide class="list-carousel-item">
				<div class="block"></div>
				<div class="block"></div>
				<div class="block"></div>
				<div class="block"></div>
			</swiper-slide>
			<swiper-slide class="list-carousel-item">
				<div class="block"></div>
				<div class="block"></div>
				<div class="block"></div>
				<div class="block"></div>
			</swiper-slide>
			<swiper-slide class="list-carousel-item">
				<div class="block"></div>
				<div class="block"></div>
				<div class="block"></div>
				<div class="block"></div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import Card from './Card'

export default {
	data() {
		return {
			swiperOption:{
				loop: true,
			}
		}
	},
	components: {
		Card
	},
	methods: {
		handleClickBack() {
			this.$router.push('/electmenu')
		}
	}
}
</script>

<style lang="stylus">
.list
	width 100%
	background-color #fff
	z-index 999
	position absolute
	top 0
	left 0
	right 0
	bottom 0
	overflow hidden
  .list-header
		position relative
		.header__title
			text-align center
			height 1.16rem
			line-height 1.16rem
			font-size 20px
			font-weight bold
		.header-btn__back
			position absolute
			top 50%
			transform translateY(-50%)
			left .2rem
		.header__bg
			position absolute
			background-color #fab1a0
			width 120%
			height 2rem
			top -.6rem
			left -.3rem
			transform rotate(-4deg)
			z-index -1
	.list-carousel
		height calc(100vh - 1.16rem)
		.list-carousel-item
			display flex
			flex-wrap wrap
			.block
				width calc(50% - .6rem)
				height calc(((100vh - 1.16rem) / 2 ) - .4rem)
				margin 0 0 .4rem .4rem
</style>
