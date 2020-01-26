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
							<img v-if="hover === 1" id="icons" src="../assets/plant.svg">
							<img v-if="hover === 1" id="text" src="../assets/variety.svg">							
							<img v-if="hover === 2" id="icons" src="../assets/001-smart-farm.svg">
							<img v-if="hover === 2" id="text" src="../assets/harvest.svg">
							<img v-if="hover > 2" id="icons" src="../assets/grass.svg">
							<img v-if="hover > 2" id="text" src="../assets/weed.svg">
						</li>
						<li>
							<img v-if="hover === 1" id="icons" src="../assets/food.svg">
							<img v-if="hover === 1" id="text" src="../assets/flavor.svg">
							<img v-if="hover === 2" id="icons" src="../assets/031-computer.svg">
							<img v-if="hover === 2" id="text" src="../assets/technic.svg">
							<img v-if="hover > 2" id="icons" src="../assets/pesticide.svg">
							<img v-if="hover > 2"  id="text" src="../assets/pesticides.svg">
						</li>
						<li>
							<img v-if="hover === 1" id="icons" src="../assets/premium.svg">
							<img v-if="hover === 1" id="text" src="../assets/prix.svg">
							<img v-if="hover === 2" id="icons" src="../assets/sun.svg">
							<img v-if="hover === 2" id="text" src="../assets/dry.svg">
							<img v-if="hover > 2" id="icons" src="../assets/water.svg">
							<img v-if="hover > 2" id="text" src="../assets/demucilating.svg">
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

#text {
	width: 90%;
	padding: 1rem;
}

#tabs-content ul li {
	display: flex;
	align-items: center;
}

#icons { 
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