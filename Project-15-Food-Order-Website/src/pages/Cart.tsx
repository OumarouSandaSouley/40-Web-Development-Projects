import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

interface CartItem {
  $id: string;
  name: string;
  size: "small" | "medium" | "large";
  prices: number[];
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", "[]");

  const cart: CartItem[] = JSON.parse(cartItems);

  const removeFromCart = (id: string, size: string) => {
    const updatedCart = cart.filter(
      (item) => !(item.$id === id && item.size === size)
    );
    setCartItems(JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.$id === id && item.size === size ? { ...item, quantity } : item
    );
    setCartItems(JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) =>
        total +
        item.prices[
          item.size === "small" ? 0 : item.size === "medium" ? 1 : 2
        ] *
          item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.$id}-${item.size}`}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <p className="text-gray-600">
                    Price: $
                    {item.prices[
                      item.size === "small" ? 0 : item.size === "medium" ? 1 : 2
                    ].toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.$id,
                        item.size,
                        Math.max(1, item.quantity - 1)
                      )
                    }
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.$id, item.size, item.quantity + 1)
                    }
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.$id, item.size)}
                    className="ml-4 text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-xl font-bold">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
            <Link
              to="/checkout"
              className="mt-4 inline-block bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
