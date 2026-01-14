import { ingredients } from "../data/ingredients";
import type { Ingredient } from "../data/ingredients";

interface BunSelectorProps {
  onSelect: (bun: Ingredient) => void;
}

function BunSelector({ onSelect }: BunSelectorProps) {
  const buns = Object.values(ingredients).filter(
    (i) => i.category === "bun"
  );

  return (
    <div className="rounded-lg bg-black p-4 border border-yellow-400 shadow-xl w-64">
      <h3 className="mb-3 font-bold text-yellow-400">
        Choose your bun
      </h3>

      <div className="space-y-2">
        {buns.map((bun) => (
          <button
            key={bun.id}
            onClick={() => onSelect(bun)}
            className="w-full rounded-md bg-gray-800 px-4 py-2 text-left transition hover:bg-yellow-400 hover:text-black"
          >
            {bun.emoji} {bun.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BunSelector;
