<template>
	<div class="ebook-bookmark" ref="markIcon">
		<div class="ebook-bookmark-text-wrapper">
			<div class="ebook-bookmark-down-wrapper">
				<span class="icon-down" ref="icon"></span>
			</div>
			<div class="ebook-bookmark-text" >{{text}}</div>
		</div>
		<div class="ebook-bookmark-icon-wrapper" ref="bookMark" :style="isFixed ? fixedStyle:{}">
			<eBookBookMark ></eBookBookMark>
		</div>
	</div>
</template>

<script>
	import {realPx} from './../../unit/utils.js'
	import {eBookMixin} from './../../unit/mixin.js'
	import eBookBookMark from './EbookBookMark.vue'
	export default{
		mixins:[eBookMixin],
		components:{
			eBookBookMark
		},
		data(){
			return{
				text:'',
				isFixed:false
			}
		},
		computed:{
			height(){
				return realPx(35)
			},
			maxHight(){
				return realPx(45)
			},
			fixedStyle(){
				return {
					position:'fixed',
					top:0,
					right:`${(window.innerWidth - this.$refs.markIcon.clientWidth) / 2}px`
				}
			}
		},
		watch:{
			offsetY(v){
				if(!this.bookAvailable || this.menuVisible || this.settingVisivle){
					return
				}
				//到达临界状态
				 if(v>this.height && v<this.maxHight){
					this.beforeThreshold()
					// this.$refs.markIcon.style.top = -v + 'px'
				//超过最终状态
				}else if(v>=this.maxHight){
					this.afterThreshold()
				}
				//刚开始动的时候
				else if (v>0 && v<this.height){
					this.beforeHeight()
				}
				else if(v === 0){
					this.restore()
				}
			}
		},
		methods:{
			addBookmark(){
				
			},
			removeBookmark(){
				
			},
			
			restore(){
				//归位
				setTimeout(()=>{
					this.$refs.markIcon.style.top = `${-this.height}px`
					this.$refs.icon.style.transform = 'rotate(0deg)'
					this.text = '下拉添加书签'
				},200)
				if(this.isFixed){
					this.setIsBookmark(true)
					this.addBookmark()
				}else{
					this.setIsBookmark(false)
					this.removeBookmark()
				}
			},
			beforeHeight(v){
				//状态1：没超过书签高度
				if(this.isBookmark){
					this.text = '下拉取消书签'
					this.isFixed = true
				}else{
					this.text = '下拉添加书签'
					this.isFixed = false
				}
				const icon = this.$refs.icon
				if(icon.style.transform = 'rotate(180deg)'){
					icon.style.transform = 'rotate(0)'
				}
			},
			beforeThreshold(v){
				//状态2：还没到达临界状态
				this.$refs.markIcon.style.top = `${-v}px`
				this.beforeHeight()
			},
			afterThreshold(v){
				//状态3：超过书签的高度的时候
				this.$refs.markIcon.style.top = `${-v}px`
				if(this.isBookmark){
					this.text = '松手删除标签'
					this.isFixed = false
				}else{
					this.text = '松手添加标签'
					this.isFixed = true
				}
				this.$refs.icon.style.transform = 'rotate(180deg)'
				// this.$refs.markIcon.style.top = -v + 'px'
				
			}
		}
	}
</script>

<style lang="scss">
@import './../../assets/style/global.scss';
	.ebook-bookmark{
		width: 100%;
		position: absolute;
		left: 0;
		top: px2rem(-35);
		height: px2rem(35);
		z-index: 200;
		.ebook-bookmark-text-wrapper{
			position: absolute;
			right: px2rem(45);
			bottom: 0;
			display: flex;
			
			.ebook-bookmark-down-wrapper{
				font-size: px2rem(14);
				color: white;
				transition: all 0.2s linear;
				@include center;
			}
			.ebook-bookmark-text{
				font-size: px2rem(14);
				color: white;
			}
		}
		.ebook-bookmark-icon-wrapper{
			
			position: absolute;
			right: 0;
			bottom: 0;
			margin-right: px2rem(15);
		}
	}
</style>
