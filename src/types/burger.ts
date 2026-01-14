import type { Ingredient, IngredientCategory } from "../data/ingredients";

export interface Burger {
  ingredients: Ingredient[];
}

export type AddIngredientFn = (ingredient: Ingredient) => void;
export type RemoveIngredientFn = (ingredientId: string) => void;
export type ChangeBunFn = (bun: Ingredient) => void;

export type Category = IngredientCategory;
