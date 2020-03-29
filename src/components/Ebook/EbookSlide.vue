<template>
	<transition name="fade">
		<div class="slide-content-wrapper" v-show="sizeShow === 3 && titleShow">
			<transition name="slide-right">
				<div class="content" v-if="sizeShow === 3">
					<div class="content-page-wrapper" v-if="bookAvailable">
						<div class="content-page">
							<component :is="currentTab === 1? content : bookMark"></component>
						</div>
						<div class="content-page-tab">
							<div class="content-page-tab-item" 
							:class="{'selected':currentTab===1}"
							@click="selectTab(1)">
								<span>目录</span>
							</div>
							<div class="content-page-tab-item" 
							:class="{'selected':currentTab===2}"
							@click="selectTab(2)">
								<span>书签</span>
							</div>
						</div>
					</div>
					<div class="content-empty" v-else>
						<eBookLoading></eBookLoading>
					</div>
				</div>
			</transition>
				<div class="content-bg" @click="hideTitleAndMenu()"></div>
		</div>
	</transition>
</template>

<script>
	import eBookLoading from './EbookLoading.vue'
	import {eBookMixin} from './../../unit/mixin.js'
	import Content from './EbookSlideContent.vue'
	import BookMark from './EbookSlideBookMark.vue'
	export default{
		components:{
			eBookLoading
		},
		data(){
			return{
				currentTab:1,
				content:Content,
				bookMark:BookMark,
			}
		},
		methods:{
			selectTab(tab){
				this.currentTab = tab
			}
		},
		mixins:[eBookMixin]
	}
</script>

<style lang="scss">
@import './../../assets/style/global.scss';
	.slide-content-wrapper{
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 300;
		display: flex;
		left: 0;
		bottom: 0;
		.content{
			flex: 0 0 85%;
			width: 85%;
			height: 100%;
			.content-page-wrapper{
				display: flex;
				flex-direction: column;
				height: 100%;
				.content-page{
					flex: 1;
					width: 100%;
					overflow: hidden;
				}
				.content-page-tab{
					width: 100%;
					height: px2rem(40);
					flex: 0 0 px2rem(40);
					display: flex;
					.content-page-tab-item{
						font-size: px2rem(14);
						flex: 1;
						@include center;
					}
				}
			}
			.content-empty{
				width: 100%;
				height: 100%;
				@include center;
			}
		}
		.content-bg{
			flex: 0 0 15%;
			width: 15%;
			height: 100%;	
		}
	}

</style>
