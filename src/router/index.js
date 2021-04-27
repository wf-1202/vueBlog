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
        name: "Vue",
        component: () => import("../views/home/Vue")
      },
      {
        path: "react",
        name: "React",
        component: () => import("../views/home/React")
      },
      {
        path: "wx",
        name: "Wx",
        component: () => import("../views/home/Wx")
      },
      {
        path: "css",
        name: "Css",
        component: () => import("../views/home/Css")
      },
      {
        path: "question",
        name: "Question",
        component: () => import("../views/home/Question")
      },
      {
        path: "methods",
        name: "Methods",
        component: () => import("../views/home/Methods")
      },
      {
        path: "leetCode",
        name: "LeetCode",
        component: () => import("../views/home/LeetCode")
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
        path: "homeVue",
        name: "HomeVue",
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
        name: "Timeline",
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
