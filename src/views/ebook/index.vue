<template>
	<div id="ebook" ref="ebook" >
		<eBookTitle></eBookTitle>
		<eBookReader></eBookReader>
		<eBookMenu></eBookMenu>
		<eBookMark></eBookMark>
	</div>
</template>

<script>
	import {eBookMixin} from './../../unit/mixin.js'
	import eBookReader from './../../components/Ebook/EbookReader.vue'
	import eBookTitle from './../../components/Ebook/EbookTitle.vue'
	import eBookMenu from './../../components/Ebook/EbookMenu.vue'
	import eBookMark from './../../components/Ebook/EbookMark.vue'
	export default{
		mixins:[eBookMixin],
		components:{
			eBookReader,eBookTitle,eBookMenu,eBookMark
		},
		watch:{
			offsetY(v){
				if(v>0){
					this.move(v)
				}else{
					this.remove()
				}
			}
		},
		methods:{
			
			move(v){
				this.$refs.ebook.style.top = v + 'px'
			},
			remove(){
				this.$refs.ebook.style.top = 0 + 'px'
				this.$refs.ebook.style.transition = 'all 0.2s linear'
				setTimeout(()=>{
					this.$refs.ebook.style.transition = ''
				},200)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';	
#ebook{
	height: 100%;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
}
	
</style>
