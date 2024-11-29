import React, { useState } from "react";
import "./SearchBar.css";
import { Box, Divider, Typography } from "@mui/material";

const SearchBar = ({ onSearch, onAddClient }) => {
  const [clientSearch, setClientSearch] = useState(""); 
  const [clinicianSearch, setClinicianSearch] = useState(""); 

  const handleSearchChange = () => {
    onSearch(clientSearch, clinicianSearch); 
  };

  return (
    <div className="search-bar">
      <div className="search-inputs">
        <div>
          <Typography variant="subtitle1">Client Name</Typography>
          <input
            type="text"
            className="search-input"
            placeholder="Search client"
            value={clientSearch}
            onChange={(e) => {
              setClientSearch(e.target.value); 
              handleSearchChange(); 
            }}
            onKeyUp={handleSearchChange}
            aria-label="Search for a client" 
          />
        </div>
        <div>
          <Typography variant="subtitle1">Clinician Name</Typography>
          <input
            type="text"
            className="search-input"
            placeholder="Search clinician"
            value={clinicianSearch}
            onChange={(e) => {
              setClinicianSearch(e.target.value); 
              handleSearchChange(); 
            }}
            onKeyUp={handleSearchChange}
            aria-label="Search for a clinician" 
          />
        </div>
      </div>
      <Box sx={{ mt: 2 }}>
        <Divider sx={{ width: "250px" }} />
      </Box>
      <button
        className="add-client-btn"
        onClick={onAddClient}
        aria-label="Add new client" 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="plus-icon"
          aria-hidden="true" 
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Add new client
      </button>
    </div>
  );
};

export default SearchBar;
