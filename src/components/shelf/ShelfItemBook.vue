<template>
	<div class="shelf-item-book">
		<img :src="data.cover" class="shelf-item-book-cover">
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
	.shelf-item-book{
		width: 100%;
		height: 100%;
		
		.shelf-item-book-cover{
			width: 100%;
			height: 100%;
			
		}
	}
</style>
