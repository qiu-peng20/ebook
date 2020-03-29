const book = {
	state:{
		fileName:'',
		titleShow:false,
		sizeShow:-1 ,//-1不显示，0显示字体大小，1显示字体样式，2显示进度条，3显示目录文件
		defaultFontSize:16,
		defaultFontFamily: 'Default',
		fontFamilyVisible: false,
		defaultTheme: 'default',
		bookAvailable: false,
		progress: 0,//定义进度条进度
		section: 0,//定义章节的位置
		isPaginating: true,
		currentBook: null,
		navigation: null,
		cover: null,
		metadata: null,
		paginate: '',
		pagelist: null,
		offsetY: 0,
		isBookmark: null
	},
	mutations:{
		'SET_FILENAME':(state,fileName)=>{
			state.fileName = fileName
		},
		'SET_TITLESHOW':(state,titleShow)=>{
			state.titleShow = titleShow
		},
		'SET_SIZESHOW':(state,sizeShow)=>{
			state.sizeShow = sizeShow
		},
		'SET_DEFAULT_FONT_SIZE':(state,defaultFontSize)=>{
			state.defaultFontSize = defaultFontSize
		},
		'SET_DEFAULT_FONT_FAMILY': (state, font) => {
		  state.defaultFontFamily = font
		},
		'SET_FONT_FAMILY_VISIBLE': (state, visible) => {
		  state.fontFamilyVisible = visible
		},
		'SET_DEFAULT_THEME': (state, theme) => {
		  state.defaultTheme = theme
		},
		'SET_BOOK_AVAILABLE': (state, bookAvailable) => {
		  state.bookAvailable = bookAvailable
		},
		'SET_PROGRESS': (state, progress) => {
		  state.progress = progress
		},
		'SET_SECTION': (state, section) => {
		  state.section = section
		},
		'SET_IS_PAGINATING': (state, isPaginating) => {
		  state.isPaginating = isPaginating
		},
		'SET_CURRENT_BOOK': (state, currentBook) => {
		  state.currentBook = currentBook
		},
		'SET_NAVIGATION': (state, navigation) => {
		  state.navigation = navigation
		},
		'SET_COVER': (state, cover) => {
		  state.cover = cover
		},
		'SET_METADATA': (state, metadata) => {
		  state.metadata = metadata
		},
		'SET_PAGINATE': (state, paginate) => {
		  state.paginate = paginate
		},
		'SET_PAGELIST': (state, pagelist) => {
		  state.pagelist = pagelist
		},
		'SET_OFFSETY': (state, offsetY) => {
		  state.offsetY = offsetY
		},
		'SET_IS_BOOKMARK': (state, isBookmark) => {
		  state.isBookmark = isBookmark
		}
	}
}

export default book