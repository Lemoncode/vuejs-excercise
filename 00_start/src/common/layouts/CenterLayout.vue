<template>
  <v-container class="fill-height" fluid>
    <slot />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CenterLayout"
});
</script>