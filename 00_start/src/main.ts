import Vue from "vue";
import Vuetify from 'vuetify/lib';
import App from "./App.vue";
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

//const vuetifyOpts = {};

new Vue({
  el: "#root",
  render: h => h(App)
});
