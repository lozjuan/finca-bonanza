<template>
	<div v-bind:class="{'tran2-lg': $mq === 'lg', 'tran2-md': $mq === 'md', 'tran2-mobile': $mq === 'iphone'}">
	</div>
</template>

<style type="text/css">
	.transition2 {
		background: url(../assets/transition2-image.jpg) no-repeat center fixed;
	  	height: 50vh;
	  	background-size: cover;
	  	background-attachment: fixed !important;
	}
	.tran2-lg, .tran2-md, .tran2-mobile {
		background: url(../assets/transition-image.jpg) no-repeat center fixed;
	  	height: 50vh;
	  	background-size: cover;
	  	background-attachment: fixed !important;
	}

	.tran2-mobile {
		margin-top: 30rem;
	}
</style>