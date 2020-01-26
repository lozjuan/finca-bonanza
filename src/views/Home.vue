<template>
  <head>
    <link rel="icon" href="../assets/logo.png">
  </head>
  
  <div class="home">
    <NavBar />
    <Presentation />
    <Product />
    <Transition />
    <Farm />
    <Transition2 />
    <Contact />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Presentation from "@/components/Presentation.vue";
import Product from "@/components/Product.vue";
import Transition from "@/components/Transition.vue";
import Farm from "@/components/Farm.vue";
import Transition2 from "@/components/Transition2.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "home",
  components: {
	NavBar, 
	Presentation,
	Product,
	Transition,
	Farm,
	Transition2,
	Contact
  }
};
</script>
