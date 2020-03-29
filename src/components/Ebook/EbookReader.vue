<template>
	<div class="ebook-reader">
		<div id="read">
			<div class="mask" @click="addmove" @touchmove="move" @touchend="moveEnd">
			</div>
		</div>
	</div>
</template>

<script>
	import {addCSS,flatten} from './../../unit/book.js'
	import {eBookMixin} from './../../unit/mixin.js'
	import {getFontSize,
			saveFontSize,
			getTheme,
			saveTheme,
			getLocation} from './../../unit/localStorage.js'
	import Epub from 'epubjs'
	global.ePub = Epub
	export default{
		mixins:[eBookMixin],
		methods:{
			move(e){
				if(this.titleShow===false){
					let offsetY = 0
					if(this.firstOffersetY){
						offsetY = e.changedTouches[0].clientY  - this.firstOffersetY
						this.setOffsetY(offsetY)
					}else{
						this.firstOffersetY = e.changedTouches[0].clientY 
					}
					e.preventDefault()
					e.stopPropagation()
				}
			},
			moveEnd(e){
				this.setOffsetY(0)
				this.firstOffersetY = 0
			},
			//点击翻页功能
			addmove(e){
				const offsetX = e.offsetX
				const width = window.innerWidth
				if(offsetX>0 && offsetX<width*0.3){
					this.prevPage()
				}else if(offsetX>0 && offsetX>width*0.7){
					this.nextPage()
				}else{
					this.toggleTitleAndMenu()
				}
			},
			//向左滑
			prevPage(){
				if(this.rendition){
					this.rendition.prev()
					.then(()=>{
						this.refreshLocation()
					})
					this.hideTitleAndMenu()
				}
			},
			//向右滑
			nextPage(){
				if(this.rendition){
					this.rendition.next()
					.then(()=>{
						this.refreshLocation()
					})
					this.hideTitleAndMenu()
				}
			},
			//点击的时候执行
			toggleTitleAndMenu(){
				// this.$store.dispatch('setTitleShow',!this.titleShow)
				this.setTitleShow(!this.titleShow)
				if(this.setSizeShow){
					this.setSizeShow(-1)
					this.setFontFamilyVisible(false)
				}
			},
			
			//存储fontsize的大小
			initFontSize(){
				let fontSize = getFontSize(this.fileName)
				if(!fontSize){
					saveFontSize(this.fileName,this.defaultFontSize)
				}else{
					this.rendition.themes.fontSize(fontSize)
					this.setDefaultFontSize(fontSize)
				}
			},
			//存储背景样式
			initTheme(){
				let defaultTheme = getTheme(this.fileName)
				if(!defaultTheme){
					defaultTheme = this.themeList[0].name
					saveTheme(this.fileName,theme)
				}
				this.setDefaultTheme(defaultTheme)
				//注册主题
				this.themeList.forEach((theme)=>{
					this.rendition.themes.register(theme.name,theme.style)
				})
				//初始化主题
				this.rendition.themes.select(this.defaultTheme)
			},
			//获取图书的信息（作者，题目）
			parseBook(){
				//获取封面信息（覆盖）
				this.book.loaded.cover
				.then((cover)=>{
					this.book.archive.createUrl(cover)
					.then((url)=>{
						this.setCover(url)
					})
				})
				//获取元数据
				this.book.loaded.metadata
				.then((metadata)=>{
					this.setMetadata(metadata)
				})
				this.book.loaded.navigation
				.then((navigation)=>{
					const navItem = flatten(navigation.toc)
					this.setNavigation(navItem)
					
				})
			},
			//初始化epub组件
			initEpub(){
				const baseUrl = 'http://localhost:9999/epub/' + this.$route.params.fileName.split('|').join('/') +'.epub'
				this.book = new Epub(baseUrl)
				this.setCurrentBook(this.book)
				this.parseBook()
				
				this.rendition = this.book.renderTo('read',{
					width:innerWidth,
					height:innerHeight,
					method:'default'
				})
				//渲染图书
				const location = getLocation(this.fileName)
				
				this.display(location,()=>{
					this.initFontSize()
					this.initTheme()
					this.initGlobalStyle()
				})
				//图书分页设置
				this.book.ready.then(()=>{
					return this.book.locations.generate(150)
					.then((locations)=>{
						this.setBookAvailable(true)
						this.refreshLocation()
					})
				})
				//判断手指刚触碰的时候
				this.rendition.on('touchstart',(event)=>{
					this.touchStartX = event.changedTouches[0].clientX
					this.touchStartTime = event.timeStamp
				})
				//判断手指离开屏幕的时候
				this.rendition.on('touchend',(event)=>{
					const offsetX = event.changedTouches[0].clientX - this.touchStartX
					const upTime = event.timeStamp - this.touchStartTime
					if(upTime<500 && offsetX >40){
						this.prevPage()
					}else if(upTime<500 && offsetX < -40){
						this.nextPage()
					}else{
						this.toggleTitleAndMenu()
					}
					event.preventDefault()
					event.stopPropagation()
				})
				//获取字体URL地址
				this.rendition.hooks.content.register(contents=>{
					// contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/font/tangerine.css`)
					// contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/font/cabin.css`)
					// contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/font/daysOne.css`)
					// contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/font/montserrat.css`)
					contents.addStylesheet('http://192.168.0.100:9999/font/tangerine.css')
					contents.addStylesheet('http://192.168.0.100:9999/font/cabin.css')
					contents.addStylesheet('http://192.168.0.100:9999/font/daysOne.css')
					contents.addStylesheet('http://192.168.0.100:9999/font/montserrat.css')
				})
			}
		},
		mounted() { 
			this.setFileName(this.$route.params.fileName.split('|').join('/'))
			.then(()=>{
				this.initEpub()
			})
		}
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';
#read{
	position: relative;
	.mask{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 100;
	}
}

</style>
