<template>
	<div class="shelf-footer" v-if="isEditMode">
			<div class="shelf-footer-tab-wrapper" v-for="item in tabs" :key="item.index" @click.stop.prevent="onTabCliak(item)">
				<div class="shelf-footer-tab" :class="{'is-selected':isSelected}">
					<div class="icon-private tab-icon" v-if="item.index === 1 && !isPrivate"></div>
					<div class="icon-private-see tab-icon" v-if="item.index === 1 && isPrivate"></div>
					<div class="icon-download tab-icon" v-if="item.index === 2"></div>
					<div class="icon-shelf tab-icon" v-if="item.index === 3"></div>
					<span class="tab-text" :class="{'remove-text':item.index === 3}">{{label(item)}}</span>
				</div>
			</div>
	</div>
</template>

<script>
	import { storeShelfMixin} from '../../unit/mixin.js'
	import {saveBookShelf } from './../../unit/localStorage.js'
	export default{
		mixins:[storeShelfMixin],
		computed:{
			isSelected(){
				return this.shelfSelected && this.shelfSelected.length>0
			},
			isPrivate(){
				//判断图书是不是私密阅读状态
				if(!this.isSelected){
					return false
				}else{
					//每本书都是private的状态
					return this.shelfSelected.every((item)=>{
						item.private
					})
				}
			},
		},
		methods:{
			onComplete(){
				this.hidePopup()
				this.setIsEditMode(false)
				saveBookShelf(this.shelfList)
			},
			//隐藏
			hidePopup(){
				this.popupMenu.hide()
			},
			//显示
			setPrivate(){
				this.hidePopup()
				let isPrivate
				if(this.isPrivate){
					//判断是不是私密阅读
					isPrivate = false
				}else {
					isPrivate = true
				}
				this.shelfSelected.forEach((book)=>{
					book.private = isPrivate
				})
				this.hidePopup()
				this.setIsEditMode(false)//编辑状态
				saveBookShelf(this.shelfList)
				if(isPrivate){
					this.toast({
						text:'已经开启私密阅读'
					}).show()
				}else{
					this.toast({
						text:'已经关闭私密阅读'
					}).show()
				}
				
			},
			//书本移出书架功能实现
			removeSelected(){
				this.shelfSelected.forEach(selected=>{
					//如果selected不相等书留下
					this.setShelfList(this.shelfList.filter(book=>book !== selected))
				})
				this.setShelfSelected([])
				this.onComplete()
			},
			//显示私密阅读
			showPrivate(){
				this.popupMenu = this.popup({
					title:'开启后，所选图书的阅读记录将不会对外公开',
					btn:[
						{
							text:'确认',
							click:()=>{
								this.setPrivate()
							}
						},
						{
							text:'取消',
							click:()=>{
								this.hidePopup()
							}
						},
					]
				}).show()
			},
			showDownLoad(){
				this.popupMenu = this.popup({
					title:'开启后，所选图书将被缓存',
					btn:[
						{
							text:'确认',
							click:()=>{
								
							}
						},
						{
							text:'取消',
							click:()=>{
								this.hidePopup()
							}
						},
					]
				}).show()
			},
			deleteBook(){
				this.popupMenu = this.popup({
					title:'确认将所选书本移出书架',
					btn:[
						{
							text:'确认',
							click:()=>{
								this.removeSelected()
							}
						},
						{
							text:'取消',
							click:()=>{
								this.hidePopup()
							}
						},
					]
				}).show()
			},
			label(item){
				switch(item.index){
					case 1 : 
					return this.isPrivate?item.label2:item.label
					default:
					return item.label
				}
			},
			onTabCliak(item){
				//当编辑事件开启的时候才可以点击
				if(!this.isSelected){
					return
				}
				switch(item.index){
					case 1:this.showPrivate()
					break
					case 2:this.showDownLoad()
					break
					case 3:this.deleteBook()
					break
					default:
					break
				}
			}
		},
		data(){
			return{
				tabs:[
					{
						label:'私密阅读',
						label2:'取消私密阅读',
						index:1
					},
					{
						label:'下载到本地',
						label2:'移出本地',
						index:2
					},
					{
						label:'移出书架',
						index:3
					}
				],
				popupMenu:null
			}
		}
	}
</script>

<style lang="scss">
	@import './../../assets/style/global.scss';
	.shelf-footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: px2rem(48);
		display: flex;
		z-index: 120;
		.shelf-footer-tab-wrapper{
			flex:1;
			width: 33.33%;
			height: 100%;
			.shelf-footer-tab{
				width: 100%;
				height: 100%;
				@include columnCenter;
				opacity: 0.5;
				&.is-selected{
					opacity: 1;
				}
				.tab-icon{
					font-size: px2rem(20);
					color: #666;
					&.icon-shelf{
						color: red;
					}
				}
				.tab-text{
					font-size: px2rem(12);
					margin-top: px2rem(5);
					color: #666;
					opacity: 0.5;
					&.remove-text{
						color: red;
					}
				}
				
			}
		}
	}
</style>
