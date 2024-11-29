import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import mockClients from "../mockData";
export default {
    title: "Components/SearchBar",
    component: SearchBar,
    parameters: {
      docs: {
        description: {
          component: `The SearchBar component allows users to search for clients and clinicians by their names. It has input fields for both client and clinician names and triggers the search on key press or input change. Additionally, it includes a button to add a new client.`,
        },
      },
    },
  };
const Template = (args) => {
  const [filteredClients, setFilteredClients] = useState(mockClients); 

  const handleSearch = (clientSearch, clinicianSearch) => {
    const filtered = {
      inTreatment: mockClients.inTreatment.filter(
        (client) =>
          client.clientName.toLowerCase().includes(clientSearch.toLowerCase()) &&
          client.clinicianName.toLowerCase().includes(clinicianSearch.toLowerCase())
      ),
      deactivated: mockClients.deactivated.filter(
        (client) =>
          client.clientName.toLowerCase().includes(clientSearch.toLowerCase()) &&
          client.clinicianName.toLowerCase().includes(clinicianSearch.toLowerCase())
      ),
    };
    setFilteredClients(filtered); 
  };

  const handleAddClient = () => {
    alert("Add new client clicked!");
  };

  return (
    <div>
      <SearchBar
        {...args}
        onSearch={handleSearch} 
        onAddClient={handleAddClient} 
      />
      <div>
        <h3>In Treatment Clients</h3>
        <ul>
          {filteredClients.inTreatment.map((client, index) => (
            <li key={index}>{client.clientName} - {client.clinicianName}</li>
          ))}
        </ul>
        <h3>Deactivated Clients</h3>
        <ul>
          {filteredClients.deactivated.map((client, index) => (
            <li key={index}>{client.clientName} - {client.clinicianName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search for clients or clinicians",
};
