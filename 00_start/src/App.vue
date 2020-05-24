<template>
  <v-app>
    <member-table />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberTable } from "./components";

export default Vue.extend({
  name: "App",
  components: { MemberTable }
});
</script>
