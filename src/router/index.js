import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
};

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoad('Home')
  }
];

const router = new VueRouter({
  routes
});

export default router;
