import { createAPI } from 'cube-ui'
import Vue from 'vue'
import foodDetil from './pages/menu/components/FoodDetil'
import cart from './pages/cart/index'

createAPI(Vue, foodDetil)
createAPI(Vue, cart)