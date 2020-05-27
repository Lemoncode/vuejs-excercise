<template>
  <v-container fluid style="padding: 0">
    <v-row>
      <v-col cols="auto" >
        <v-avatar size="200">
          <img :src="member.avatar_url" />
        </v-avatar>
      </v-col>

    <v-col>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td class="subheading font-weight-bold align-end">ID</td>
              <td class="align-start">{{ member.id }}</td>
            </tr>
            <tr>
              <td class="subheading font-weight-bold align-end">Login</td>
              <td class="align-start">{{ member.login }}</td>
            </tr>
            <tr>
              <td class="subheading font-weight-bold align-end">Type</td>
              <td class="align-start">{{ member.type }}</td>
            </tr>
            <tr>
              <td class="subheading font-weight-bold align-end">Administrator</td>
              <td class="align-start">{{ member.site_admin }}</td>
            </tr>
            <tr>
              <td class="subheading font-weight-bold align-end">Name</td>
              <td class="align-start">{{ member.name }}</td>
            </tr>
            <tr>
              <td class="subheading font-weight-bold align-end">Company</td>
              <td class="align-start">{{ member.company }}</td>
            </tr>
            <tr>
              <td class="subheading font-weight-bold align-end">Email</td>
              <td class="align-start">{{ member.email }}</td>
            </tr>
            <tr>
              <td class="subheading font-weight-bold align-end">Number of followers</td>
              <td class="align-start">{{ member.followers }}</td>
            </tr>
            <tr>
              <td class="subheading font-weight-bold align-end">Followings</td>
              <td class="align-start">{{ member.followings }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MemberDetail",
  props: {
    member: {}
  }
});
</script>
