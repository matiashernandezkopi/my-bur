export interface Menu {
  id: string;
  name: string;
  description: string;
  ingredients: number[]; // codes (incluye bun)
  price: number;
  image: string;
}

export const menus: Menu[] = [
  {
    id: "classic",
    name: "Classic Burger",
    description: "Beef patty, cheddar cheese and fresh toppings.",
    ingredients: [1, 10, 4, 21, 31, 32],
    price: 6.60,
    image: "/menus/classic.png",
  },
  {
    id: "bacon",
    name: "Bacon Lover",
    description: "Juicy beef, crispy bacon and melted cheese.",
    ingredients: [1, 10, 33, 21, 41, 34],
    price: 7.70,
    image: "/menus/bacon.png",
  },
];
