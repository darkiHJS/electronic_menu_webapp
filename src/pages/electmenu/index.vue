<template>
  <div class="menu">
		<menu-header/>
    <menu-tabs @openDetai="openDetaiOfSort" :goodsTabs="goodsTabs" v-if="!openDetailMenu"/>
		<menu-list :goodsList="goodsList" @goodsListOff="offDetai" v-else/>
		<menu-toolbar/>
	</div>
</template>

<script>
import MenuTabs from './components/Tabs/index'
import MenuList from './components/List/index'
import MenuHeader from './components/header'
import MenuToolbar from './components/toolbar'
import api from '_http/api'
export default {
	name: 'electmenu',
	components: {
    MenuTabs,
		MenuList,
		MenuHeader,
		MenuToolbar
	},
	methods:{
		openDetaiOfSort(sort) {
			this.sort = sort
			api.get_jsonData('goods/' + sort).then(d => {
				if(d.data.code === 0) {
					this.goodsList = d.data.data
					this.openDetailMenu = true
				}
			})
		},
		offDetai: function() {
			this.openDetailMenu = false
		},
		getGoodsList: function(url) {
      api.get_jsonData(url).then(d => {
        this.goodsTabs = d.data.data
      })
		}
	},
	data() {
		return {
			openDetailMenu: false,
			goodsTabs: '',
			goodsList: '',
			sort: 0 
		}
	},
	mounted() {
		this.getGoodsList('goods')
	},
	
}
</script>

<style lang="stylus">
.menu
	min-height 100vh
	background-color #fab1a0
	color #fff
</style>
