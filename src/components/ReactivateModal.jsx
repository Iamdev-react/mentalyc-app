import React from "react";
import "./ReactivateModal.css";

const ReactivateModal = ({ client, onReactivate, onClose }) => {
  return (
    <div className="reactivate-modal-overlay" role="dialog" aria-labelledby="reactivate-modal-title" aria-hidden="false">
      <div className="reactivate-modal-content">
        <h3 id="reactivate-modal-title">Reactivate Client</h3>
        <p>Do you want to reactivate {client.clientName}?</p>
        <div className="reactivate-modal-buttons">
          <button onClick={onClose} aria-label="Close the modal">No</button>
          <button onClick={() => onReactivate(client)} aria-label={`Reactivate ${client.clientName}`}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default ReactivateModal;
