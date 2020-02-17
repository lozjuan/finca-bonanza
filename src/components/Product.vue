<template>
	<div>
		<div class="product-title"><img class="product-title" src="../assets/product-title.svg"></div>
		<div v-bind:class="{'product-content': $mq === 'md', 'product-content-lg': $mq ==='lg', 'product-content-mobile': $mq === 'iphone'}">
			<div v-bind:class="{'product-photos': $mq === 'md', 'product-photos-lg': $mq ==='lg', 'product-photos-mobile': $mq === 'iphone'}">
				<agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay>
					<div class="slide ">
						<img src="../assets/coffee_2.jpg">
					</div>
					<div class="slide ">
						<img src="../assets/coffee_3.jpg">
					</div>
					<div class="slide">
						<img src="../assets/coffee_1.jpg">
					</div>
					<div class="slide ">
						<img src="../assets/coffee_4.jpg">
					</div>
					<div class="slide ">
						<img src="../assets/coffee_5.jpg">
					</div>
					<div class="slide ">
						<img src="../assets/coffee_6.jpg">
					</div>
				</agile>
			</div>
			<div v-bind:class="{'product-description': $mq === 'md', 'product-description-lg': $mq === 'lg', 'product-description-mobile': $mq === 'iphone'}">
				<div v-bind:class="{'tabs': $mq === 'md', 'tabs-lg': $mq === 'lg'}">
					<div v-bind:class="{'product-tabs': $mq === 'md', 'product-tabs-lg': $mq === 'lg', 'product-tabs-mobile': $mq === 'iphone'}">
						<img @mouseover="hover = 1"							
						src="../assets/coffee-bean.svg">
						<img @mouseover="hover = 2"
						@mouseleave="hover = 1"							
						src="../assets/024-agronomy.svg">
						<img @mouseover="hover = 3"
						@mouseleave="hover = 1"	
						src="../assets/green-earth.svg">
					</div>
				</div>
				<div v-bind:class="{'tabs-content': $mq === 'md', 'tabs-content-lg': $mq === 'lg', 'tabs-content-mobile': $mq === 'iphone'}">
					<ul>
						<li>
							<img v-if="hover === 1" src="../assets/plant.svg">
							<p v-if="hover === 1" class="variety-text">
								We grow the <b>Castillo</b> variety at an altitude of 1900 meters.
								This variety, very close to Caturra, produces a smooth coffee with pronounced aromatic perfume. 
							</p>
							<img v-if="hover === 2" src="../assets/001-smart-farm.svg">
							<p v-if="hover === 2" class="variety-text">
								All the beans are manually harvested and selected. Our main goal is to collect the beans at the point of perfect maturity.  
							</p>
							<img v-if="hover > 2" src="../assets/grass.svg">
							<p v-if="hover > 2" class="variety-text">
								We practice mechanical and manual weed control. Out of respect for the workers and the environment, we do not use herbicides
							</p>
						</li>
						<li>
							<img v-if="hover === 1" src="../assets/food.svg">
							<p v-if="hover === 1" class="variety-text">
								Intense flavor with notes of almonds and caramel, we offer a full bodied coffee with slight notes of green apple acids. 
							</p>
							<img v-if="hover === 2" src="../assets/031-computer.svg">
							<p v-if="hover === 2"  class="variety-text">
								We apply a technified coffee processing and we use Ecomill technology equipment for fermentation and coffee washing. 
							</p>
							<img v-if="hover > 2" src="../assets/pesticide.svg">
							<p v-if="hover > 2"  class="variety-text">
								No pesticides are sprayed on plants. We keep the crop as clean as possible and protect spiders and others insects regulators. 
							</p>
						</li>
						<li>
							<img v-if="hover === 1" src="../assets/premium.svg">
							<p v-if="hover === 1" class="variety-text">
								Our 2019 harvest got a Q-grade of 86. The coffee won the first place at the Boyaca specialty coffee fair.  
							</p>
							<img v-if="hover === 2" src="../assets/sun.svg">
							<p v-if="hover === 2" class="variety-text">
								The beans are 100% sun-dried. The temperature in the greenhouses used for drying stays around 86 °F.  
							</p>
							<img v-if="hover > 2" src="../assets/water.svg">
							<p v-if="hover > 2" class="variety-text">
								Thanks to our demucilating machine very little water is needed for the bean processing.  2.2 pounds / 0.2 liters.   
							</p>
						</li>
					</ul>
				</div>
			</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      hover: 1,
    };
  }
}
</script>

<style type="text/css">
p {
	padding-left: 1rem;
	text-align: center;
	font-family: Optima;
	color: #52482D;
}
.tabs-content ul li, .tabs-content-lg ul li{
	display: flex;
	align-items: center;
}
.tabs-content ul li img { 
	width: 30px;
}
.tabs-content-lg ul li img { 
	width: 40px;
}
.tabs-content-lg {
	margin-top: -35px;
}
.tabs-content-lg ul li p { 
	padding-top: 1rem;
	padding-bottom: 1rem; 
	padding-left: 2rem;
	padding-right: 4rem;
	font-size: 18px;
}

.tabs-content-mobile {
	width: 85%;
	margin-left: 2rem; 
}
.tabs-content-mobile ul li img {
	width: 1.5rem;
}
.tabs-content-mobile ul li {
	display: flex;
	margin-left: 2rem;
    margin-right: 2rem;
}
.tabs-content ul li p {
	padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 2rem;
}
.product-title {
	width: 20rem;
	margin: 1rem auto;
}
.product-content, .product-content-lg {
	margin-top: 2rem;
	display: flex;
	justify-content: space-around;
	height: 30rem;	
}
.product-description-lg {
	width: 255%;
	margin-left: -10rem;
}

.product-description {
	margin-top: -1rem;
	width: 255%;
	padding-right: 5rem;
	padding-left: 5rem;
}
.product-photos {
	margin-top: -1rem;
	width: 230rem;
	padding-right: 5rem;
	padding-left: 5rem;
	padding-bottom: 5rem;

}
.product-photos-lg {
	margin-left: 3rem;
	margin-top: -1rem;
	width: 230rem;
	padding-right: 5rem;
	padding-left: 5rem;
	padding-bottom: 5rem;
}
.product-photos-mobile {
	display: flex;
    justify-content: center;
    max-width: 100%
}
.product-content-mobile {
	display: flex;
	flex-direction: column-reverse;
}
.slide img {
	width: 100%;
}
.slide {
	display: block;
	object-fit: cover;
	width: 100%;
}

.product-photos-mobile .agile {
	width: 20rem;
} 
.agile {
	width: 35rem;
	flex-direction: column;
}
.agile button {
	background-color: transparent;
	border: 1px solid black;
	cursor: pointer;
	display: block;
	height: 10px;
	font-size: 0;
	line-height: 0;
	margin: 0;
	padding: 0;
	transition-duration: .3s;
	width: 10px;
}
.tabs-lg {
	display: flex;
	justify-content: center;
}
.tabs {
	height: 3rem;
	display: flex;
}
.tabs-content ul {
	list-style: none;
}
.product-tabs {
	width: 30rem;
}
.product-tabs-lg img {
	width: 12%;
	padding: 15px;
}
.product-tabs-mobile img {
	width: 2rem;
	padding: 0.5rem;
}
.product-tabs  img {
	width: 8%;
	padding: 15px;
}
</style>