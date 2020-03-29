<template>
	<div class="search-bar" :class="{'hide-title':!titleVisible}">
		<transition name="title-move">
			<div class="search-bar-title-wrapper" v-show="titleVisible">
				<div class="title-text-wrapper">
					<span class="text">书城</span>
				</div>
				<div class="title-icon-shake-wrapper" @click="showFlapCard">
					<span class="icon-shake icon"></span>
				</div>
			</div>
		</transition>
		<div class="title-icon-back-wrapper" :class="{'hide-title' :!titleVisible}" >
			<span class="icon-back icon" @click="back"></span>
		</div>
		<div class="search-bar-input-wrapper" :class="{'hide-title' :!titleVisible}">
			<div class="search-bar-break" :class="{'hide-title':!titleVisible}"></div>
			<div class="search-bar-input">
				<span class="icon-search icon"></span>
				<input type="text" class="input" placeholder="请输入要找的书"
				 v-model="searchText" >
			</div>
		</div>
		<div class=""></div>
	</div>
</template>

<script>
	import {storeHomeMixin} from './../../unit/mixin.js'
	export default{
		mixins:[storeHomeMixin],
		data(){
			return{
				searchText:'',
				titleVisible:true
			}
		},
		watch:{
			offsetY(offsetY){
				if(offsetY>0){
					this.hideTitle()
				}else{
					this.showTitle()
				}
			}
		},
		methods:{
			hideTitle(){
				this.titleVisible = false
			},
			showTitle(){
				this.titleVisible = true
			},
			showFlapCard(){
				this.setFlapCardVisible(true)
			},
			back(){
				this.$router.push('/store/shelf')
			}
		}
	}
</script>

<style lang="scss">
@import './../../assets/style/global.scss';	
	.search-bar{
		width: 100%;
		position: relative;
		left: 0;
		top: 0;
		height: px2rem(94);
		z-index: 150;
		&.hide-title{
			height: px2rem(52);
		}
		.search-bar-title-wrapper{
			position: absolute;
			width: 100%;
			left: 0;
			top: 0;
			height: px2rem(42);
			.title-text-wrapper{
				width: 100%;
				@include center;
				height: px2rem(42);
			}
			.title-icon-shake-wrapper{
				position: absolute;
				right: px2rem(15);
				top: 0;
				height: px2rem(42);
				@include center;
			}
		}
		.title-icon-back-wrapper{
			position: absolute;
			left: px2rem(15);
			top: 0;
			height: px2rem(42);
			transition: all 0.2s linear;
			@include center;
			&.hide-title{
				height: px2rem(52);
				transition: all 0.2s linear;
			}
		}
		.search-bar-input-wrapper{
			left: 0;
			top: px2rem(42);
			position: absolute;
			width: 100%;
			height: px2rem(52);
			padding: px2rem(10);
			box-sizing: border-box;
			transition: all 0.2s linear;
			display: flex;
			&.hide-title{
				top: 0;
			}
			.search-bar-break{
				flex: 0 0 0;
				width: 0;
				transition: all 0.2s linear;
				&.hide-title{
					flex: 0 0 px2rem(31);
					width: px2rem(31);
				}
			}
			.search-bar-input{
				flex: 1;
				border-radius: px2rem(20);
				box-sizing: border-box;
				padding: px2rem(5) px2rem(15);
				background: #f4f4f4;
				@include left;
				border: px2rem(1) solid #eee;
				.icon-search{
					color:#999;
				}
				.input{
					width: 100%;
					height: px2rem(22);
					background: transparent;
					border: none;
					margin-left: px2rem(10);
					color: #666;
					font-size: px2rem(12);
					&:focus{
						outline: none;
					}
					&::-webkit-input-placeholder{
						color: #ccc;
					}
				}
				
			}
		}
	}
</style>
