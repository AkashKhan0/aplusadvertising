"use client";
import { useState } from "react";
import UserList from "./UserList";
import OrderList from "./OrderList";
import ProductList from "./ProductList";
import ServiceList from "./ServiceList";
import AddService from "./AddService";

export default function AdminDashboard() {
  // Tabs data
  const tabs = [
    { id: 1, title: "Add Service", component: <AddService /> },
    { id: 2, title: "ServiceList", component: <ServiceList /> },
    { id: 3, title: "UsersList", component: <UserList /> },
    { id: 4, title: "OrdersList", component: <OrderList /> },
    { id: 5, title: "ProductsList", component: <ProductList /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // default first active

  // Find active component
  const activeComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <>
      <div className="w-full universal">
        <div className="w-full h-full min-h-screen flex items-stretch justify-between">
          <div className="left w-[20%] p-5 bg-[#a2b2d1]">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`cursor-pointer w-full py-1 px-2 font-semibold ${
                  activeTab === tab.id
                    ? "bg-[#CBD6EB] text-[#9C1F0E] font-semibold"
                    : "hover:bg-[#9EAABD]"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <div className="right w-[80%] p-5">
            {activeComponent}
          </div>
        </div>
      </div>
    </>
  );
}
