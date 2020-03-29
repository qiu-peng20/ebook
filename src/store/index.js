import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book.js'
import getters from './getters.js'
import actions from './../unit/action.js'
import store from './modules/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		book,
		store
	},
	getters,
	actions
})