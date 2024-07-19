import React, { useState } from "react";

export const SwitchTab = ({ tabs, activeTab, setActiveTab = () => {} }) => {
  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {tabs.map((tab, index) => (
          <div
            key={index.toString()}
            onClick={() => handleTabClick(tab)}
            style={{
              padding: "10px",
              cursor: "pointer",
              fontWeight: activeTab === tab.station_type ? "bold" : "normal",
              borderBottom:
                activeTab === tab.station_type
                  ? "2px solid var(--color-wateen)"
                  : "none",
            }}
          >
            {tab.station_type}
          </div>
        ))}
      </div>
    </div>
  );
};
