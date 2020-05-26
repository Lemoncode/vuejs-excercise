<template>
    <h1>Member Page {{ id }}</h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MemberPageContainer",
  props: {
    id: String
  },
  data() {
    return {
      recipe: {},
    };
  },
  beforeMount() {
    const id = Number(this.id || 0);
  }
});
</script>
