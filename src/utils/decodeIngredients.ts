import { ingredientByCode, ingredientById } from "../data/ingredientMaps";
import { DEFAULT_BUN_CODE } from "../data/constants";
import type { Ingredient } from "../data/ingredients";

export function decodeIngredients(code: string): Ingredient[] {
  if (!code) {
    return [ingredientByCode[DEFAULT_BUN_CODE]];
  }

  const decoded = code
    .split("-")
    .map((token) => {
      if (!isNaN(Number(token))) {
        return ingredientByCode[Number(token)];
      }
      return ingredientById[token];
    })
    .filter(Boolean) as Ingredient[];

  const hasBun = decoded.some((i) => i.category === "bun");

  if (!hasBun) {
    decoded.unshift(ingredientByCode[DEFAULT_BUN_CODE]);
  }

  return decoded;
}
