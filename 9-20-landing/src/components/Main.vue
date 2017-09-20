<template>
	<div class="main">
		<h1>{{msg}}</h1>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'Welcome to the Vue.js'
			}
		}
	}
</script>
<style>
	.main{
		font-size: 14px;
		color: #58666e;
		background: url(../assets/31.jpg);
		background-size: cover;
	}
</style>