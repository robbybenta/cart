import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from "../views/Catalog.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/catalog",
    props: true,
    name: "Catalog",
    component: Catalog,
  },

];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;