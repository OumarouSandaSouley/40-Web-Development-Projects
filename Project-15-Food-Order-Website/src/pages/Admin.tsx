import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

interface Order {
  id: string;
  customerName: string;
  total: number;
  status: "pending" | "delivered";
}

const Admin = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // In a real application, you would fetch orders from your backend
    // For this example, we'll use mock data
    const mockOrders: Order[] = [
      { id: "1", customerName: "John Doe", total: 23.98, status: "pending" },
      {
        id: "2",
        customerName: "Jane Smith",
        total: 14.99,
        status: "delivered",
      },
      { id: "3", customerName: "Bob Johnson", total: 32.5, status: "pending" },
    ];

    setOrders(mockOrders);
  }, []);

  const updateOrderStatus = (
    orderId: string,
    newStatus: "pending" | "delivered"
  ) => {
    // In a real application, you would update the order status in your backend
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  if (!user || user.publicMetadata.role !== "admin") {
    return <p>Access denied. You must be an admin to view this page.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin: Order Management</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Order ID</th>
            <th className="p-2 text-left">Customer</th>
            <th className="p-2 text-left">Total</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-2">{order.id}</td>
              <td className="p-2">{order.customerName}</td>
              <td className="p-2">${order.total.toFixed(2)}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2">
                <select
                  value={order.status}
                  onChange={(e) =>
                    updateOrderStatus(
                      order.id,
                      e.target.value as "pending" | "delivered"
                    )
                  }
                  className="border rounded p-1"
                >
                  <option value="pending">Pending</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
