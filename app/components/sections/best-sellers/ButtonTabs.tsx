"use client";

import React, { useState } from "react";
export const ButtonTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Smartphones");
  const tabs = ["Smartphones", "PC & Components", "Appliances"];

  return (
    <>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
            activeTab === tab
              ? "bg-purple-700 text-white shadow-xs"
              : "text-gray-600 hover:text-gray-900 bg-transparent"
          }`}
        >
          {tab}
        </button>
      ))}
    </>
  );
};
