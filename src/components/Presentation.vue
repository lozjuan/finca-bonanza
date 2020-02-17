<template>
	<div v-bind:class="{'presentation-lg': $mq === 'lg', 'presentation-md': $mq === 'md', 'presentation-mobile': $mq === 'iphone'}">
		<img src="../assets/brand.svg">
	</div>
</template>	

<style type="text/css">
	.presentation-md, .presentation-lg { 
	  padding: 5rem 0;
      background: url(../assets/landing-image_s.jpg) no-repeat center fixed;
	  height: 100vh;
	  background-size: cover;
	  display: flex;
	  flex-direction: column;
	  background-attachment: fixed !important;
	  align-items: center;
	}

	.presentation-mobile {
	  padding: 5rem 0;
      background: url(../assets/landing-image_mobile.jpg) no-repeat bottom fixed;
	  height: 100vh;
	  background-size: cover;
	  display: flex;
	  flex-direction: column;
	  background-attachment: fixed !important;
	  align-items: center;
	}

	.presentation-md img, .presentation-lg img {
	  width: 40%;
	}
	.presentation-mobile img{
	  width: 60%;
	}
</style>
