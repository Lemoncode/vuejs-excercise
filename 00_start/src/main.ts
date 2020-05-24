import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify'; 
import '@mdi/font/css/materialdesignicons.css';

new Vue({
  el: "#root",
  vuetify,
  render: h => h(App)
});
