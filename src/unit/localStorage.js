import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage(key,value){
	return localStorage.set(key,value)
}


export function getLocalStorage(key){
	return localStorage.get(key)
}


export function removeLocalStorage(key){
	return localStorage.delete(key)
}

export function clearLocalStorage(key){
	return localStorage.clear()
}

export function saveBookShelf(shelf){
	return getLocalStorage(shelf,'shelf')
}

export function getBookShelf(){
	return getLocalStorage('shelf')
}

export function setBookObject(fileName,key,value){
	let book = getLocalStorage(`${fileName}-into`)
	if(!book){
		book={}
	}
	book[key] = value
	setLocalStorage(`${fileName}-into`,book)
}

export function getBookObject(fileName,key){
	let book = getLocalStorage(`${fileName}-into`)
	if(book){
		return book[key]
	}else{
		return null
	}
}

export function getFontSize(fileName) {
  return getBookObject(fileName, 'fontSize')
}

export function saveFontSize(fileName, fontSize) {
  return setBookObject(fileName, 'fontSize', fontSize)
}

export function getFontFamily(fileName) {
  return getBookObject(fileName, 'fontFamily')
}

export function saveFontFamily(fileName, font) {
  return setBookObject(fileName, 'fontFamily', font)
}

export function getTheme(fileName) {
  return getBookObject(fileName, 'Theme')
}

export function saveTheme(fileName, theme) {
  return setBookObject(fileName, 'Theme', theme)
}

export function saveLocation(fileName,location){
	return setBookObject(fileName,'location' ,location)
}

export function getLocation(fileName){
	return getBookObject(fileName,'location')
}
