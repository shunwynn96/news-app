import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueClickAway from "vue3-click-away";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(router);
app.use(VueClickAway);
app.mount("#app");

// createApp(App).use(router).mount("#app");

// import "../node_modules/bootstrap/dist/js/bootstrap.js";
