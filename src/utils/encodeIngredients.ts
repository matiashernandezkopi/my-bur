import type { Ingredient } from "../data/ingredients";

export function encodeIngredients(
  ingredients: Ingredient[],
  useNumericCodes = true
) {
  const unique = ingredients.filter(
    (ing, index, self) =>
      ing.category !== "bun" ||
      self.findIndex((i) => i.category === "bun") === index
  );

  return unique
    .map((ing) => (useNumericCodes ? ing.code : ing.id))
    .join("-");
}
