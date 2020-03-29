<template>
	<div class="book-mark"></div>
</template>

<script>
	export default{
		// props:[
		// 	{color:}
		// ]
	}
</script>

<style lang="scss">
@import './../../assets/style/global.scss';	
	.book-mark{
		width: 0;
		height: 0;
		border-width: px2rem(35) px2rem(10) px2rem(10) px2rem(10);
		border-style: solid;
		border-color: white white transparent white;
		opacity:0.5;
	}
	
</style>
