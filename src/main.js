import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAgile from "vue-agile";
import VueScrollTo from 'vue-scrollto'; 
import VueMq from 'vue-mq'

Vue.use(VueAgile);
Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1450,
    lg: Infinity,
  }
});
 
Vue.use(VueScrollTo);
// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 });

  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
