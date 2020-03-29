<template>
	<transition name="fade">
		<div class="shelf-title" v-show="shelfTitleVisible">
			<div class="shelf-title-text-wrapper">
				<span class="shelf-title-txet">书架</span>
			</div>
			<div class="shelf-title-btn-wrapper shelf-title-btn-left">
				<span class="shelf-title-btn-text">清除缓存</span>
			</div>
			<div class="shelf-title-btn-wrapper shelf-title-btn-right">
				<span class="shelf-title-btn-text" @click="onEdicClick">{{!isEditMode?'编辑':'取消'}}</span>
			</div>
		</div>
	</transition>
</template>

<script>
	import {storeShelfMixin} from './../../unit/mixin.js'
	export default{
		mixins:[storeShelfMixin],
		methods:{
			onEdicClick(){
				if(!this.isEditMode){
					this.setShelfSelected([])
					this.shelfList.forEach(item=>{item.selected = false})
				}
				this.setIsEditMode(!this.isEditMode)
			}
		}
	}
</script>

<style lang="scss">
	@import './../../assets/style/global.scss';	
	.shelf-title{
		position: absolute;
		width: 100%;
		height: px2rem(42);
		background: white;
		z-index: 150;
		.shelf-title-text-wrapper{
			position: absolute;
			height: px2rem(42);
			width: 100%;
			@include center;
			left: 0;
			top: 0;
			.shelf-title-txet{
				font-size: px2rem(16);
				line-height: px2rem(20);
				font-weight: bold;
				color: #333;
			}
		}
		.shelf-title-btn-wrapper{
			position: absolute;
			top: 0;
			box-sizing: border-box;
			height: 100%;
			@include center;
			.shelf-title-btn-text{
				font-size: px2rem(14);
				color: #666;
			}
			&.shelf-title-btn-left{
				left: 0;
				padding-left: px2rem(15);
			}
			&.shelf-title-btn-right {
				right: 0;
				padding-right: px2rem(15);
			}
		}
		
	}
</style>
