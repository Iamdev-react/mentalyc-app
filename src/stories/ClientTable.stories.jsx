import React, { useState } from "react";
import ClientTable from "../components/ClientTable";
import mockClients from "../mockData";

export default {
    title: "Components/ClientTable",
    component: ClientTable,
    parameters: {
      docs: {
        description: {
          component: `The ClientTable component renders a table that displays client details. It takes mock data as input and renders information like client name, clinician, session date, and notes.`,
        },
      },
    },
  };
  

const Template = (args) => {
  const [hoveredClient, setHoveredClient] = useState(null);

  return (
    <ClientTable {...args} setHoveredClient={setHoveredClient} />
  );
};

export const InTreatment = Template.bind({});
InTreatment.args = {
  clients: mockClients.inTreatment,
  activeTab: "In Treatment",
};

export const Deactivated = Template.bind({});
Deactivated.args = {
  clients: mockClients.deactivated,
  activeTab: "Deactivated",
};
