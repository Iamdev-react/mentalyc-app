import React, { useState } from "react";
import Tabs from "../components/Tabs";
import mockClients from "../mockData";


export default {
    title: "Components/Tabs",
    component: Tabs,
    parameters: {
      docs: {
        description: {
          component: `The Tabs component allows users to toggle between different client categories (e.g., "In Treatment" and "Deactivated"). It displays the count of clients in each category and highlights the active tab.`,
        },
      },
    },
  };

const Template = (args) => {
  const [activeTab, setActiveTab] = useState("In Treatment");

  return <Tabs {...args} activeTab={activeTab} setActiveTab={setActiveTab} mockClients={mockClients} />;
};

export const Default = Template.bind({});
Default.args = {
  
};
