import VueRouter from "vue-router";
import Vue from "vue";
import HelloWorld from "../components/HelloWorld";
import About from "../components/about";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "", component: HelloWorld, meta: { title: "你好" } },
    { path: "/about", component: About, meta: { title: "关于" } }
  ]
});
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta;
});
export default router;
