import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import VueYouTubeEmbed from "vue-youtube-embed";
import VueCookies from 'vue-cookies'
import store from "./store/store";
import "ant-design-vue/dist/antd.css";
Vue.use(VueCookies)
Vue.use(Antd);
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
