<template>
  <tr>
    <td>
      <v-avatar>
        <img :src="member.avatar_url" />
      </v-avatar>
    </td>
    <td>
      <span>{{member.id}}</span>
    </td>
    <td>
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
