<template>
	<div class="ebook-loading">
		<div class="ebook-loading-wrapper">
			<div class="ebook-loading-item" >
			</div>
			<div class="ebook-loading-center"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './../../assets/style/global.scss';
	.ebook-loading{
		position: relative;
		z-index: 500;
		width: px2rem(63);
		height: px2rem(40);
		background: transparent;
		border: px2rem(1.5) solid #d7d7d7;
		border-radius: px2rem(3);
		.ebook-loading-wrapper{
			display: flex;
			height: 100%;
			width: 100%;
			.ebook-loading-item{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: px2rem(7) 0;
				.ebook-loading-line-wrapper{
					flex: 1;
					@include left;
					padding: px2rem(7) 0 ;
					
				}
			}
			.ebook-loading-center{
				position: absolute;
				left: 50%;
				top: 0;
				height: 100%;
				width: px2rem(1.5);
				background: #d7d7d7;
			}
		}
	}
</style>
