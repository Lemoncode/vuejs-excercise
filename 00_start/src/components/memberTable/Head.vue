<template>
  <tr>
    <th :class="$style.column">Avatar</th>
    <th :class="$style.column">Id</th>
    <th :class="$style.column">Name</th>
  </tr>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MemberHead"
});
</script>


<style module>
.column {
  width: 33.33%;
}
</style>
