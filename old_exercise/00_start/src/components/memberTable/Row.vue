<template>
  <tr>
    <td :class="$style.column">
      <img :src="member.avatar_url" :class="$style.image">
    </td>
    <td :class="$style.column">
      <span>{{member.id}}</span>
    </td>
    <td :class="$style.column">
      <span>{{member.login}}</span>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Member } from "../../model/member";

interface Props {
  member: PropOptions<Member>;
}

export default Vue.extend({
  name: "MemberRow",
  props: {
    member: {}
  } as Props
});
</script>

<style module>
.image {
  max-width: 10rem;
}

.column {
  width: 33.33%;
  text-align: center;
}
</style>
