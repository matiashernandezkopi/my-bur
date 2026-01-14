import type { Ingredient } from "../data/ingredients";
import { ingredients } from "../data/ingredients";

function IngredientSelector({ onAdd }: {onAdd : (ingredient: Ingredient) => void}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {Object.values(ingredients).map((ingredient) => (
        <button
          key={ingredient.id}
          onClick={() => onAdd(ingredient)}
          className="rounded-lg border bg-white p-4 transition hover:border-yellow-400 hover:shadow"
        >
          <div className="text-2xl">{ingredient.emoji}</div>
          <h3 className="font-semibold">{ingredient.name}</h3>
          <p className="text-sm text-gray-500">
            +${ingredient.price.toFixed(2)}
          </p>
        </button>
      ))}
    </div>
  );
}

export default IngredientSelector