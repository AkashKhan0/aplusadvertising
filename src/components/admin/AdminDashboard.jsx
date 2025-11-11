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
import FAQForm from "./FAQForm";
import FAQList from "./FAQList";
import Blogpost from "./Blogpost";
import Blogpostlist from "./Blogpostlist";
import Clientlogo from "./Clientlogo";

export default function AdminDashboard() {
  // Tabs data
  const tabs = [
    { id: 1, title: "Add Service", component: <AddService /> },
    { id: 2, title: "Service List", component: <ServiceList /> },
    { id: 3, title: "Add Template", component: <ProductList /> },
    { id: 4, title: "Template List", component: <UserList /> },
    { id: 5, title: "Add Partner", component: <AddPartner /> },
    { id: 6, title: "Partner List", component: <Partner /> },
    { id: 7, title: "Add Project", component: <AddProject /> },
    { id: 8, title: "Project List", component: <ProjectList /> },
    { id: 9, title: "Add Faq", component: <FAQForm /> },
    { id: 10, title: "FAQ List", component: <FAQList /> },
    { id: 11, title: "Review Manager", component: <ReviewManager /> },
    { id: 12, title: "Orders List", component: <OrderList /> },
    { id: 13, title: "Add Blog Post", component: <Blogpost /> },
    { id: 14, title: "Blog Post List", component: <Blogpostlist /> },
    { id: 15, title: "Client Logo List", component: <Clientlogo /> },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // default first active

  // Find active component
  const activeComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <>
      <div className="w-full universal">
        <div className="w-full h-full flex items-stretch justify-between">
          <div className="left w-[20%] h-full min-h-[calc(100vh-40px)] p-5 bg-[#a2b2d1] sticky top-[50px] overflow-y-auto">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`cursor-pointer w-full py-1 px-2 font-semibold  ${
                  activeTab === tab.id
                    ? "bg-[#CBD6EB] text-[#9C1F0E] font-semibold"
                    : (tab.id + 1) % 2 === 0
                    ? "bg-[#9c1f0e34] text-white"
                    : "hover:bg-[#9EAABD]"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <div className="right w-[80%] p-5 h-full min-h-[calc(100vh-40px)] sticky top-[50px] overflow-y-auto">{activeComponent}</div>
        </div>
      </div>
    </>
  );
}
