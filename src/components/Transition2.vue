<template>
	<div v-bind:class="{'tran2-lg': $mq === 'lg', 'tran2-md': $mq === 'md', 'tran2-mobile': $mq === 'iphone'}">
	</div>
</template>

<style type="text/css">
	.tran2-lg, .tran2-md, {
		background: url(../assets/transition2-image.jpg) no-repeat center fixed;
	  	height: 50vh;
	  	background-size: cover;
	  	background-attachment: fixed !important;
	  	max-width: 100%;
	}
	.tran2-mobile {
		background: url(../assets/transition2-image-mobile.jpg) no-repeat ;
	  	height: 40vh;
	  	background-size: cover;
	  	background-position: center center;
	  	max-width: 100%;
	}
</style>