<template>
	<div class="store-shelf">
		<ShelfTitle></ShelfTitle>
		<scroll :top="0" 
		:bottom="scrollBottom" 
		class="store-shelf-scroll-wrapper"
		ref="scroll">
			<ShelfSeach></ShelfSeach>
			<ShelfList></ShelfList>
		</scroll>
		<ShelfFooter></ShelfFooter>
	</div>
</template>

<script>
	import ShelfFooter from './../../components/shelf/ShelfFooter.vue'
	import ShelfList from './../../components/shelf/ShelfList.vue'
	import ShelfSeach from './../../components/shelf/ShelfSeach.vue'
	import Scroll from './../../components/common/Scroll.vue'
	import ShelfTitle from './../../components/shelf/ShelfTitle.vue'
	import {storeShelfMixin} from './../../unit/mixin.js'
	import { shelf } from './../../../api/store.js'
	import { appendAddToShelf} from './../../unit/store.js'
	export default{
		mixins:[storeShelfMixin],
		components:{
			ShelfTitle,Scroll,ShelfSeach,ShelfList,ShelfFooter
		},
		data(){
			return{
				scrollBottom:0
			}
		},
		watch:{
			isEditMode(isEditMode){
				this.scrollBottom = isEditMode?48:0
				this.$nextTick(()=>{
					this.$refs.scroll.refresh()
				})
			}
		},
		mounted() {
			this.getShelfList()
		},
		methods:{
			//获取书架图书
			getShelfList(){
				shelf().then((response)=>{
					if(response.status === 200 && response.data && response.data.bookList){
						this.setShelfList(appendAddToShelf (response.data.bookList))
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './../../assets/style/global.scss';
	.store-shelf{
		z-index: 101;
		position: relative;
		width: 100%;
		height: 100%;
		background: white;
		.store-shelf-scroll-wrapper{
			position: absolute;
			top: 0;
			left: 0;
			z-index: 120;
		}
	}
</style>
