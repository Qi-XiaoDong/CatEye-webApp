import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/main.css";

import { ValidationProvider } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
