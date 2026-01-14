import type { Ingredient } from "../data/ingredients";
import { calculateTotal } from "../utils/calculateTotal";
import { getBun, getFillings } from "../utils/burgerHelpers";

interface OrderSummaryProps {
  ingredients: Ingredient[];
  onRemove: (id: string) => void;
  onOpenBunMenu: () => void;
}

function OrderSummary({
  ingredients,
  onRemove,
  onOpenBunMenu,
}: OrderSummaryProps) {
  const bun = getBun(ingredients);
  const fillings = getFillings(ingredients);
  const total = calculateTotal(ingredients);

  return (
    <div className="rounded-xl bg-black p-6 text-white flex flex-col justify-between">
      <div>
        <h2 className="mb-4 text-xl font-bold text-yellow-400">
          Your Burger
        </h2>

        {/* TOP BUN */}
        {bun && (
          <button
            onClick={onOpenBunMenu}
            className="mb-3 w-full rounded-md border border-yellow-400/30 bg-yellow-400/10 py-2 font-semibold hover:bg-yellow-400/20"
          >
            🥯 {bun.name} · Change Bun
          </button>
        )}

        {/* FILLINGS */}
        <ul className="space-y-2">
          {fillings.map((ing, index) => (
            <li
              key={`${ing.id}-${index}`}
              className="flex justify-between items-center"
            >
              <span>
                {ing.emoji} {ing.name}
              </span>
              <button
                onClick={() => onRemove(ing.id)}
                className="text-sm text-red-400 hover:text-red-500"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {/* BOTTOM BUN (visual only) */}
        {bun && (
          <div className="mt-3 w-full rounded-md border border-yellow-400/30 bg-yellow-400/10 py-2 text-center font-semibold opacity-80">
            🥯 {bun.name}
          </div>
        )}
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span className="text-yellow-400">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default OrderSummary;
