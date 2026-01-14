import { ingredients } from "./ingredients";

export const ingredientByCode = Object.values(ingredients).reduce(
  (acc, ingredient) => {
    acc[ingredient.code] = ingredient;
    return acc;
  },
  {} as Record<number, (typeof ingredients)[string]>
);

export const ingredientById = ingredients;
