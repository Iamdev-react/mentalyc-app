import React from "react";
import "./Tabs.css";

function Tabs({ activeTab, setActiveTab, mockClients }) {
  return (
    <div className="containerTab">
      <div className="tabs">
        <button
          className={activeTab === "In Treatment" ? "active" : ""}
          onClick={() => setActiveTab("In Treatment")}
          aria-label="Select In Treatment Tab"
          
        >
          In treatment {`(${mockClients["inTreatment"]?.length})`}
        </button>
        <button
          className={activeTab === "Deactivated" ? "active" : ""}
          onClick={() => setActiveTab("Deactivated")}
          aria-label="Select Deactivated Tab"
       
        >
          Deactivated {`(${mockClients["deactivated"]?.length})`}
        </button>
      </div>
    </div>
  );
}

export default Tabs;
