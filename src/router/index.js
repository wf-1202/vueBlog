import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/home/";
import Zone from "../views/zone/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/vue"
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
    children: [
      {
        path: "vue",
        name: "vue",
        component: () => import("../views/home/Vue")
      },
      {
        path: "react",
        name: "react",
        component: () => import("../views/home/React")
      }
    ]
  },
  {
    path: "/zone",
    name: "Zone",
    component: Zone,
    children: [
      {
        path: "article",
        name: "Article",
        component: () => import("../views/zone/Article")
      },
      {
        path: "vue",
        name: "vue",
        component: () => import("../views/home/Vue")
      },
      {
        path: "about",
        name: "About",
        component: () => import("../views/zone/About")
      },
      {
        path: "type",
        name: "Type",
        component: () => import("../views/zone/Type")
      },
      {
        path: "timeline",
        name: "TimeLine",
        component: () => import("../views/zone/TimeLine")
      }
    ]
  },
  {
    path: "*",
    name: "Page404",
    component: () => import("../views/error/404.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
