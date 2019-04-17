<template>
	<div class="list">
		<div class="list-header">
			<h2 class="header__title">{{ goodsList.title }}</h2>
			<button class="header-btn__back" @click="handleClickBack">返回</button>
			<div class="header__bg"></div>
		</div>
		<swiper :options="swiperOption" class="list-carousel">
			<swiper-slide v-for="goods of goodsArr" :key="goods[0].id" class="list-carousel-item">
				<card v-for="item of goods" :key="item.id" :goods="item" class="block"/>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import Card from './Card'

export default {
	props: ['goodsList'],
	components: {
		Card
	},
	methods: {
		handleClickBack() {
			this.$emit('goodsListOff')
		}
	},
	computed: {
		goodsArr:function() {
			let arr = []
			this.goodsList.goods.forEach((e, i)=> {
				const index = Math.floor(i / 4)
				if(!arr[index]) arr[index] = []
				arr[index].push(e)
			});
			return arr
		}
	},
	data() {
		return {
			swiperOption:{
				loop: true,
			}
		}
	},
	mounted() {

	}
}
</script>

<style lang="stylus">
.list
	width 100%
	background-color #fff
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
		z-index 1
		.list-carousel-item
			z-index 1
			display flex
			flex-wrap wrap
			.block
				width calc(50% - .6rem)
				height calc(((100vh - 1.16rem) / 2 ) - .4rem)
				margin 0 0 .4rem .4rem
</style>
