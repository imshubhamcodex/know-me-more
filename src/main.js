import Vue from "vue";
import VueMeta from "vue-meta";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./plugins/store";
import router from "./router/router";

Vue.use(VueMeta);

Vue.config.productionTip = false;
Vue.prototype.$baseURL = "http://3.137.150.187:8081";

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
