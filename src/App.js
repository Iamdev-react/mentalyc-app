import React, { useState } from "react";
import Tabs from "./components/Tabs";
import ClientTable from "./components/ClientTable";
import SearchBar from "./components/SearchBar";
import AddClientModal from "./components/AddClientModal";
import ReactivateModal from "./components/ReactivateModal"; 
import Container from '@mui/material/Container';
import mockClients from "./mockData";
import { SiteHeader } from './components/SiteHeader'; 
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("In Treatment");
  const [searchQuery, setSearchQuery] = useState({ client: "", clinician: "" });
  const [clients, setClients] = useState(mockClients);
  const [showModal, setShowModal] = useState(false);
  const [hoveredClient, setHoveredClient] = useState(null); 

  const handleAddClient = (newClient) => {
    const tabKey = activeTab === "In Treatment" ? "inTreatment" : "deactivated";

    mockClients[tabKey].push(newClient);

    setClients({
      inTreatment: [...mockClients.inTreatment],
      deactivated: [...mockClients.deactivated]
    });

    setShowModal(false); 
  };

  const filteredClients = clients[
    activeTab === "In Treatment" ? "inTreatment" : "deactivated"
  ].filter(
    (client) =>
      client.clientName.toLowerCase().includes(searchQuery.client.toLowerCase()) &&
      client.clinicianName.toLowerCase().includes(searchQuery.clinician.toLowerCase())
  );


  const handleSearch = (clientSearch, clinicianSearch) => {
    setSearchQuery({ client: clientSearch, clinician: clinicianSearch });
  };
  const handleReactivateClient = (client) => {
    const updatedDeactivated = mockClients.deactivated.filter(
      (c) => c.clientName !== client.clientName
    );

    mockClients.inTreatment.push(client);

    setClients({
      inTreatment: [...mockClients.inTreatment], 
      deactivated: [...updatedDeactivated],  
    });

    setHoveredClient(null);
  };

  const closeModal = () => {
    setHoveredClient(null);
  };

  return (
    <div className="app">
      <header className="header">
        <SiteHeader />
      </header>
      <Container>
        <div className="content">
          <div>
            <div style={{ textAlign: "end" ,  marginTop:"10px"}} >
              <img src="./Buttons.png" alt="" />
            </div>
            <div >
              <h2 className="clientheading"> Clients</h2>
            </div>
          </div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} mockClients={mockClients} />
          <SearchBar
            onSearch={handleSearch} 
            onAddClient={() => setShowModal(true)} 
          />
          <ClientTable clients={filteredClients} activeTab={activeTab} setHoveredClient={setHoveredClient} /> 
          {hoveredClient && (
            <ReactivateModal
              client={hoveredClient} 
              onReactivate={handleReactivateClient}
              onClose={closeModal}
            />
          )}
          {showModal && (
            <AddClientModal
              onClose={() => setShowModal(false)} 
              onAddClient={handleAddClient} 
            />
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
