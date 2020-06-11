import Vue from "vue";
import VueRouter from "vue-router";
import Loginmgc from "../views/Loginmgc.vue";
import Pointmgc from "../views/Pointmgc.vue";

Vue.use(VueRouter);

const routes = [
 
  {
    path: "/loginmgc",
    props: true,
    name: "Loginmgc",
    component: Loginmgc
  },
  {
    path: "/pointmgc/:outlet_id/:version",
    props: true,
    name: "Pointmgc",
    component: Pointmgc,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token") == null) {
        next("/loginmgc");
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  routes
});
export default router;
