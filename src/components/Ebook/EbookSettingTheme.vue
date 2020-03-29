<template>
	<transition name="setting-wrapper">
		<div class="setting-wrapper" v-show="sizeShow ===1 && titleShow">
			<div class="setting-wrapper-item" v-for="(item,index) in themeList" :key = "index" @click="setTheme(index)">
				<div class="preview" :style="{background:item.style.body.background}"
				 :class="{'selected': item.name === defaultTheme}" ></div>
				<div class="text" :class="{'selected':item.name === defaultTheme}">{{item.name}}</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import {eBookMixin} from './../../unit/mixin.js'
	import {saveTheme} from './../../unit/localStorage.js'
	export default{
		mixins:[eBookMixin],
		
		methods:{
			//改变样式背景
			setTheme(index){
				const theme = this.themeList[index]
				this.setDefaultTheme(theme.name)
				.then(()=>{
					this.currentBook.rendition.themes.select(this.defaultTheme)
					this.initGlobalStyle()
					saveTheme(this.fileName, theme.name)
				})
			}
		},
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
		.setting-wrapper-item{
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 2px;
			// box-sizing: border-box;
			.preview{
				flex: 1;
				&.selected{
					border: px2rem(1.5) solid #999999;
				}
			}
			
			.text{
				flex:  0 0 px2rem(20);
				font-size: px2rem(14);
				color: #999999;
				@include center
				&.selected{
					color :#333333;
				}
			}
		}
	}
</style>
