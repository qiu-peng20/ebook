<template>
		<transition name="setting-wrapper">
			<div class="ebook-popup-list" v-show="fontFamilyVisible">
				<div class="seating-family-title">
					<div class="seating-family-title-icon" @click="hide">
						<span class="icon-down2"></span>
					</div>
					<div class="seating-family-title-text">
						<span>选择字体</span>
					</div>
				</div>
				<div class="seating-family-body" v-for="(item,index) in fontFamilys" :key="index"
				:class="{'Change':isSeleted(item)}" @click="changeFamily(item.font)">
					<div class="seating-family-body-text">
						<span>{{item.font}}</span>
					</div>
					<div class="seating-family-body-icon" v-if="isSeleted(item)">
						<span class="icon-check"></span>
					</div>
				</div>
			</div>
		</transition>
</template>

<script>
	import {eBookMixin} from './../../unit/mixin.js'
	export default{
		data(){
			return{
				fontFamilys:[
					{ font: 'Default' },
					{ font: 'Cabin' },
					{ font: 'Days One' },
					{ font: 'Montserrat' },
					{ font: 'Tangerine' }
				]
			}
		},
		mixins:[eBookMixin],
		methods:{
			hide(){
				this.setFontFamilyVisible(false)
			},
			isSeleted(item){
				return this.defaultFontFamily === item.font
			},
			changeFamily(font){
				this.setDefaultFontFamily(font)
				if(font==='Default'){
					this.currentBook.rendition.themes.font('Times New Roman')
				}else{
					this.currentBook.rendition.themes.font(font)
				}
				
			}
		}
		
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';
	.ebook-popup-list{
		position: absolute;
		z-index: 200;
		bottom: 0;
		left: 0;
		width: 100%;
		box-shadow: 0 px2rem(-4) px2rem(6) rgba(0,0,0,.2);
		background: white;
		display: flex;
		flex-direction: column;
		.seating-family-title{
			@include center;
			width: 100%;
			height: px2rem(40);
			border-bottom: px2rem(1) solid #808080;
			flex-direction: row;
			font-size: px2rem(14);
			.seating-family-title-icon{
				font-size: px2rem(20);
			}
			.seating-family-title-text{
				padding: 0 px2rem(130);
				box-sizing: border-box;
			}
		}
		.seating-family-body{
			flex: 1;
			border-bottom: px2rem(1) solid #B8B9BB;
			display: flex;
			&.Change{
				background: #ECECEC;
			}
			.seating-family-body-text{
				font-size: px2rem(14);
				padding: px2rem(10);
				flex: 1;
			}
			.seating-family-body-icon{
				text-align: right;
				flex: 1;
				font-size: px2rem(14);
				padding: px2rem(10);
			}
		}
	}
</style>
