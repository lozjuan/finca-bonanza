<template>
	<header> 
		<div v-if="$mq === 'md' || $mq === 'lg'" class="navbar">
			<div class="logo">
				<a id="logo-link" href="#" v-scroll-to="'.navbar'">
					<img id="logo" src="../assets/logo.svg"> 
					<img id="brand-title" src="../assets/brand-title.svg">
				</a>	
			</div>
			<nav class="topics">
				<ul >
					<li><a href="#" v-scroll-to="'.product-title'"><img src="../assets/our-coffee.svg"></a></li>
					<li><a href="#" v-scroll-to="'.farm-title'"><img id="bfp" src="../assets/bfp.svg"></a></li>
					<li><a href="#" v-scroll-to="'#contact-title'"><img id="contact" src="../assets/contact.svg"></a></li>
				</ul>
			</nav>
		</div>
		<div v-if="$mq === 'iphone'" class="navbar-mobile">
			<div class="logo">
		  		<a id="logo-link" href="#" v-scroll-to="'.navbar'">
					<img id="logo" src="../assets/logo.svg"> 
					<img id="brand-title" src="../assets/brand-title.svg">
				</a>
	        	<div class="navbar-menu">
	        		<a href="javascript:void(0);" class="icon" v-on:click="openMenu()">
    					<i class="fa fa-bars"></i>
  					</a>
	            	<div id="menu-list">
	                	<a href="#" v-scroll-to="'.product-title'" class="navbar-item is-tab">Our Coffee</a>
	                	<a href="#" v-scroll-to="'.farm-title'" class="navbar-item is-tab">Bonanza Farm Project</a>
	                	<a href="#" v-scroll-to="'#contact-title'" class="navbar-item is-tab">Contact Us</a>
	            	</div>
	        	</div>
			</div>	
		</div>
	</header>
</template>
<script type="text/javascript">
export default {
	methods: {
		openMenu() {
			var x = document.getElementById("menu-list");
			if (x.style.display === "flex") {
				x.style.display = "none";
			} else {
				x.style.display = "flex";
			}
		}
	}
}
</script>
<style type="text/css">
	.navbar-menu #menu-list {
	  	display: none;
	}
	.navbar-mobile {
		position: fixed;
	}
	#menu-list {
		display: flex;
    	flex-direction: column;
    	width: 100%;
	    align-items: self-start;
	}
	#menu-list a {
		font-family: Optima;
		color: #52482D;
		font-weight: bold;
	}
	.navbar-menu a.icon {
	  display: flex;
	  position: relative;
      float: right;
      font-size: 2.5rem;
      z-index: 1;
	}
	.navbar-menu a {
	  padding: 10px 19px;
      text-decoration: none;
      font-size: 13px;
	}
	.navbar-menu {
		position: fixed;
	    top: 0;
	    height: 4rem;
	    width: 100%;
	    opacity: 0.5;
	    background-color: white;
	    z-index: 1;	
	}
	.navbar {
	    position: fixed;
	    top: 0;
	    width: 100%;
	    opacity: 0.5;
	    background-color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 1;		
	}
	.topics ul {
		display: flex;
  		list-style: none;
  		margin-right: 2rem;
	}
	.topics ul li a img {
		width: 60%;
	} 
	.topics ul li {
		width: 10rem;
	} 
	#bfp {
	    width: 115%;
    	margin-bottom: -0.2rem;
	}
	#contact {
		margin-left: 2rem;
	}
	#logo {
		width: 15%;
	    margin-top: 0.5rem;
	    margin-left: -2rem;
	    padding: 0.3rem;
	}

	#brand-title {
		padding-left: 0.5rem;
		width: 25%;
	}

	#logo-link {
		margin-left: 3rem;
		width: 20rem;
		height: 4rem;
		display: flex;
	}
</style>