<template>
	<div class="store-home">
		<SeachBar ></SeachBar>
		<scroll :top="scrollTop" @onScroll = "onScroll" ref="Scroll">
			<div class="banner-wrapper">
				<img :src="banner" class="img">
			</div>
			<FlapCard :data="random"></FlapCard>
			<GussYouLike :data="guessYouLike"></GussYouLike>
			<Recommend :data="recommend" class = "recommend"></Recommend>
			<Featured :data="featured" class="featured"></Featured>
			<div class="list-wrapper" v-for="(item,index) in categoryList" :key="index">
				<Category :data="item"></Category>
			</div>
		</scroll>
		
	</div>
</template>

<script>
	import Category from './../../components/home/CategoryBook.vue'
	import Featured from './../../components/home/Featured.vue'
	import Recommend from './../../components/home/Recommend.vue'
	import GussYouLike from './../../components/home/GuessYouLike.vue'
	import {home} from './../../../api/store.js'
	import FlapCard from './../../components/home/flapCard.vue'
	import {storeHomeMixin} from './../../unit/mixin.js'
	import Scroll from './../../components/common/Scroll.vue'
	import SeachBar from './../../components/home/seachBar.vue'
	export default{
		mixins:[storeHomeMixin],
		components:{
			SeachBar,Scroll,FlapCard,GussYouLike,Recommend,Featured,Category
		},
		data(){
			return{
				scrollTop:94,
				random : null,
				banner:null,
				guessYouLike:null,
				recommend:null,
				featured:null,
				categoryList:null
			}
		},
		methods:{
			onScroll(offsetY){
				this.setOffsetY(offsetY)
				if(offsetY>0){
					this.scrollTop = 52
				}else{
					this.scrollTop = 94
				}
				this.$refs.Scroll.refresh()
			}
		},
		mounted() {
			home()
			.then((response)=>{
				if(response && response.status === 200){
					const data = response.data
					const randomIndex =Math.floor( Math.random()*data.random.length)
					this.random = data.random[randomIndex]
					this.banner = data.banner
					this.guessYouLike = data.guessYouLike
					this.recommend = data.recommend
					this.featured = data.featured
					this.categoryList = data.categoryList
					
				}
			})
		}
		
	}
</script>

<style lang="scss">
@import './../../assets/style/global.scss';		
	.store-home{
		background: white;
		width: 100%;
		height: 100%;
		.banner-wrapper{
			width: 100%;
			box-sizing: border-box;
			padding: px2rem(10);
			.img{
				height: px2rem(140);
				width: 100%;
			}
		}
		.recommend{
			margin-top: px2rem(20);
		}
		.featured{
			margin-top: px2rem(20);
		}
		.list-wrapper{
			margin-top: px2rem(20);
		}
	}
</style>
