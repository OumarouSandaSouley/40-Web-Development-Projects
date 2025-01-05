import { useState } from "react";
import { Pizza } from "../types/pizza";
import { useCart } from "../hooks/useCart";

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...pizza, size });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{pizza.name}</h2>
        <p className="text-gray-600 mb-4">{pizza.description}</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <label htmlFor={`size-${pizza.id}`} className="mr-2">
              Size:
            </label>
            <select
              id={`size-${pizza.id}`}
              value={size}
              onChange={(e) =>
                setSize(e.target.value as "small" | "medium" | "large")
              }
              className="border rounded p-1"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <p className="font-bold">${pizza.prices[size].toFixed(2)}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
