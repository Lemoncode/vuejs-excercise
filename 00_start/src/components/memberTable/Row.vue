<template>
  <v-row>
    <v-col>
      <v-avatar>
        <img :src="member.avatar_url" />
      </v-avatar>
    </v-col>
    <v-col>
      <span>{{member.id}}</span>
    </v-col>
    <v-col>
      <span>{{member.login}}</span>
    </v-col>
    <v-btn icon :to="`member/${member.login}`">
        <v-icon>edit</v-icon>
    </v-btn>
  </v-row>
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

