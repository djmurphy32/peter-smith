import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/router/pages/NotFound.vue";
import HomePage from "@/router/pages/HomePage.vue";
import HomePageV2 from "@/router/pages/v2/HomePage.vue";
import InformationV2 from "@/router/pages/v2/Information.vue";
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
      path: "/v2",
      name: Page.HomeV2,
      component: HomePageV2,
    },
    {
      path: "/information",
      name: Page.InformationV2,
      component: InformationV2,
    },
    {
      path: "/:pathMatch(.*)*",
      name: Page.NotFound,
      component: NotFound,
    },
  ],
});

export default router;
