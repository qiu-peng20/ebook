<template>
  <div id="app">	
		<router-view/>
  </div>
</template>

<script>
	
import {mapGetters} from 'vuex'	
export default {
}
document.addEventListener('DOMContentLoaded',()=>{
		const html = document.documentElement
		let fontSize = window.innerWidth/10
		fontSize = fontSize>50?50:fontSize
		html.style.fontSize = fontSize + 'px'
	})
</script>

<style  scoped lang="scss">
	@import "./assets/style/global.scss";
	#app{
		height: 100%;
		width: 100%;
		overflow: hidden;
		background: #808080;
	}
	
</style>
