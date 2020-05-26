<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { OrganizationPageContainer } from "./components";

export default Vue.extend({
  name: "App",
  components: { OrganizationPageContainer }
});
</script>
