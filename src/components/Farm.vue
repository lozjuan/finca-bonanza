<template>
	<div>
		<div id="farm-title"><img src="../assets/project-title.svg"></div>
		<div id="farm-content">
			<div id="farm-description">
				<div id="tabs">
					<div id="farm-tabs">
						<img @mouseover="hover = 1"							
						src="../assets/043-farmer.svg">
						<img @mouseover="hover = 2"
						@mouseleave="hover = 1"							
						src="../assets/maps-and-location.svg">
						<img @mouseover="hover = 3"
						@mouseleave="hover = 1"							
						src="../assets/hands-and-gestures.svg">
					</div>
				</div>
				<div id="tabs-content">
					<ul>
						<li>
							<img v-if="hover === 1" id="icons" src="../assets/about-us.svg">
							<img v-if="hover === 1" id="text" src="../assets/about.svg">								 
							<img v-if="hover === 2" id="icons" src="../assets/pin.svg">
							<img v-if="hover === 2" id="text" src="../assets/loc.svg">
							<img v-if="hover > 2" id="icons" src="../assets/cow.svg">
							<img v-if="hover > 2" id="text" src="../assets/cattle.svg">
						</li>
						<li>
							<img v-if="hover === 1" id="icons" src="../assets/home-delivery-of-goods.svg">
							<img v-if="hover === 1" id="text" src="../assets/consumers.svg">
							<img v-if="hover === 2" id="icons" src="../assets/mountain.svg">
							<img v-if="hover === 2" id="text" src="../assets/altitude.svg">
							<img v-if="hover > 2" id="icons" src="../assets/water-sources.svg">
							<img v-if="hover > 2" id="text" src="../assets/water-source.svg">
						</li>
						<li>
							<img v-if="hover === 1" id="icons" src="../assets/044-connect.svg">
							<img v-if="hover === 1" id="text" src="../assets/workers.svg">
							<img v-if="hover === 2" id="icons" src="../assets/weather.svg">
							<img v-if="hover === 2" id="text" src="../assets/weather-2.svg">
							<img v-if="hover > 2" id="icons" src="../assets/forest.svg">
							<img v-if="hover > 2" id="text" src="../assets/forest-2.svg"> 								
						</li>
					</ul>
				</div>
			</div>
			<div id="farm-photos">
				<agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay>
					<div class="slide ">
						<img src="../assets/farm_1.jpg">
					</div>
					<div class="slide ">
						<img src="../assets/farm_2.jpg">
					</div>
					<div class="slide">
						<img src="../assets/farm_3.jpg">
					</div>
					<div class="slide ">
						<img src="../assets/farm_4.jpg">
					</div>
					<div class="slide ">
						<img src="../assets/farm_5.jpg">
					</div>
					<div class="slide ">
						<img src="../assets/farm_6.jpg">
					</div>
				</agile>
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
	div ul {
		padding: 0px;
	}

	#farm-title {
		width: 20rem;
		margin: 1rem auto;
	}
	#farm-content {
		margin-top: 2rem;
		display: flex;
		justify-content: space-around;
		height: 30rem;	
	}
	#farm-description {
		padding-right: 5rem;
		padding-left: 5rem;
		margin-top: -1rem;
    	width: 255%;
	}
	#farm-title img {
	    margin-top: 1rem;
	}
	#farm-photos {
		width: 230rem;
		padding-right: 5rem;
		padding-left: 5rem;
		padding-bottom: 5rem;
	}

	#farm-photos img {
	    height: 100%;
	}

	#farm-tabs img {
		width: 8%;
		padding: 15px;
	}
</style>