<template>
  <app-layout>
    <v-card>
      <v-card-title class="text-h4">
        Recipes
      </v-card-title>
      <v-card-text>
        <search-bar-component :search-text="searchText" :on-search="onSearch" />
        <table-component :recipes="recipes" />
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { Recipe } from "./viewModel";
import { TableComponent, SearchBarComponent } from "./components";

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, TableComponent, SearchBarComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: { required: true } as PropOptions<(value: string) => void>,
  },
});
</script>
