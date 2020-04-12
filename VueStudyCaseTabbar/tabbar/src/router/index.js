import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    { path: "", redirect: "/home" },
    { path: "/home", component: () => import("../views/home/Home") },
    {
      path: "/category",
      component: () => import("../views/category/Category")
    },
    { path: "/cart", component: () => import("../views/cart/Cart") },
    { path: "/profile", component: () => import("../views/profile/Profile") }
  ],
  mode: "history"
});
