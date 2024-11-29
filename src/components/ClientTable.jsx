import React from "react";
import "./ClientTable.css";

const ClientTable = ({ clients, activeTab, setHoveredClient }) => {
  const handleClick = (client) => {
    if (activeTab === "Deactivated") {
      setHoveredClient(client);
    }
  };

  return (
    <>
      {clients.length === 0 ? (
        <div className="no-clients-message" role="alert" aria-live="assertive">
          ☹️ Oops! No matches found. Please double-check your input.
        </div>
      ) : (
        <div className="centerTable">
          <div className="client-table">
            <table aria-labelledby="client-table-heading">
              <thead>
                <tr>
                  <th id="client-table-heading">Client name</th>
                  <th>Clinician name</th>
                  <th>Client type</th>
                  {activeTab === "In Treatment" && <th>Treatment plan</th>}
                  <th>Last session</th>
                  <th>Unsaved notes</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <tr
                    key={index}
                    onClick={() => handleClick(client)}
                    role="row"
                    tabIndex="0"
                    aria-label={`Client: ${client.clientName}, Clinician: ${client.clinicianName}, Client type: ${client.clientType}`}
                  >
                    <td>{client.clientName}</td>
                    <td>{client.clinicianName}</td>
                    <td>
                      <div
                        className={`client-type-box ${
                          client.clientType === "Individual" ? "bg-red" : ""
                        } 
                                          ${
                                            client.clientType === "Couple"
                                              ? "bg-yellow"
                                              : ""
                                          } 
                                          ${
                                            client.clientType === "Family"
                                              ? "bg-blue"
                                              : ""
                                          } 
                                          ${
                                            client.clientType === "Child"
                                              ? "bg-green"
                                              : ""
                                          } 
                                          ${
                                            client.clientType === "Group"
                                              ? "bg-purple"
                                              : ""
                                          }`}
                      >
                        {client.clientType}
                      </div>
                    </td>
                    {activeTab === "In Treatment" && <td>{client.treatmentPlan}</td>}
                    <td>{client.lastSession}</td>
                    <td>{client.unsavedNotes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientTable;
