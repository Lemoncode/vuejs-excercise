<template>
  <app-layout>
    <form-component v-bind="$props" />
  </app-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { AppLayout } from "../../../common/layouts";
import { FormProps } from "./formProps";
import { FormComponent } from "./components";

export default Vue.extend({
  name: "RecipeEditPage",
  components: { AppLayout, FormComponent },
  props: {
    recipe: { require: true },
    recipeError: { required: true },    
    onUpdateRecipe: { require: true },
    onSave: { require: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
  } as FormProps,
});
</script>
