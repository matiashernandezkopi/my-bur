import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { decodeIngredients } from "../utils/decodeIngredients";
import { encodeIngredients } from "../utils/encodeIngredients";
import type { Ingredient } from "../data/ingredients";

import OrderSummary from "../components/OrderSummary";
import IngredientByCategory from "../components/IngredientByCategory";
import BunSelector from "../components/BunSelector";

function BurMaker() {
  const { code = "1-1" } = useParams();
  const navigate = useNavigate();

  const ingredients: Ingredient[] = code
    ? decodeIngredients(code)
    : [];

  /* 🥯 bun selector state */
  const [bunMenuOpen, setBunMenuOpen] = useState(false);

  const updateUrl = (next: Ingredient[]) => {
    navigate(`/burMaker/${encodeIngredients(next)}`, { replace: true });
  };

  const addIngredient = (ingredient: Ingredient) => {
    updateUrl([...ingredients, ingredient]);
  };

  const removeIngredient = (ingredientId: string) => {
    const index = ingredients.findIndex((i) => i.id === ingredientId);
    if (index === -1) return;

    const next = [...ingredients];
    next.splice(index, 1);
    updateUrl(next);
  };

  /* ✅ called AFTER selecting bun */
  const changeBun = (bun: Ingredient) => {
    const withoutBun = ingredients.filter(
        (i) => i.category !== "bun"
    );

    updateUrl([bun, ...withoutBun]);
    setBunMenuOpen(false);
    };


  return (
    <div className="relative grid gap-10 md:grid-cols-3">
      {/* LEFT */}
      <div className="space-y-8 md:col-span-2">
        <IngredientByCategory category="patty" onAdd={addIngredient} />
        <IngredientByCategory category="cheese" onAdd={addIngredient} />
        <IngredientByCategory category="topping" onAdd={addIngredient} />
        <IngredientByCategory category="sauce" onAdd={addIngredient} />
      </div>

      {/* RIGHT */}
      <div className="relative">
        <OrderSummary
          ingredients={ingredients}
          onRemove={removeIngredient}
          onOpenBunMenu={() => setBunMenuOpen(true)}
        />

        {/* 🥯 Bun menu */}
        {bunMenuOpen && (
          <div className="absolute right-0 top-0">
            <BunSelector onSelect={changeBun} />
          </div>
        )}
      </div>
    </div>
  );
}

export default BurMaker;
