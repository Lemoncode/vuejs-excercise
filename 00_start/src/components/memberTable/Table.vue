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
            @click:append="() => loadMembersFirstPage(organization)"
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
        <v-pagination 
          v-model="propsPagination.page" 
          :length="propsPagination.lastPage"
          :total-visible="propsPagination.totalVisiblePages"
          @input="() => loadMembersNextPage(organization,propsPagination.page)"
        >
        </v-pagination>
      </div>

      <div>
        <span>Page: {{propsPagination.page}}</span>
        <span>Last: {{propsPagination.lastPage}}</span>
        <span>totalVisiblePages: {{propsPagination.totalVisiblePages}}</span>
      </div>

    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers, getAllMembersByPage } from "../../api/memberAPI";

const DEFAULTPAGINATIONLENGHT = 10;
const DEFAULTMEMBERSBYPAGE = 20

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  data: () => ({
    organization: "Lemoncode",
    propsPagination: {
      page: 1,
      totalVisiblePages: DEFAULTPAGINATIONLENGHT,
      lastPage: 1
    },
    members: [] as Member[]
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.organization).then(members => {
        this.members = members;
        this.propsPagination.page = 1;
      });
    },
    loadMembersFirstPage: function(organization) {
      getAllMembersByPage(organization, 1, DEFAULTMEMBERSBYPAGE).then(infoSearch => {
        this.members = infoSearch.members;
        this.configPagination(1, infoSearch.last);
      });
    },    
    loadMembersNextPage: function(organization, page) {
      getAllMembersByPage(organization, page, DEFAULTMEMBERSBYPAGE).then(infoSearch => {
        this.members = infoSearch.members;
      });
    },
    onChange(org) {
      this.organization = org;
    },
    configPagination: function(page, lastPage) {
      this.propsPagination.lastPage = Number.isInteger(lastPage) ? lastPage : 1;
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
