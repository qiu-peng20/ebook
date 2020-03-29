import Vue from 'vue'
import Router from 'vue-router'
import Index from './../views/ebook/index.vue'
import Ebook from './../components/Ebook/EbookReader.vue'
import Store from './../views/store/index.vue'
import Home from './../views/store/Home.vue'
import Shelf from './../views/store/StoreShelf.vue'
import Detail from './../views/store/StoreDetail.vue'
import List from './../views/store/StoreList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
	  redirect:'/store'
    },
	{
		path:'/ebook',
		component: Index,
		children:[
			{
				path:':fileName',
				component:Ebook
			}
		]
	},
	{
		path:'/store',
		component:Store,
		redirect:'/store/shelf',
		children:[
			{
				path:'shelf',
				component:Shelf
			},
			{
				path:'home',
				component:Home,
			},
			{
				path:'detail',
				component:Detail,
			},
			{
				path:'list',
				component:List
			}
		]
	},
  ]
})
