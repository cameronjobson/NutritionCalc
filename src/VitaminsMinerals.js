import React, { useState } from 'react';
import ExpandablePanel from './ExpandablePanel';
import './VitaminMinerals.css'


function VitaminMineralsPanel() {
    const [selectedInfo, setSelectedInfo] = useState(null);
  
    const infoDetails = {
      vitaminA: {
        name: "EBM/DBM with Prolacta",
        details: "Details about Vitamin A, including dosage and benefits."
      },
      vitaminB12: {
        name: "EBM/DBM with HMF 1:25",
        details: "Information on Vitamin B12, including how it helps with red blood cells."
      },
      vitaminC: {
        name: "Over 75% preterm formula",
        details: "Details about Vitamin C, its antioxidant properties, and immune support."
      },
      calcium: {
        name: "EBM 1:50 or EBM/HMF 1:25",
        details: "Information about Calcium, important for bone health and muscle function."
      },
      iron: {
        name: "Transitional Formula",
        details: "Details about Iron, crucial for blood production and oxygen transport."
      },
      zinc: {
        name: "EBM and/or Term Formula",
        details: "Information on Zinc, essential for immune function and metabolism."
      }
    };
  
    const handleButtonClick = (key) => {
      setSelectedInfo(infoDetails[key]);
    };
  
    return (
      <ExpandablePanel title="Vitamins and Minerals Supplement Details">
        <div className="flex-container">
          <div className="buttons-container">
            {Object.entries(infoDetails).map(([key, { name }]) => (
              <button key={key} onClick={() => handleButtonClick(key)} className="vitamin-button">
                {name}
              </button>
            ))}
          </div>
          {selectedInfo && (
            <div className="detail-container">
              <p><strong>{selectedInfo.name}:</strong> {selectedInfo.details}</p>
            </div>
          )}
        </div>
      </ExpandablePanel>
    );
  }
  
  export default VitaminMineralsPanel;