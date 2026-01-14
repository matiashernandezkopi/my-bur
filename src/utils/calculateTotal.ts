// src/utils/calculateTotal.ts
import type { Ingredient } from "../data/ingredients";

export function calculateTotal(ingredients: Ingredient[]) {
  return ingredients.reduce((total, ing) => total + ing.price, 0);
}
