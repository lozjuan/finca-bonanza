<template>
	<div  v-bind:class="{'tran-lg': $mq === 'lg', 'tran-md': $mq === 'md', 'tran-mobile': $mq === 'iphone'}">
	</div>
</template>

<style type="text/css">
	.tran-lg, .tran-md, .tran-mobile {
		background: url(../assets/transition-image.jpg) no-repeat center fixed;
	  	height: 50vh;
	  	background-size: cover;
	  	background-attachment: fixed !important;
	}

	.tran-mobile {
		margin-top: 30rem;
	}
</style>