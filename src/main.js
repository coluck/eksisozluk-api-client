import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.mixin({
  data: function() {
    return {
      get baseUrl() {
        return "http://192.168.1.4:3000/api/";
      }
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
