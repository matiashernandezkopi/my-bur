import { ingredients } from "../data/ingredients";
import type { IngredientCategory } from "../data/ingredients";
import type { AddIngredientFn } from "../types/burger";

interface IngredientByCategoryProps {
  category: IngredientCategory;
  onAdd: AddIngredientFn;
}

function IngredientByCategory({
  category,
  onAdd,
}: IngredientByCategoryProps) {
  const items = Object.values(ingredients).filter(
    (i) => i.category === category
  );

  return (
    <section>
      <h3 className="mb-3 text-lg font-bold capitalize">
        {category}
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {items.map((ing) => (
          <button
            key={ing.id}
            onClick={() => onAdd(ing)}
            className="rounded-lg border bg-white p-3 transition hover:border-yellow-400"
          >
            <div className="text-xl">{ing.emoji}</div>
            <div className="font-semibold">{ing.name}</div>
            <div className="text-sm text-gray-500">
              +${ing.price.toFixed(2)}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default IngredientByCategory;
