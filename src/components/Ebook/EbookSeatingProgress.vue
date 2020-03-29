<template>
	<transition name="setting-wrapper">
		<div class="setting-wrapper" v-show="sizeShow === 2 && titleShow">
			<div class="setting-progress">
				<div class="progress-wrapper">
					<div class="read-time-wrapper">
						<span class="icon-back"></span>
						<span class="read-time-text">阅读进度</span>
						<span class="icon-forward"></span>
					</div>
					<div class="progress-icon-wrapper" @click="prevSection">
						<span class="icon-back" ></span>
					</div>
					<!-- $event.target永远指向触发事件的DOM元素 -->
					<input type="range" class="progress" max="100" min="0" step="1" 
					@change="onProgressChange($event.target.value)"
					@input="onProgressInput($event.target.value)"
					:value="progress"
					:disabled="!bookAvailable"
					ref="progress">
					<div class="progress-icon-wrapper" @click="nextSection">
						<span class="icon-forward" ></span>
					</div>
				</div>
				<div class="text-wrapper">
					<span>{{bookAvailable?progress + '%' : '加载中...'  }}</span>
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
			//拖动进度条
			onProgressChange(progress){
				this.setProgress(progress).then(()=>{
					this.disPlayProgress()
				})
			},
			disPlayProgress(){
				//获取进度位置
				const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
				// this.currentBook.rendition.display(cfi)
				// .then(()=>{
				// 	this.refreshLocation()
				// })
				this.display(cfi)
				
			},
			//实时更新百分比进度
			onProgressInput(progress){
				this.setProgress(progress)
			},
			//上一章
			prevSection(){
				if(this.section>0 && this.bookAvailable){
					this.setSection(this.section - 1).then(()=>{
						this.changeSection()
					})
				}
			},
			//下一章
			nextSection(){
				if(this.section<this.currentBook.spine.length-1 && this.bookAvailable){
					this.setSection(this.section + 1).then(()=>{
						this.changeSection()
					})
				}
			},
			//章节跳转渲染
			changeSection(){
				const sectionInfo = this.currentBook.section(this.section)
				if(sectionInfo && sectionInfo.href){
					this.display(sectionInfo.href)
				}
			},
			
		}
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';
.setting-wrapper{
		display: flex;
		width: 100%;
		height: px2rem(90);
		z-index: 200;
		position: absolute;
		left: 0;
		bottom: px2rem(44);
		background: white;
		box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,0.15);
		.setting-progress{
			position: relative;
			width: 100%;
			height: 100%;
			.read-time-wrapper{
				width: 100%;
				position: absolute;
				font-size: px2rem(15);
				left: 0;
				top: 0;
				height: px2rem(40);
				@include center;
			}
			.progress-wrapper{
				width: 100%;
				height: 100%;
				@include  center;
				padding: 0 px2rem(15);
				box-sizing: border-box;
				.progress-icon-wrapper{
					font-size: px2rem(16);
				}
				.progress{
					width: 100%;
					-webkit-appearance: none;
					height: px2rem(2);
					margin: 0 px2rem(10);
					&::-webkit-slider-thumb{
						-webkit-appearance: none;
						height: px2rem(20);
						width: px2rem(20);
						border-radius: 50%;
						background: white;
						box-shadow: 0 px2rem(4) px2rem(4) rgba(0,0,0,0.15);
						border: px2rem(1) solid #ddd;
					}
				}
			}
			.text-wrapper{
				position: absolute;
				left: 0;
				bottom: px2rem(10);
				width: 100%;
				color: #333;
				font-size: px2rem(12);
				padding: 0 px2rem(15);
				box-sizing: border-box;
				@include center;
				
			}
			
		}
	}
</style>
