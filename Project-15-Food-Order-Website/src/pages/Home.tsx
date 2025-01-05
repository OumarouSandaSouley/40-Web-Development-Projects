import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PizzaList from "../components/PizzaList";
import { fetchPizzas } from "../data/pizzas";
import { Pizza } from "../types/pizza";

const Home = () => {
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pyza Pizza</h1>
        <p className="text-xl mb-8">
          Delicious pizzas delivered to your doorstep
        </p>
        <Link
          to="/menu"
          className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition-colors"
        >
          View Full Menu
        </Link>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6">Our Pizzas</h2>
        {loading ? <p>Loading pizzas...</p> : <PizzaList pizzas={pizzas} limit={true} />}
      </div>
    </div>
  );
};

export default Home;
