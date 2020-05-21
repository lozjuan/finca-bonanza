<template>
	<div  v-bind:class="{'tran-lg': $mq === 'lg', 'tran-md': $mq === 'md', 'tran-mobile': $mq === 'iphone'}">
	</div>
</template>

<style type="text/css">
	.tran-lg, .tran-md {
		background: url(../assets/transition-image.jpg) no-repeat center fixed;
	  	height: 50vh;
	  	background-size: cover;
	  	background-attachment: fixed !important;
	  	max-width: 100%;
	}
	.tran-mobile {
		background: url(../assets/transition-image-mobile.jpg) no-repeat;
	  	height: 40vh;
	  	background-attachment: fixed !important;
	  	max-width: 100%;
	}	
</style>