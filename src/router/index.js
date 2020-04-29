import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    redirect: "/home/hotmovie",
    children: [
      {
        path: "hotmovie",
        name: "hotmovie",
        component: () => import("@/views/HomeHotMovie.vue")
      },
      {
        path: "willmovie",
        name: "willmovie",
        component: () => import("@/views/HomeWillMovie.vue")
      }
    ]
  },
  {
    path: "/cinema",
    name: "cimema",
    component: () => import("@/views/Cinema.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/Search.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/Mine.vue")
  },
  {
    path: "/city",
    name: "city",
    component : () => import("@/views/City.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
