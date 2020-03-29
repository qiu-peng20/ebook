<template>
		<transition name="slide-up">
			<div class="setting-wrapper" v-show="sizeShow === 0 && titleShow" >
				<div class="setting-font-size" >
					<div class="preview" :style="{fontSize:fontSizeList[0].fontSize + 'px'}">A</div>
					<div class="select">
						<div class="select-wrapper" v-for="(item,index) in fontSizeList" :key = "index" @click="setFontSize(item.fontSize)">
							<div class="line"></div>
							<div class="point-wrapper">
								<div class="point" v-show="defaultFontSize === item.fontSize">
									<div class="small-point"></div>
								</div>
							</div>
							<div class="line"></div>
						</div>
					</div>
					<div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
				</div>
				<div class="setting-font-family" @click="showFontFamilyPopup">
					<div class="setting-font-family-text">
						<span>{{defaultFontFamily}}</span>
					</div>
					<div class="setting-font-family-icon">
						<span class="icon-forward"></span>
					</div>
				</div>
			</div>
		</transition> 
</template>

<script>
	import {eBookMixin} from './../../unit/mixin.js'
	import {saveFontSize} from './../../unit/localStorage.js'
	export default{
		mixins:[eBookMixin],
		data(){
			return{
				fontSizeList:[
					{fontSize:12},
					{fontSize:14},
					{fontSize:16},
					{fontSize:18},
					{fontSize:20},
					{fontSize:22},
					{fontSize:24},
				],
			}
		},
		methods:{
			setFontSize(fontSize){
				this.currentBook.rendition.themes.fontSize(fontSize)
				this.setDefaultFontSize(fontSize)
				saveFontSize(this.fileName,fontSize)
			},
			
			showFontFamilyPopup(){
				this.setFontFamilyVisible(true)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';
	.setting-wrapper{
		position: absolute;
		bottom: px2rem(45);
		width: 100%;
		left: 0;
		height: px2rem(85);
		z-index: 101;
		background: white;
		box-shadow: 0  px2rem(-4) px2rem(4) rgba(0,0,0,.15);
		display: flex;
		flex-direction: column;
		.setting-font-size{
			flex: 2;
			display: flex;
			height: 100%;
			.preview{
				box-sizing: border-box;
				padding: 0 px2rem(10);
				flex: 0 0 px2rem(20);
				@include center
			}
			.select{
				display: flex;
				flex: 1;
				.select-wrapper{
					flex: 1;
					display: flex;
					align-items: center;
					&:first-child{
						
						.line{
							&:first-child{
								border-top: none;
							}
						}
					}
					&:last-child{
						.line{
							&:last-child{
								border-top: none;
							}
						}
					}
					.line{
						flex: 1;
						height: 0;
						border-top: 1px solid #CCCCCC;
					}
					.point-wrapper{
						position: relative;
						flex: 0 0 0;
						width: 0;
						height: px2rem(7);
						border-left: 1px solid #CCCCCC;
						.point{
							position: absolute;
							top:px2rem(-7);
							left: px2rem(-7);
							height: px2rem(20);
							width: px2rem(20);
							border-radius: 50%;
							background: white;
							border: 1px solid #CCCCCC;
							box-shadow: 0 px2rem(4) px2rem(4) rgba(0,0,0,0.15);
							@include  center
							.small-point{
								height: px2rem(5);
								width: px2rem(5);
								background: black;
								border-radius: 50%;
							}
						}
					}
				}
			}
		}
		.setting-font-family{
			flex: 1;
			
			flex-direction: row;
			@include center;
			font-size: px2rem(14);
			.setting-font-family-text{
				@include center;
			}
			.setting-font-family-icon{
				@include center;
			}
		}
	}
</style>
