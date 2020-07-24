import Router, { RouteConfig } from "vue-router";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPageContainer } from "./pages/recipe/list";
import { EditRecipePageContainer } from "./pages/recipe/edit";

export const baseRoutes = {
  root: "/",
  login: "/login",
  recipe: "/recipe",
  edit: "/recipe/:id",
};

export type BaseRoutes = typeof baseRoutes;

const routes: RouteConfig[] = [
  { path: baseRoutes.root, redirect: baseRoutes.login },
  { path: baseRoutes.login, component: LoginPageContainer },
  { path: baseRoutes.recipe, component: RecipeListPageContainer },
  { path: baseRoutes.edit, component: EditRecipePageContainer, props: true },
];

export const router = new Router({
  routes,
});
