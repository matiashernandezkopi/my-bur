import type { Ingredient } from "../data/ingredients";

export function getBun(ingredients: Ingredient[]) {
  return ingredients.find((i) => i.category === "bun") ?? null;
}

export function getFillings(ingredients: Ingredient[]) {
  return ingredients.filter((i) => i.category !== "bun");
}
