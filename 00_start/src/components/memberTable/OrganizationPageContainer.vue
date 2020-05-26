<template>
    <member-table />
</template>

<script lang="ts">
import Vue from "vue";
import MemberTable from "./Table.vue";

export default Vue.extend({
  name: "OrganizationPageContainer",
  components: { MemberTable }
});
</script>
