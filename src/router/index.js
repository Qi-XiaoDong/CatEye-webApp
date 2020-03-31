import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";

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
        component: () => import("@/views/home/HotMovie.vue")
      },
      {
        path: "willmovie",
        name: "willmovie",
        component: () => import("@/views/home/WillMovie.vue")
      }
    ]
  },
  {
    path: "/cinema",
    name: "cimema",
    component: () => import("@/views/cinema/Cinema.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search/Search.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/Mine.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
