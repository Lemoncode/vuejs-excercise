<template>
  <div>
    <v-app-bar app dark color="amber">
      <v-toolbar-title>Recipe App</v-toolbar-title>
    </v-app-bar>
    <v-container class="py-10">
      <slot />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AppLayout"
});
</script>