import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/router/pages/NotFound.vue";
import HomePage from "@/router/pages/HomePage.vue";
import Information from "@/router/pages/Information.vue";
import { Page } from "./Page";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: Page.Home,
      component: HomePage,
    },
    {
      path: "/information",
      name: Page.Information,
      component: Information,
    },
    {
      path: "/:pathMatch(.*)*",
      name: Page.NotFound,
      component: NotFound,
    },
  ],
});

export default router;
