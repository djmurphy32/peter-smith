import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import externalClick from "@/directives/externalClick";
import "@/styles/index.scss";

const app = createApp(App);
app.use(router);
app.directive("external-click", externalClick);

app.mount("#app");
