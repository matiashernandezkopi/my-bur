// src/data/ingredients.ts

export type IngredientCategory =
  | "bun"
  | "patty"
  | "cheese"
  | "topping"
  | "sauce"
  | "extra";

export interface Ingredient {
  id: string;
  code: number; // 🔑 numeric code
  name: string;
  category: IngredientCategory;
  price: number;
  calories: number;
  emoji: string;
}

export const ingredients: Record<string, Ingredient> = {
  // BUNS
  brioche_bun: {
    id: "brioche_bun",
    code: 1,
    name: "Brioche Bun",
    category: "bun",
    price: 1.2,
    calories: 220,
    emoji: "🍞",
  },
  sesame_bun: {
    id: "sesame_bun",
    code: 2,
    name: "Sesame Bun",
    category: "bun",
    price: 1.0,
    calories: 200,
    emoji: "🍔",
  },

  // PATTIES
  beef_patty: {
    id: "beef_patty",
    code: 10,
    name: "Beef Patty",
    category: "patty",
    price: 3.5,
    calories: 350,
    emoji: "🥩",
  },
  chicken_patty: {
    id: "chicken_patty",
    code: 11,
    name: "Chicken Patty",
    category: "patty",
    price: 3.0,
    calories: 280,
    emoji: "🍗",
  },
  veggie_patty: {
    id: "veggie_patty",
    code: 12,
    name: "Veggie Patty",
    category: "patty",
    price: 2.8,
    calories: 240,
    emoji: "🥬",
  },

  // CHEESE
  cheddar: {
    id: "cheddar",
    code: 21,
    name: "Cheddar Cheese",
    category: "cheese",
    price: 1.0,
    calories: 90,
    emoji: "🧀",
  },
  swiss: {
    id: "swiss",
    code: 22,
    name: "Swiss Cheese",
    category: "cheese",
    price: 1.1,
    calories: 95,
    emoji: "🧀",
  },

  // TOPPINGS
  lettuce: {
    id: "lettuce",
    code: 31,
    name: "Lettuce",
    category: "topping",
    price: 0.4,
    calories: 5,
    emoji: "🥬",
  },
  tomato: {
    id: "tomato",
    code: 32,
    name: "Tomato",
    category: "topping",
    price: 0.5,
    calories: 10,
    emoji: "🍅",
  },
  bacon: {
    id: "bacon",
    code: 33,
    name: "Crispy Bacon",
    category: "topping",
    price: 1.5,
    calories: 120,
    emoji: "🥓",
  },
  onion: {
    id: "onion",
    code: 34,
    name: "Onion",
    category: "topping",
    price: 0.3,
    calories: 8,
    emoji: "🧅",
  },

  // SAUCES
  ketchup: {
    id: "ketchup",
    code: 41,
    name: "Ketchup",
    category: "sauce",
    price: 0.2,
    calories: 20,
    emoji: "🍅",
  },
  mayo: {
    id: "mayo",
    code: 42,
    name: "Mayonnaise",
    category: "sauce",
    price: 0.3,
    calories: 90,
    emoji: "🥫",
  },
  bbq: {
    id: "bbq",
    code: 43,
    name: "BBQ Sauce",
    category: "sauce",
    price: 0.4,
    calories: 35,
    emoji: "🔥",
  },

  // EXTRAS
  fried_egg: {
    id: "fried_egg",
    code: 51,
    name: "Fried Egg",
    category: "extra",
    price: 1.2,
    calories: 110,
    emoji: "🍳",
  },
};
