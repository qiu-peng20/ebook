<template>
	<div class="shelf-search-wrapper" :class="{'shelf-search-fixed':inputClick}">
		<div class="shelf-search" :class="{'searchTop':inputClick}">
			<div class="search-wrapper">
				<div class="icon-search-wrapper">
					<span class="icon-search"></span>
				</div>
				<div class="search-input-wrapper">
					<input type="text" class="search-input"@click="onSeachClick" placeholder="请输入要搜索的书本" v-model="searchText">
				</div>
				<div class="icon-clear-wrapper">
					<span class="icon-close-circle-fill" @click="clearSearchText"></span>
				</div>
			</div>
			<div class="cancel-btn-wrapper">
				<span class="cancel-text" @click="onCancalClick">取消</span>
			</div>
		</div>
		<transition name="shelf-search-tab-top">
			<div class="shelf-search-tab-wrapper" v-if="inputClick" >
				<div class="shelf-search-tab-item" v-for="(item,index) in tabs" v-if="inputClick" :key="index">
					<span class="shelf-search-tab-text" :class="{'tabtextid':selectedTab === item.id }" @click="onTabText(index)">{{item.text}}</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import {storeShelfMixin} from './../../unit/mixin.js'
	export default{
		mixins:[storeShelfMixin],
		data(){
			return{
				searchText:'',
				inputClick:false,
				selectedTab:1,
				tabs:[
					{
						id:1,
						text:'默认'
					},
					{
						id:2,
						text:'按添加时间'
					},
					{
						id:3,
						text:'按阅读进度'
					}
				]
			}
		},
		methods:{
			onTabText(index){
				this.selectedTab = index+1
			},
			onSeachClick(){
				this.inputClick = true
				this.setShelfTitleVisible(false)
			},
			onCancalClick(){
				this.setShelfTitleVisible(true)
				this.inputClick = false
			},
			clearSearchText(){
				this.searchText = ''
			}
		}
	}
</script>

<style lang="scss">
	@import './../../assets/style/global.scss';	
	.shelf-search-wrapper{
		position: relative;
		z-index: 105;
		width: 100%;
		height: px2rem(94);
		 box-shadow: 0 px2rem(2) px2rem(2) 0 rgba(0, 0, 0, .1);
		&.shelf-search-fixed{
			position: fixed;
			left: 0;
			top: 0;
		}
		.shelf-search{
			position: absolute;
			top: px2rem(42);
			left: 0;
			z-index: 105;
			width: 100%;
			height: px2rem(52);
			font-size: px2rem(16);
			display: flex;
			transition: top 0.3s linear;
			&.searchTop{
				top: 0;
			}
			.search-wrapper{
				flex: 1;
				margin: px2rem(8) 0 px2rem(8) px2rem(10);
				border: px2rem(1) solid #ccc;
				border-radius: px2rem(3);
				display: flex;
				.icon-search-wrapper{
					flex: 0 0 px2rem(22);
					@include right;
					.icon-search{
						font-size: px2rem(12);
					}
				}
				.search-input-wrapper{
					flex: 1;
					padding: 0 px2rem(10);
					box-sizing: border-box;
					@include center;
					.search-input{
						width: 100%;
						font-size: px2rem(14);
						border: none;
						color: #333;
						
						&:focus{
							outline: none;
						}
						&::-webkit-input-placeholder{
							font-size: px2rem(14);
							color: #ccc;
						}
					}
				}
				.icon-clear-wrapper{
					flex: 0 0 px2rem(24);
					@include left;
					.icon-close-circle-fill{
						font-size: px2rem(14);
						color: #ccc;
					}
				}
			}
			.cancel-btn-wrapper{
				@include center;
				.cancel-text{
					font-size: px2rem(14);
					color:#0074D9;
					margin: 0 px2rem(10) 0 px2rem(10);
				}
			}
		}
		.shelf-search-tab-wrapper{
			position: absolute;
			top: px2rem(52);
			left: 0;
			z-index: 105;
			display: flex;
			width: 100%;
			height: px2rem(42);
			.shelf-search-tab-item{
				flex: 1;
				@include center;
				.shelf-search-tab-text{
					font-size: px2rem(12);
					color: #999;
					&.tabtextid{
						color: #0074D9;
					}
				}
			}
		}
	}
</style>
