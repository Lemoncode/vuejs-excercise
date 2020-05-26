import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import { router } from './router';
import vuetify from './plugins/vuetify'; 
import '@mdi/font/css/materialdesignicons.css';

Vue.use(VueRouter);

new Vue({
  el: "#root",
  router,
  vuetify,
  render: h => h(App)
});
