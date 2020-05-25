<template>
  <v-layout>
    <v-flex xs10 sm10 offset-sm1>
      <v-app-bar color="primary" dense dark>
        <v-toolbar-title>
          <h2>Member Page {{organization}}</h2>
        </v-toolbar-title>
      </v-app-bar>
      
      <v-container fluid style="padding: 0">
        <v-data-iterator
          :items="members"
          :items-per-page.sync="propsPagination.membersPerPage"
          :page="propsPagination.page"
          :server-items-length="propsPagination.membersInServer"
          :search="search"
          single-select
          hide-default-footer
          no-data-text=""
        >
          <template v-slot:header>
            <v-toolbar dark color="primary">
              <v-text-field
                :value="organization"
                clearable
                flat
                solo-inverted
                hide-details
                append-icon="search"
                label="Search Organization"
                @input="onChange"
                @click:append="() => loadMembersFirstPage(organization)"
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="search"
                label="Search members in this page"
              ></v-text-field>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <template v-for="member in props.items">
              <member-row :key="member.id" :member="member" />
            </template>
          </template>

          <template v-slot:footer>
            <v-pagination
              v-model="propsPagination.page"
              :length="propsPagination.lastPage"
              :total-visible="propsPagination.totalVisiblePages"
              @input="() => loadMembersNextPage(organization,propsPagination.page)"
            ></v-pagination>
          </template>
        </v-data-iterator>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers, getAllMembersByPage } from "../../api/memberAPI";

const DEFAULTPAGINATIONLENGHT = 10;
const DEFAULTMEMBERSBYPAGE = 10;

export default Vue.extend({
  name: "MemberTable",
  components: { MemberRow },
  data: () => ({
    organization: "Lemoncode",
    propsPagination: {
      page: 1,
      totalVisiblePages: DEFAULTPAGINATIONLENGHT,
      lastPage: 1,
      membersPerPage: DEFAULTMEMBERSBYPAGE,
      membersInServer: 0
    },
    members: [] as Member[],
    search: ""
  }),
  methods: {
    loadMembers: function() {
      getAllMembers(this.organization).then(members => {
        this.members = members;
        this.propsPagination.page = 1;
      });
    },
    loadMembersFirstPage: function(organization) {
      getAllMembersByPage(organization, 1, DEFAULTMEMBERSBYPAGE).then(
        infoSearch => {
          this.members = infoSearch.members;
          this.configPagination(1, infoSearch.last);
        }
      );
    },
    loadMembersNextPage: function(organization, page) {
      getAllMembersByPage(organization, page, DEFAULTMEMBERSBYPAGE).then(
        infoSearch => {
          this.members = infoSearch.members;
        }
      );
    },
    onChange(org) {
      this.organization = org;
    },
    configPagination: function(page, lastPage) {
      this.propsPagination.lastPage = Number.isInteger(lastPage) ? lastPage : 1;
      this.propsPagination.membersInServer = lastPage * DEFAULTMEMBERSBYPAGE;
    }
  }
});
</script>

<style module>
.v-text-field.v-text-field--solo .v-input__append-inner, .v-text-field.v-text-field--solo .v-input__prepend-inner {
  cursor: pointer;
}
</style>
