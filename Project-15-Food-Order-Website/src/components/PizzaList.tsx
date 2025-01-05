import React, { useState } from "react";
import { Pizza } from "../types/pizza";
import { ChevronDown, ChevronUp } from "lucide-react";
import useLocalStorage from "react-use-localstorage";

interface PizzaListProps {
  pizzas: Pizza[];
  limit: boolean;
}

const PizzaList: React.FC<PizzaListProps> = ({ pizzas, limit }) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", "[]");
  const [selectedSizes, setSelectedSizes] = useState<{
    [key: string]: "small" | "medium" | "large";
  }>({});
  const [expandedPizzas, setExpandedPizzas] = useState<{
    [key: string]: boolean;
  }>({});

  const handleSizeChange = (
    pizzaId: string,
    size: "small" | "medium" | "large"
  ) => {
    setSelectedSizes((prev) => ({ ...prev, [pizzaId]: size }));
  };

  const handleAddToCart = (pizza: Pizza) => {
    const size = selectedSizes[pizza.$id] || "medium";
    const newItem = { ...pizza, size, quantity: 1 };
    const currentCart = JSON.parse(cartItems);
    const existingItemIndex = currentCart.findIndex(
      (item: any) => item.$id === pizza.$id && item.size === size
    );

    if (existingItemIndex !== -1) {
      currentCart[existingItemIndex].quantity += 1;
    } else {
      currentCart.push(newItem);
    }

    setCartItems(JSON.stringify(currentCart));
  };

  const getPriceForSize = (
    prices: number[],
    size: "small" | "medium" | "large"
  ) => {
    const sizeIndex = size === "small" ? 0 : size === "medium" ? 1 : 2;
    return prices[sizeIndex];
  };

  const toggleExpand = (pizzaId: string) => {
    setExpandedPizzas((prev) => ({ ...prev, [pizzaId]: !prev[pizzaId] }));
  };

  const displayedPizzas = limit ? pizzas.slice(0, 6) : pizzas;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayedPizzas.map((pizza) => (
        <div
          key={pizza.$id}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{pizza.name}</h2>
            <p className="text-gray-600 mb-4">{pizza.description}</p>
            <div className="mb-4">
              <button
                onClick={() => toggleExpand(pizza.$id)}
                className="flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                {expandedPizzas[pizza.$id] ? (
                  <>
                    <ChevronUp size={16} className="mr-1" />
                    Hide ingredients
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} className="mr-1" />
                    Show ingredients
                  </>
                )}
              </button>
            </div>
            {expandedPizzas[pizza.$id] && (
              <div className="mb-4 p-2 bg-gray-100 rounded">
                <h3 className="font-semibold mb-1">Ingredients:</h3>
                <ul className="list-disc list-inside">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-between items-center mb-4">
              <div>
                <label
                  htmlFor={`size-${pizza.$id}`}
                  className="mr-2 text-sm font-medium"
                >
                  Size:
                </label>
                <select
                  id={`size-${pizza.$id}`}
                  value={selectedSizes[pizza.$id] || "medium"}
                  onChange={(e) =>
                    handleSizeChange(
                      pizza.$id,
                      e.target.value as "small" | "medium" | "large"
                    )
                  }
                  className="border rounded p-1 text-sm"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <p className="font-bold text-lg">
                $
                {getPriceForSize(
                  pizza.prices,
                  selectedSizes[pizza.$id] || "medium"
                ).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => handleAddToCart(pizza)}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzaList;
