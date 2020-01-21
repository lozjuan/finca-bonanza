<template>
	<div>
		<div id="product-title"><img id="product-title" src="../assets/product-title.svg"></div>
		<div id="product-content">
			<div id="product-photos">
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
			<div id="product-description">
				<div id="tabs">
					<div id="product-tabs">
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
				<div id="tabs-content">
					<ul>
						<li>
							<img v-if="hover === 1" src="../assets/plant.svg">
							<p v-if="hover === 1" id="variety-text">
								We grow the <b>Castillo</b> variety at 1900 meters altitude.
								This variety, very close to Caturra, produces a smooth coffee with pronounced aromatic perfume. 
							</p>
							<img v-if="hover === 2" src="../assets/001-smart-farm.svg">
							<p v-if="hover === 2" id="variety-text">
								All the beans are manually harvested and selected. Our main goal is to collect the beans at the point of perfect maturity.  
							</p>
							<img v-if="hover > 2" src="../assets/grass.svg">
							<p v-if="hover > 2" id="variety-text">
								We practice mechanical and manual weed control. Out of respect for the workers and the environment, we do not use herbicides
							</p>
						</li>
						<li>
							<img v-if="hover === 1" src="../assets/food.svg">
							<p v-if="hover === 1" id="variety-text">
								With intense flavor with notes of almonds and caramel, we offer a full bodied coffee with slight notes of green apple acids. 
							</p>
							<img v-if="hover === 2" src="../assets/031-computer.svg">
							<p v-if="hover === 2"  id="variety-text">
								We apply a technified coffee processing and we use Ecomill technology equipment for fermentation and coffee washing. 
							</p>
							<img v-if="hover > 2" src="../assets/pesticide.svg">
							<p v-if="hover > 2"  id="variety-text">
								No pesticides are sprayed on plants. We keep the crop as clean as possible and protect spiders and others insects regulators. 
							</p>
						</li>
						<li>
							<img v-if="hover === 1" src="../assets/premium.svg">
							<p v-if="hover === 1" id="variety-text">
								Our 2019 harvest got a Q-grade of 86. The coffee won the first place at the Boyaca specialty coffees fair.  
							</p>
							<img v-if="hover === 2" src="../assets/sun.svg">
							<p v-if="hover === 2" id="variety-text">
								The beans are 100% sun-dried. The temperature in the greenhouses used for drying stays around 86 °F.  
							</p>
							<img v-if="hover > 2" src="../assets/water.svg">
							<p v-if="hover > 2" id="variety-text">
								Thanks to our demicilating machine very little water is needed for the bean processing.  2.2 pounds / 0.2 liters.   
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
}
#tabs-content ul li {
	display: flex;
	align-items: center;
}

#tabs-content ul li img { 
	width: 30px;
}

#product-title {
	width: 20rem;
	margin: 1rem auto;
}
#product-content {
	margin-top: 2rem;
	display: flex;
	justify-content: space-around;
	height: 30rem;	
}
#product-description {
	margin-top: -1rem;
	width: 255%;
	padding-right: 5rem;
	padding-left: 5rem;
}
#product-photos {
	margin-top: -1rem;
	width: 230rem;
	padding-right: 5rem;
	padding-left: 5rem;
	padding-bottom: 5rem;

}

.slide img {
	width: 100%;
}

.slide {
	display: block;
	object-fit: cover;
	width: 100%;
}

.agile {
	width: 35rem;
	flex-direction: column;
	position: absolute;
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

#tabs {
	height: 3rem;
	display: flex;
}

#tabs-content ul {
	list-style: none;
}

#product-tabs  img {
	width: 8%;
	padding: 15px;
	
}
</style>