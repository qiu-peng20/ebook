<template>
	<div class="shelf-list" >
		<div v-for="item in shelfList" :key="item.id" class="shelf-list-item-wrapper" :style="{height:height}">
			<ShelfItem :data="item"></ShelfItem>
			<div class="shelf-item-text-wrapper">
				<span class="shelf-item-text">{{item.title}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import ShelfItem  from './ShelfItem.vue'
	import {storeShelfMixin} from './../../unit/mixin.js'
	import {realPx} from './../../unit/utils.js'
	export default{
		mixins:[storeShelfMixin],
		components:{
			ShelfItem
		},
		computed:{
			height(){
				return ((window.innerWidth - realPx(90))/3)/250 *350 + 'px' 
			}
		}
		
	}
</script>

<style lang="scss">
@import './../../assets/style/global.scss';	
	.shelf-list{
		position: absolute;
		left: 0;
		top: px2rem(94);
		z-index: 108;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		padding: px2rem(15);
		box-sizing: border-box;
		.shelf-list-item-wrapper{
			padding: px2rem(15);
			box-sizing: border-box;
			width: 33.33%;
			flex: 0 0 33.33%;
			.shelf-item-text-wrapper{
				margin-top: px2rem(5);
				width: 100%;
				height: px2rem(14);
				line-height: px2rem(14);
				font-size: px2rem(12);
				@include ellipsis2(2);
				.shelf-item-text{
					
					
				}
			}
		}
	}
</style>
