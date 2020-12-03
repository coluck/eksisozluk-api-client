import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Debe from "../views/Debe.vue";
import Baslik from "../views/Baslik.vue";
import Basliklar from "../views/Basliklar.vue";
import EntryPage from "../views/EntryPage.vue";
// import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main"
  },
  {
    path: "/debe",
    name: "Debe",
    component: Debe
  },
  {
    path: "/basliklar/:kanal",
    name: "Basliklar",
    component: Basliklar
  },
  {
    path: "/baslik/:slug",
    name: "Baslik",
    component: Baslik
  },
  {
    path: "/entry/:id",
    name: "Entry",
    component: EntryPage
  },
  // { path: "?q=", redirect: "/b" },
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
