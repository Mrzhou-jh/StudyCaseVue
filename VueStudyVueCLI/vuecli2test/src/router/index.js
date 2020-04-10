import VueRouter from "vue-router";
import Vue from "vue";
import HelloWorld from "../components/HelloWorld";
import About from "../components/about";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "", component: HelloWorld },
    { path: "/about", component: About }
  ]
});
