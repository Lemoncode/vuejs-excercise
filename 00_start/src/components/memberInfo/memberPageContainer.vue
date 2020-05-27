<template>
  <v-layout>
    <v-flex 
      xs12 
      sm12 
      md10 offset-md1 
      xl8 offset-xl2
    >
      <v-app-bar color="primary" dense dark>
        <v-toolbar-title>
          <h2>Member Page of {{member.login}}</h2>
        </v-toolbar-title>
      </v-app-bar>

      <member-detail :member="member"></member-detail>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import MemberDetail from "./memberDetail.vue";
import { getMembersByLogin } from "./memberDetail.api";
import {
  MemberDetailEntity,
  createDefaultMemberDetailEntity
} from "./memberDetail.vm";

export default Vue.extend({
  name: "MemberPageContainer",
  components: { MemberDetail },
  props: {
    login: String
  },
  data() {
    return {
      member: createDefaultMemberDetailEntity()
    };
  },
  beforeMount() {
    getMembersByLogin(this.login).then(
      (m: MemberDetailEntity) => {
        this.member = m;
      },
      () => {
        this.member = createDefaultMemberDetailEntity();
      }
    );
  }
});
</script>
