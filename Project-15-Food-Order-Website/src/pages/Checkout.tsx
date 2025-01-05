import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import useLocalStorage from "react-use-localstorage";
import { appwriteConfig, databases } from "../config";
import { ID } from "appwrite";

interface CartItem {
  $id: string;
  name: string;
  size: "small" | "medium" | "large";
  prices: number[];
  quantity: number;
}

const Checkout = () => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", "[]");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { user } = useUser();

  const cart: CartItem[] = JSON.parse(cartItems);

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

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!user) {
    alert("Please sign in to place an order.");
    return;
  }

  const order = {
    userId: user.id,
    items: cart.map(
      (item) =>
        `${item.name} (${item.size}) x ${item.quantity} - $${(
          item.prices[
            item.size === "small" ? 0 : item.size === "medium" ? 1 : 2
          ] * item.quantity
        ).toFixed(2)}`
    ),
    total: getTotalPrice(),
    createdAt: new Date().toISOString(),
    address,
    status: "pending",
  };

  try {
    await databases.createDocument(
      appwriteConfig.databaseID, // Replace with your database ID
      appwriteConfig.ordersCollectionID, // Collection ID
      ID.unique(), // Auto-generate ID
      order
    );

    alert("Order placed successfully!");
    setCartItems("[]"); // Clear the cart
    navigate("/orders");
  } catch (error) {
    console.error("Error placing order:", error);
    alert("Failed to place order. Please try again.");
  }
};


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={`${item.$id}-${item.size}`} className="mb-2">
              <p>
                {item.name} ({item.size}) x {item.quantity} - $
                {(
                  item.prices[
                    item.size === "small" ? 0 : item.size === "medium" ? 1 : 2
                  ] * item.quantity
                ).toFixed(2)}
              </p>
            </div>
          ))}
          <p className="font-bold mt-4">Total: ${getTotalPrice().toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2">
                Delivery Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <p className="mb-4">Payment: Cash on Delivery</p>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
