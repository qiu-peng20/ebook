<template>
	<div class="shelf-item"
	 @click="onItemClick">
		<component :is="item" :data="data"></component>
		<div class="icon-selected" 
		v-show="isEditMode && data.type === 1"
		:class="{'is-select':data.selected}"></div>
	</div>
</template>

<script>
	import {gotoStoreHome} from './../../unit/store.js'
	import {storeShelfMixin} from './../../unit/mixin.js'
	import ShelfItemAdd from './ShelfItemAdd.vue'
	import ShelfItemBook from './ShelfItemBook.vue'
	import ShelfItemCategory from './ShelfItemCategory.vue'
	// import { pushWithOutUpLiCate } from './../../unit/boost.js'
	
	export default{
		mixins:[storeShelfMixin],
		props:{
			data:Object
		},
		// mounted() {
		// 	console.log(this.data.cover)
		// },
		computed:{
			//判断该渲染哪个组件
			item(){
				return this.data.type === 1?this.book:(this.data.type ===2? this.category : this.add)
			}
		},
		data(){
			return{
				book:ShelfItemBook,
				category:ShelfItemCategory,
				add:ShelfItemAdd
			}
		},
		methods:{
			onItemClick(){
				if(this.isEditMode){
					this.data.selected = !this.data.selected
					if(this.data.selected){
						this.shelfSelected.pushWithOutUpLiCate(this.data)
					}else{
						//判断data里面的id是否相等于item里面的id
						this.setShelfSelected(this.shelfSelected.filter((item)=>{
							item.id !== this.data.id
						}))
					}
				}else{ 
					if(this.data.type === 1){
						
					}else if(this.data.type === 2){
						
					}else{
						gotoStoreHome(this)
					}
				}
			}
		},
		// mounted() {
		// 	console.log(this.data)
		// }
	}
</script>

<style lang="scss">
	@import './../../assets/style/global.scss';
	.shelf-item{
		position: relative;
		height: 100%;
		width: 100%;
		box-shadow: px2rem(2) px2rem(2) px2rem(6) rgba(0,0,0,0.4);
		.icon-selected{
			position: absolute;
			bottom: px2rem(2);
			right: px2rem(2);
			font-size: px2rem(18);
			color: rgba(0,0,0,0.5);
			&.is-select{
				color: skyblue;
			}
		}
	}
</style>
