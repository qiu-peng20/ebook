//跳转回书城首页
export function gotoStoreHome(vue){
	 vue.$router.push({
		 path:'/store/home'
	 })
}

//给response添加数据
export function appendAddToShelf(list){
	list.push({
		id:-1,
		type:3
	})
	return list
}


export function removeAddFromShelf(list){
	return list.filter((item)=>{
		item.type !== 3
	})
}

export function categoryText(category, vue) {
  switch (category) {
    case 1:
      return '计算机科学'
    case 2:
      return '社会科学'
    case 3:
      return '经济学'
    case 4:
      return '教育学'
    case 5:
      return '工程学'
    case 6:
      return '环境科学'
    case 7:
      return '地理'
    case 8:
      return '历史'
    case 9:
      return '法规'
    case 10:
      return '生命科学'
    case 11:
      return '文学'
    case 12:
      return '文物生物学'
    case 13:
      return '商业科学'
    case 14:
      return '音乐学'
  }
}