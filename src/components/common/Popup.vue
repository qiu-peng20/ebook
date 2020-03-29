<template>
	<div class="popup" v-show="popupVisible">
		<transition name="fade">
			<div class="popup-bg" v-show="popupVisible" @click="hide"></div>
		</transition>
		<transition name="slide-up">
			<div class="popup-wrapper" v-show="visible">
				<div class="popup-title" v-if="title && title.length>0">{{title}}</div>
				<div class="popup-btn"
				v-for="(item,index) in btn " 
				@click="item.click" :key="index">{{item.text}}</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default{
		name:'popup',
		props:{
			title:String,
			btn:Array
		},
		data(){
			return{
				popupVisible:false,
				visible:false
			}
		},
		methods:{
			//隐藏
			hide(){
				this.visible = false
				setTimeout(()=>{
					this.popupVisible = false
				},200)
			},
			//显示
			show(){
				this.popupVisible = true
				setTimeout(()=>{
					this.visible = true
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './../../assets/style/global.scss';
	.popup{
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		z-index: 2000;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .4);
		.popup-bg{
			height: 100%;
			width: 100%;
		}
		.popup-wrapper{
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 2000;
			width: 100%;
			background: white;
			.popup-title{
				width: 100%;
				height: px2rem(44);
				border-bottom: px2rem(1) solid #eee;
				font-size: px2rem(12);
				line-height: px2rem(14);
				padding: px2rem(14);
				box-sizing: border-box;
				color: #999;
				@include  center;
			}
			.popup-btn{
				width: 100%;
				height: px2rem(60);
				border-bottom: px2rem(1) solid #eee;
				font-size: px2rem(16);
				color: #666;
				font-weight: bold;
				@include center;
				&.danger {
				  color: red;
				}
			}
		}
	}
</style>
