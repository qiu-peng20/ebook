<template>
	<div class="flap-card-wrapper" v-show="flapCardVisible">
		<div class="close-btn-wrapper">
			<span class="icon-close" @click="close"></span>
		</div>
		<div class="book-card" :class="{'animation':flapCardVisible}">
			<div class="book-card-wrapper">
				<div class="img-wrapper">
					<img class="img" :src="data?data.cover:''" alt="">
				</div>
				<div class="content-wrapper">
					<div class="content-title">{{data?data.title:''}}</div>
					<div class="content-author">{{data?data.author:''}}</div>
				</div>
				<div class="read-btn" @click.stop="showBookDetail(book)">立即阅读</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {storeHomeMixin} from './../../unit/mixin.js'
	export default{
		mixins:[storeHomeMixin],
		props:{
			data:Object
		},
		methods:{
			close(){
				this.setFlapCardVisible(false)
				history.go(0)
			},
			
		}
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';	
	.flap-card-wrapper{
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 888;
		background: rgba(0,0,0,0.5);
		.close-btn-wrapper{
			position: absolute;
			width: 100%;
			left: 0;
			bottom: px2rem(30);
			z-index: 900;
			@include center;
			.icon-close{
				@include center;
				font-size: px2rem(25);
				width: px2rem(45);
				height: px2rem(45);
				background: #333;
				color: white;
				border-radius: 50%;
				
			}
		}
		.book-card{
			position: relative;
			top: 20%;
			width: 60%;
			left:20%;
			height: px2rem(320);
			max-width: px2rem(400);
			box-sizing: border-box;
			border-radius: px2rem(15);
			background: white;
			&.animation{
				animation: scale 0.3s ease-in both;
				@keyframes scale{
					0%{
						transform: scale(0);
						opacity: 0;
					}
					100%{
						transform: scale(1);
						opacity: 1;
					}
				}
			}
			.book-card-wrapper{
				width: 100%;
				height: 100%;
				margin-bottom: px2rem(30);
				.img-wrapper{
					width: 100%;
					@include center;
					.img{
						margin-top: px2rem(20);
						width: px2rem(90);
						height: px2rem(130);
					}
				}
				.content-wrapper{
					padding: 0 px2rem(20);
					margin-top: px2rem(20);
					display: flex;
					flex-direction: column;
					.content-title{
						color: #333;
						font-weight: bold;
						font-size: px2rem(15);
						line-height: px2rem(20);
						max-height: px2rem(40);
						text-align: center;
						flex: 1;
					}
					.content-author{
						margin-top: px2rem(30);
						text-align: center;
						font-size: px2rem(15);
						flex: 1;
					}
				}
			}
			.read-btn{
				position: absolute;
				bottom: 0;
				left: 0;
				z-index: 1100;
				width: 100%;
				border-radius: 0 0 px2rem(15) px2rem(15);
				padding: px2rem(15) 0;
				text-align: center;
				color: white;
				font-size: px2rem(14);
				background: blue;
			}
		}
	}
</style>
