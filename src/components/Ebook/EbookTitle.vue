<template>
	<transition name="slide-down">
		<div class="title-wrapper" v-show="titleShow">
			<div class="title-left">
				<span class="icon-back icon" ></span>
			</div>
			<div class="title-right">
				<div class="icon-wrapper">
					<span class="icon-shelf icon"></span>
				</div>
				<div class="icon-wrapper">
					<span class="icon-cart icon"></span>
				</div>
				<div class="icon-wrapper">
					<span class="icon-more icon"></span>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import {eBookMixin} from './../../unit/mixin.js'
	export default{
		mixins:[eBookMixin],
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';
	.title-wrapper{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: px2rem(40);
		z-index: 101;
		display: flex;
		background: white;
		box-shadow: 0  px2rem(4) px2rem(4) rgba(0,0,0,.15);
		.title-left{
			flex: 0 0 px2rem(60);
			@include center
		}
		.title-right{
			flex: 1;
			display: flex;
			justify-content: flex-end;
			.icon-wrapper{
				flex: 0 0 px2rem(50);
				@include center
			}
		}
		
	}
</style>
