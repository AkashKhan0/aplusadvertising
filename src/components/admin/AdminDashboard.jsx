"use client";
import { useState } from "react";
import UserList from "./UserList";
import OrderList from "./OrderList";
import ProductList from "./ProductList";
import ServiceList from "./ServiceList";
import AddService from "./AddService";
import Partner from "./Partner";
import AddPartner from "./AddPartner";
import AddProject from "./AddProject";
import ProjectList from "./ProjectList";
import ReviewManager from "./ReviewManager";

export default function AdminDashboard() {
  // Tabs data
  const tabs = [
    { id: 1, title: "Add Service", component: <AddService /> },
    { id: 2, title: "Service List", component: <ServiceList /> },
    { id: 3, title: "Users List", component: <UserList /> },
    { id: 4, title: "Orders List", component: <OrderList /> },
    { id: 5, title: "Add Products", component: <ProductList /> },
    { id: 6, title: "Add Partner", component: <AddPartner /> },
    { id: 7, title: "Partner List", component: <Partner /> },
    { id: 8, title: "Add Project", component: <AddProject /> },
    { id: 9, title: "Project List", component: <ProjectList /> },
    { id: 10, title: "ReviewManager", component: <ReviewManager /> },
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
