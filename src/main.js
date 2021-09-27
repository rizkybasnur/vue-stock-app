import axios from "axios";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";
import store from "./store/store";

Vue.use(VueRouter);

axios.defaults.baseURL =
  "https://vue-final-33419-default-rtdb.asia-southeast1.firebasedatabase.app/";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
