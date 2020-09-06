import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games.vue";
import GameDetail from "../views/GameDetail.vue";
import News from "../views/News.vue";
import NewsDetail from "../views/NewsDetail.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Account from "../views/Account";
import Terms from "../views/Terms.vue";
import Privacy from "../views/Privacy.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
  {
    path: "/games/:id",
    name: "Games",
    component: GameDetail,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/news/detail/:id",
    name: "News",
    component: NewsDetail,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
