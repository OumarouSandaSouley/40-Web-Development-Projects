import { useEffect, useState } from "react";
import { fetchPizzas } from "../data/pizzas";
import { Pizza } from "../types/pizza";
import PizzaList from "../components/PizzaList";

const Menu = () => {
      const [pizzas, setPizzas] = useState<Pizza[]>([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const loadPizzas = async () => {
          const fetchedPizzas = await fetchPizzas();
          setPizzas(fetchedPizzas);
          setLoading(false);
        };
    
        loadPizzas();
      }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div>
        {loading ? (
          <p>Loading pizzas...</p>
        ) : (
          <PizzaList pizzas={pizzas} />
        )}
      </div>
    </div>
  );
};

export default Menu;
