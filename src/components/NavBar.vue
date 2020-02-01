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
			  	<div class="navbar-brand">
        			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen =!isOpen" v-bind:class="{'is-active': isOpen}">
            			<span aria-hidden="true"></span>
            			<span aria-hidden="true"></span>
            			<span aria-hidden="true"></span>
        			</a>
        		</div>
	        	<div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
	            	<div class="navbar-end">
	                	<router-link to="product-title" class="navbar-item is-tab">Our Coffee</router-link>
	                	<router-link to="farm-title" class="navbar-item is-tab">Bonanza Farm Project</router-link>
	                	<router-link to="contact-title" class="navbar-item is-tab">Contact Us</router-link>
	            	</div>
	        	</div>
			</div>	
		</div>
	</header>
</template>
<script type="text/javascript">
import { ResponsiveDirective } from "vue-responsive-components"
export default {
  props: ["post"],
  directives: {
    responsive: ResponsiveDirective
  }, 
  data: function() {
        return {
            isOpen: false
        }
    }
}

</script>
<style type="text/css">
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