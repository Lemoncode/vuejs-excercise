import { Recipe } from "../viewModel";

export const filterRecipesByCommaSeparatedText = (recipes: Recipe[], searchText: string) => {
  const searchedIngredients = getSearchedIngredientList(searchText);

  return searchText === "" ? recipes : filterRecipesBySearchedIngredients(recipes, searchedIngredients);
};

const getSearchedIngredientList = (searchText: string): string[] => {
  return searchText.split(",");
};

const filterRecipesBySearchedIngredients = (recipes: Recipe[], searchedIngredients: string[]): Recipe[] => {
  return recipes.filter((recipe: Recipe) => matchAllSearchedIngredients(recipe.ingredients, searchedIngredients));
};

const matchAllSearchedIngredients = (ingredients: Recipe["ingredients"], searchedIngredients: string[]): boolean => {
  return searchedIngredients.every((searchedIngredient) => matchSearchedIngredient(searchedIngredient, ingredients));
};

const matchSearchedIngredient = (searchedIngredient: string, ingredients: string[]): boolean => {
  return ingredients.some((ingredient) => matchIngredient(ingredient, searchedIngredient));
};

const matchIngredient = (ingredient: string, searchedIngredient: string): boolean => {
  const searchedIngredientLowerCase = searchedIngredient.toLowerCase().trim();
  const ingredientLowerCase = ingredient.toLowerCase().trim();

  return ingredientLowerCase.indexOf(searchedIngredientLowerCase) >= 0;
};
