"use client";
import { useEffect, useState } from "react";

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orderproject");
      const data = await res.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Order Projects</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-300 p-4 rounded-md shadow-sm bg-white"
            >
              <h2 className="font-semibold text-lg">{order.projectName}</h2>
              <a
                href={order.projectUrl}
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                {order.projectUrl}
              </a>
              <p className="mt-2">
                <strong>User:</strong> {order.userName}
              </p>
              <p>
                <strong>Phone:</strong> {order.userPhone}
              </p>
              <p>
                <strong>Message:</strong> {order.userMessage}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
