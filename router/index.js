import { createWebHistory, createRouter } from "vue-router";

// import Home from "./components/Home.vue";
import Creative from "../src/components/Creative.vue";
import CaseStudy from "../src/components/CaseStudy.vue";
import Developer from "../src/components/Developer.vue";
import Training from "../src/components/Training.vue";

const history = createWebHistory();

const routes = [
  { path: '/', redirect: '/case-study' },
  { path: "/creative", component: Creative },
  { path: "/case-study", component: CaseStudy },
  { path: "/developer", component: Developer },
  { path: "/training", component: Training },
];

const router = createRouter({ history, routes });

export default router;