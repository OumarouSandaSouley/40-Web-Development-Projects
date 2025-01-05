import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { appwriteConfig, databases } from "../config";
import { Query } from "appwrite";

interface Order {
  id: string;
  items: {
    name: string;
    size: "small" | "medium" | "large";
    quantity: number;
    price: number;
  }[];
  total: number;
  createdAt: string;
  status: "pending" | "delivered";
  address: string;
}

const Orders = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);


  useEffect(() => {
    if (!user) return;


    const fetchOrders = async () => {
      try {
        const response = await databases.listDocuments(
          appwriteConfig.databaseID, // Replace with your database ID
          appwriteConfig.ordersCollectionID, // Replace with your collection ID
          [Query.equal("userId", user.id)] // Correctly formatted query
        );

        setOrders(
          response.documents.map((doc) => ({
            id: doc.$id,
            items: doc.items,
            total: doc.total,
            createdAt: doc.createdAt,
            status: doc.status,
            address: doc.address,
          }))
        );
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) {
    return <p>Please sign in to view your orders.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">Order #{order.id}</h2>
              <p className="text-gray-600 mb-2">
                Date: {new Date(order.createdAt).toLocaleString()}
              </p>
              <p className="text-gray-600 mb-2">Status: {order.status}</p>
              <p className="text-gray-600 mb-2">Address: {order.address}</p>
              <div>
                <h3 className="font-bold mt-4 mb-2">Items:</h3>
                <ul className="list-disc list-inside">
                  {order.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="font-bold mt-4">Total: ${order.total.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
