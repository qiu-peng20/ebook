import {mapGetters,mapActions} from 'vuex'
import {addCSS} from './book.js'
import {saveLocation} from './localStorage.js'

export const storeShelfMixin = {
	computed:{
		...mapGetters([
			'isEditMode',
			'shelfList',
			'shelfSelected',
			'shelfTitleVisible'])
	},
	methods:{
		...mapActions([
			'setIsEditMode',
			'setShelfList',
			'setShelfSelected',
			'setShelfTitleVisible'
		])
	}
}

export const storeHomeMixin = {
	computed:{
		...mapGetters(['offsetY',
		'flapCardVisible',])
	},
	methods:{
		...mapActions(['setOffsetY',
		'setFlapCardVisible']),
		//点击跳转详情页
		showBookDetail(book){
			this.$router.push({
				path:'/store/detail',
				query:{
					fileName:book.fileName,
					category:book.category
				}
			})
		}
	}
}


export const eBookMixin = {
	computed:{
		...mapGetters(['fileName',
		'titleShow',
		'sizeShow',
		'defaultFontSize',
		'defaultFontFamily',
		'fontFamilyVisible',
		'defaultTheme',
		'bookAvailable',
		'progress',
		'section',
		'isPaginating',
		'currentBook',
		'navigation',
		'cover',
		'metadata',
		'paginate',
		'pagelist',
		'offsetY',
		'isBookmark'],
		)
	},
	data(){
		return{
			themeList:[
				{
					name:'default',
					style:{
						body:{
							'color':'#4c5059','background':'#cecece'
						}
					}
				},
				{
					name:'eye',
					style:{
						body:{
							'color':'#404c42','background':'#a9c1a9'
						}
					}
				},
				{
					name:'gold',
					style:{
						body:{
							'color': '#5c5b56','background':'#c6c2b6'
						}
					}
				},
				{
					name:'night',
					style:{
						body:{
							'color':'#cecece','background':'#0f1014'
						}
					}
				}
				
			]
		}
	},
	methods:{
		...mapActions(['setFileName',
		'setTitleShow',
		'setSizeShow',
		'setDefaultFontSize',
		'setDefaultFontFamily',
		'setFontFamilyVisible',
		'setDefaultTheme',
		'setBookAvailable',
		'setProgress',
		'setSection',
		'setIsPaginating',
		'setCurrentBook',
		'setNavigation',
		'setCover',
		'setMetadata',
		'setPaginate',
		'setPagelist',
		'setOffsetY',
		'setIsBookmark']),
		//初始化全局样式
		initGlobalStyle(){
			switch(this.defaultTheme){
				case 'default':
				addCSS('http://192.168.0.100:9999/theme/theme_default.css')
				break
				case 'eye':
				addCSS('http://192.168.0.100:9999/theme/theme_eye.css')
				break
				case 'gold':
				addCSS('http://192.168.0.100:9999/theme/theme_gold.css')
				break
				case 'night':
				addCSS('http://192.168.0.100:9999/theme/theme_night.css')
				break
				default:
				addCSS('http://192.168.0.100:9999/theme/theme_default.css')
				break
			}
		},

		//同步章节跟进度条
		refreshLocation(){
			const currentLocation = this.currentBook.rendition.currentLocation()
			const startCfi = currentLocation.start.cfi
			const progress = this.currentBook.locations.percentageFromCfi(startCfi)
			this.setSection(currentLocation.start.index)
			this.setProgress(Math.floor(progress*100))
			saveLocation(this.fileName, startCfi)
		},
		//渲染优化
		display(target,cd){
			if(target){
				this.currentBook.rendition.display(target).then(()=>{
					this.refreshLocation()
					if(cd)cd()
				})
			}else{
				this.currentBook.rendition.display().then(()=>{
					this.refreshLocation()
					if(cd)cd()
				})
			}
		},
		//使得其他部件消失
		hideTitleAndMenu(){
			// this.$store.dispatch('setTitleShow',false)
			this.setTitleShow(false)
			this.setSizeShow(-1)
			this.setFontFamilyVisible(false)
		},
		
	}
}
