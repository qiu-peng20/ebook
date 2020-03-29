import Mock from 'mockjs'
import shelf from './bookShelf.js'
import home from './bookHome.js'
import list from './bookList.js'
import flatlist from './bookFlatList.js'

Mock.mock(/\/book\/home/,'get',home)
Mock.mock(/\/book\/shelf/,'get',shelf)
Mock.mock(/\/book\/list/,'get',list)
Mock.mock(/\/book\/flatlist/,'get',flatlist)


export default Mock