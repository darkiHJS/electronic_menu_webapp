import { CART } from '../mutation-types'
import { local_setItem, local_getItem } from '@/utils/index'
// inital state
const state = {
  cart: local_getItem('FSW_CART') || []
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  [CART.CHANGE_CART_COUNT] (state, { id, count}) {
    for(let i = 0; i < state.cart.length; i ++) {
      let cart = state.cart[i]
      if (cart.id === id) {
        cart.count = count
        break
      }
    }
    local_setItem('FSW_CART', state.cart)
  },
  [CART.REMOVE_CART_COUNT] (state, { id }) {
    for(let i = 0; i < state.cart.length; i ++) {
      let cart = state.cart[i]
      if (cart.id === id) {
        state.cart.splice(i,1)
        break
      }
    }
    local_setItem('FSW_CART', state.cart)
  },
  [CART.PUSH_CART_COUNT] (state, goods) {
    for(let i = 0; i < state.cart.length; i ++) {
      let cart = state.cart[i]
      if (cart.id === goods.id) {
        cart.count = goods.count
        local_setItem('FSW_CART', state.cart)
        return
      }
    }
    state.cart.push(goods)
    local_setItem('FSW_CART', state.cart)
  },
  [CART.CLEAR_CART_COUNT] (state) {
    state.cart = []
    local_setItem('FSW_CART', null)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}