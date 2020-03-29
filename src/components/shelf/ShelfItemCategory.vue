<template>
	<div class="shelf-item-category">
		<div class="shelf-item-category-list">
			<div class="shelf-item-category-item" v-for="(item,index) in data.itemList" :key="index">
				<img :src="item.cover" class="shelf-item-category-img" >
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			data:Object
		}
	}
</script>

<style lang="scss">
@import './../../assets/style/global.scss';
.shelf-item-category{
	height: 100%;
	width: 100%;
	overflow: hidden;
	.shelf-item-category-list{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		height: 100%;
		width: 100%;
		.shelf-item-category-item{
			flex: 0 0 33.33%;
			width: 33.33%;
			height: 33.33%;
			padding: px2rem(2);
			box-sizing: border-box;
			.shelf-item-category-img{
				width: 100%;
				height: 100%;
			}
		}
	}
}
	
</style>
