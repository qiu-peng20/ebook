export function addCSS(href){
	const  link = document.createElement('link')
	link.setAttribute('rel','stylesheet')//stylesheet表示样式表
	link.setAttribute('type','text/css')
	link.setAttribute('href',href)
	document.getElementsByTagName('head')[0].appendChild(link)
}

//拍平数组，运用了ES6跟递归的概念
export function flatten(array){
			return [].concat(...array.map(item =>
				[].concat(item, ...flatten(item.subitems))
			))
		}
		