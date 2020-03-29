<template>
	<div class="Food">
		<transition name="slide-up">
			<div class="menu-wrapper" v-show="titleShow" :class="{'font-Size-show':!titleShow || setFontFamilyVisible }">
				<div class="icon-wrapper">
					<span class="icon-menu" @click="showSettin(3)"></span>
				</div>
				<div class="icon-wrapper">
					<span class="icon-progress" @click="showSettin(2)"></span>
				</div>
				<div class="icon-wrapper">
					<span class="icon-bright" @click="showSettin(1)"></span>
				</div>
				<div class="icon-wrapper">
					<span class="icon-A" @click="showSettin(0)"></span>
				</div>
			</div>
		</transition>
		<eBookSeatingFont></eBookSeatingFont>
		<eBookSeatingFamily></eBookSeatingFamily>
		<eBookSettingTheme></eBookSettingTheme>
		<ebookSeatingProgress></ebookSeatingProgress>
		<eBookSlide></eBookSlide>
	</div>
</template>

<script>
	import {eBookMixin} from './../../unit/mixin.js'
	import eBookSeatingFont from './EbookSeatingFont.vue'
	import eBookSeatingFamily from './EbookSeatingFamily.vue'
	import eBookSettingTheme from './EbookSettingTheme.vue'
	import ebookSeatingProgress from './EbookSeatingProgress.vue'
	import eBookSlide from './EbookSlide.vue'
	export default{
		components:{
			eBookSeatingFont,eBookSeatingFamily,eBookSettingTheme,ebookSeatingProgress,
			eBookSlide
		},
		mixins:[eBookMixin],
		methods:{
			showSettin(key){
				this.setSizeShow(key)
			},
		}
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';
	.Food{
		.menu-wrapper{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: px2rem(45);
			z-index: 250;
			display: flex;
			background: white;
			box-shadow: 0  -4px 4px rgba(0,0,0,.15);
			&.font-Size-show{
				box-shadow: none;
			}
			.icon-wrapper{
				flex: 1;
				@include  center;
				font-size: px2rem(20);
			}
		}
	}	
</style>
