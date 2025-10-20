"use client";
import { useEffect, useState } from "react";

export default function OrderList() {
  const [activeTab, setActiveTab] = useState("project");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch data based on active tab
  useEffect(() => {
    if (activeTab === "project") {
      fetchOrders("/api/orderproject");
    } else if (activeTab === "template") {
      fetchOrders("/api/ordertemplate");
    } else if (activeTab === "plan") {
      fetchOrders("/api/orderplan");
    }
  }, [activeTab]);

  // 🔹 Generic fetch function
  const fetchOrders = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const text = await res.text(); // handle empty or malformed response
      const data = text ? JSON.parse(text) : {};

      if (data.success) {
        setOrders(data.orders);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Table renderer
  const renderTable = (type) => {
    if (loading)
      return (
        <div className="text-center text-gray-500 py-5">Loading...</div>
      );

    if (orders.length === 0)
      return (
        <div className="text-center text-gray-500 py-5">No data found.</div>
      );

    // ---------- PLAN TABLE ----------
    if (type === "plan") {
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-3 py-2">#</th>
                <th className="border px-3 py-2">Email</th>
                <th className="border px-3 py-2">Website Type</th>
                <th className="border px-3 py-2">Technology</th>
                <th className="border px-3 py-2">Pages</th>
                <th className="border px-3 py-2">Features</th>
                <th className="border px-3 py-2">Payment Methods</th>
                <th className="border px-3 py-2">Others</th>
                <th className="border px-3 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order._id} className="hover:bg-gray-50 align-top">
                  <td className="border px-3 py-2">{index + 1}</td>
                  <td className="border px-3 py-2 break-all">{order.email}</td>
                  <td className="border px-3 py-2">{order.websiteType}</td>
                  <td className="border px-3 py-2">
                    {order.technology?.join(", ")}
                  </td>
                  <td className="border px-3 py-2">
                    {order.pages?.join(", ")}
                  </td>
                  <td className="border px-3 py-2">
                    {order.features?.join(", ")}
                  </td>
                  <td className="border px-3 py-2">
                    {order.paymentMethods?.join(", ")}
                  </td>
                  <td className="border px-3 py-2">
                    {order.others || "N/A"}
                  </td>
                  <td className="border px-3 py-2">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    // ---------- PROJECT / TEMPLATE TABLE ----------
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-3 py-2">#</th>
              <th className="border px-3 py-2">
                {type === "project"
                  ? "Project Name"
                  : type === "template"
                  ? "Template Name"
                  : "Plan Name"}
              </th>
              <th className="border px-3 py-2">User Name</th>
              <th className="border px-3 py-2">Phone</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">Message</th>
              <th className="border px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id} className="hover:bg-gray-50 align-top">
                <td className="border px-3 py-2">{index + 1}</td>
                <td className="border px-3 py-2">
                  <a
                    href={
                      order.projectUrl ||
                      order.templateUrl ||
                      order.planUrl ||
                      "#"
                    }
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    {order.projectName ||
                      order.templateName ||
                      order.planName ||
                      "N/A"}
                  </a>
                </td>
                <td className="border px-3 py-2">{order.userName}</td>
                <td className="border px-3 py-2">{order.userPhone}</td>
                <td className="border px-3 py-2 break-all">{order.userEmail}</td>
                <td className="border px-3 py-2 break-all">
                  {order.userMessage || "—"}
                </td>
                <td className="border px-3 py-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 🔹 Main Component
  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="w-full flex items-center justify-center gap-5">
        <button
          onClick={() => setActiveTab("project")}
          className={`border py-1 px-4 rounded transition ${
            activeTab === "project"
              ? "bg-blue-500 text-white border-blue-500"
              : "hover:bg-gray-100"
          }`}
        >
          Order From Project
        </button>

        <button
          onClick={() => setActiveTab("template")}
          className={`border py-1 px-4 rounded transition ${
            activeTab === "template"
              ? "bg-blue-500 text-white border-blue-500"
              : "hover:bg-gray-100"
          }`}
        >
          Order From Template
        </button>

        <button
          onClick={() => setActiveTab("plan")}
          className={`border py-1 px-4 rounded transition ${
            activeTab === "plan"
              ? "bg-blue-500 text-white border-blue-500"
              : "hover:bg-gray-100"
          }`}
        >
          Order From Plan
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full my-10">
        {activeTab === "project" && renderTable("project")}
        {activeTab === "template" && renderTable("template")}
        {activeTab === "plan" && renderTable("plan")}
      </div>
    </div>
  );
}
