<template>
	<div>
		<div class="farm-title"><img src="../assets/project-title.svg"></div>
		<div class="farm-content">
			<div v-bind:class="{'farm-description': $mq === 'md', 'farm-description-lg': $mq === 'lg'}">
				<div  v-bind:class="{'tabs': $mq === 'md', 'tabs-lg': $mq === 'lg'}">
					<div v-bind:class="{'farm-tabs': $mq === 'md', 'farm-tabs-lg': $mq === 'lg'}">
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
				<div v-bind:class="{'tabs-content': $mq === 'md', 'tabs-content-lg': $mq === 'lg'}">
					<ul>
						<li>
							<img v-if="hover === 1" src="../assets/about-us.svg">
							<p v-if="hover === 1" class="us-text">
								We are a young family project, passionate about coffee and nature. 
								We work for high quality coffee and environmental preservation. 
							</p>
							<img v-if="hover === 2" src="../assets/pin.svg">
							<p v-if="hover === 2" class="us-text">
								The farm is located in the municipality of Coper Boyaca 60 miles north of Bogota, Colombia.
							</p>
							<img v-if="hover > 2" src="../assets/cow.svg">
							<p v-if="hover > 2" class="us-text">
								We are replacing livestock land with coffee crops, reducing methane emissions and creating employment. We are an animal-friendly project.
							</p>
						</li>
						<li>
							<img v-if="hover === 1" src="../assets/home-delivery-of-goods.svg">
							<p v-if="hover === 1" class="us-text">
								We work to get coffee beans from our farm directly to consumers. We would love to send our coffee to your restaurant, bar or company. Our clients are very welcome to our farm.   
							</p>
							<img v-if="hover === 2" src="../assets/mountain.svg">
							<p v-if="hover === 2" class="us-text">
								We are on the eastern mountain range of Colombia at an altitude over 6000 ft above sea level.
							</p>
							<img v-if="hover > 2" src="../assets/water-sources.svg">
							<p v-if="hover > 2" class="us-text">
								We take special care of our water resources. All the water used in the coffee process is treated and evaporated in retention containers.
							</p>
						</li>
						<li>
							<img v-if="hover === 1" src="../assets/044-connect.svg">
							<p v-if="hover === 1" class="us-text">
								Thanks to the project many families in the region have been benefited. 
								Job creation in decent conditions is our pride.
							</p>
							<img v-if="hover === 2" src="../assets/weather.svg">
							<p v-if="hover === 2" class="us-text">
								The climate and altitude are perfect for cultivation. The rain is enough for irrigation and cloudiness gives the necessary shade for plants.
							</p>
							<img v-if="hover > 2" src="../assets/forest.svg">
							<p v-if="hover > 2" class="us-text"> 
								We protect a large area of native forest. all our water resources are born in the forest.
								Therefore, the protection of nature is our priority.
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div v-bind:class="{'farm-photos': $mq === 'md', 'farm-photos-lg': $mq === 'lg'}">
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

	.farm-title {
		width: 20rem;
		margin: 1rem auto;
	}
	.farm-content {
		margin-top: 2rem;
		display: flex;
		justify-content: space-around;
		height: 30rem;	
	}
	.farm-description {
		padding-right: 5rem;
		padding-left: 5rem;
		margin-top: -1rem;
    	width: 255%;
	}
	.farm-photos {
		width: 230rem;
		padding-right: 5rem;
		padding-left: 5rem;
		padding-bottom: 5rem;
	}

	.farm-photos-lg {
		width: 70rem;
		padding-right: 5rem;
		padding-left: 5rem;
		padding-bottom: 5rem;
	}

	.farm-photos img {
	    height: 100%;
	}

	.farm-tabs img {
		width: 8%;
		padding: 15px;
	}
	.farm-tabs-lg img {
		width: 12%;
		padding: 15px;
	}


</style>