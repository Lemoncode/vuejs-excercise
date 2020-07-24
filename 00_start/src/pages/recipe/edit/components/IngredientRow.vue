<template>
  <v-chip outlined class="ma-2">
    {{ ingredient }}
    <v-icon right @click="() => onRemoveIngredient(ingredient)">close</v-icon>
  </v-chip>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "IngredientRowComponent",
  props: {
    ingredient: String,
    onRemoveIngredient: {} as PropOptions<(ingredient: string) => void>,
  },
});
</script>
