<template>
	<div class="ebook-slide-contents">
		<div class="slide-contents-seach-wrapper">
			<div class="slide-contents-search-input-wrapper">
				<div class="slide-contents-search-icon">
					<span class="icon-search"></span>
				</div>
				<input type="text" class="slide-contents-search-input" 
				placeholder="请输入内容"
				@click="CancelShow">
			</div>
			<div class="slide-contents-search-cancel"
			v-if="showCancel" @click="Cancel">取消</div>
		</div>
		<div class="slide-contents-book-wrapper">
			<div class="slide-contents-book-img-wrapper">
				<img :src="cover" class="slide-contents-book-img">
			</div>
			<div class="slide-contents-book-info-wrapper">
				<div class="slide-contents-book-title">{{metadata && metadata.title}}</div>
				<div class="slide-contents-book-author">{{metadata && metadata.creator}}</div>
			</div>
			<div class="slide-contents-book-progress-wrapper">
				<div class="slide-content-book-progress">
					<span class="progress">{{progress + '%'+'已读'}}</span>
				</div>
			</div>
		</div>
		<scroll class="slide-contents-list" :top="156" :bottom="48" ref="scroll">
			<div class="slide-contents-item" v-for="(item,index) in navigation" >
					<span class="slide-contents-item-label" 
					:class="{'selected':section === index}"
					@click="displays(item.href)">{{item.label}}</span>
					<span class="slide-contents-item-page"></span>
			</div>
		</scroll>
	</div>
</template>

<script>
	
	import {eBookMixin} from './../../unit/mixin.js'
	import Scroll from './../common/Scroll.vue'
	export default{
		mixins:[eBookMixin],
		components:{
			Scroll
		},
		methods:{
			//跳转问题待解决
			displays(target){
				this.display(target)
				.then(()=>{
					this.hideTitleAndMenu()
				})
			},
			Cancel(){
				this.showCancel = false
			},
			CancelShow(){
				this.showCancel = true
			},
		},
		data(){
			return{
				showCancel:false
			}
		},
	
	}
</script>

<style lang="scss" >
@import './../../assets/style/global.scss';
	.ebook-slide-contents{
		width: 100%;
		.slide-contents-seach-wrapper{
			display: flex;
			height: px2rem(36);
			margin: px2rem(20) 0 px2rem(10) 0;
			padding: 0 px2rem(15);
			box-sizing: border-box;
			width: 100%;
			.slide-contents-search-input-wrapper{
				flex: 1;
				@include center;
				display: flex;
				border: px2rem(1) solid #ACADAF;
				.slide-contents-search-icon{
					@include center;
					flex: 0 0 px2rem(28);
					font-size: px2rem(14);
				}
				.slide-contents-search-input{
					background: transparent;
					flex: 1;
					width: 100%;
					font-size: px2rem(14);
					height: px2rem(32);
					border: none;
					&:focus{
						outline: none;
					}
				}
			}
			.slide-contents-search-cancel{
				font-size: px2rem(14);
				flex: 0 0 px2rem(50);
				@include  right
			}
		}
		.slide-contents-book-wrapper{
			width: 100%;
			height: px2rem(90);
			display: flex;
			padding: px2rem(10) px2rem(15) px2rem(20) px2rem(15);
			box-sizing: border-box;
			.slide-contents-book-img-wrapper{
				width: px2rem(45);
				height: px2rem(60);
				.slide-contents-book-img{
					width: px2rem(45);
					height: px2rem(60);
				}
			}
			.slide-contents-book-info-wrapper{
				flex: 1;
				padding: 0 px2rem(10);
				width: px2rem(153.75);
				.slide-contents-book-title{
					font-size: px2rem(14);
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.slide-contents-book-author{
					font-size: px2rem(12);
					text-overflow: ellipsis;
					line-height: px2rem(30);
					height: px2rem(30);
					overflow: hidden;
					
				}
			}
			.slide-contents-book-progress-wrapper{
				flex:0 0 px2rem(70);
				.slide-content-book-progress{
					.progress{
						font-size: px2rem(14);
					}
				}
			}
		}
		.slide-contents-list{
			padding: 0 px2rem(20);
			box-sizing: border-box;
			.slide-contents-item{
				padding: px2rem(10) 0;
				box-sizing: border-box;
				line-height: px2rem(20);
				.slide-contents-item-label{
					
					font-size: px2rem(14);
				}
				.slide-contents-item-page{
					
				}
			}
		}
		
	}
</style>
