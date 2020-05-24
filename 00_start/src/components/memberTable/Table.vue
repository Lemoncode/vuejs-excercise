<template>
  <v-layout>
    <v-flex xs10 sm10 offset-sm1>
      <v-app-bar color="primary" dense dark>
        <v-toolbar-title>
          <h2>Member Page {{organization}}</h2>
        </v-toolbar-title>
      </v-app-bar>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Organization"
            placeholder="Search Organization"
            append-icon="search"
            :value="organization"
            @input="onChange"
            @click:append="() => loadMembers(organization)"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-simple-table fixed-header>
        <template v-slot:default>
          <thead>
            <member-head />
          </thead>
          <tbody>
            <template v-for="member in members">
              <member-row :key="member.id" :member="member" />
            </template>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center">
        <v-pagination v-model="page" :length="4" circle></v-pagination>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  data: () => ({
    organization: "Lemoncode",
    page: 1,
    members: [] as Member[]
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.organization).then(members => {
        this.members = members;
        this.page = 1;
      });
    },
    onChange(org) {
      this.organization = org;
    }
  }
});
</script>

<style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
