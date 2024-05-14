import React from 'react';
import ExpandablePanel from './ExpandablePanel';

function InHospitalRegimen({ birthWeight }) {
  let ebm, partialEbm, specialNotes;

  // Determine the category based on birth weight
  if (birthWeight < 1250) {
    ebm = "EBM with Proclacta";
    partialEbm = "EBM/DBM with Proclacta until >33 weeks & >1500g then EBM/DBM HMF 1:25 until 35 weeks then Preterm formula instead of DBM";
    specialNotes = "Follow Prolacta wean to EBM/DBM + HMF 1:25 when >1500g AND >33 weeks."; 
  } else if (birthWeight >= 1250 && birthWeight <= 1500) {
    ebm = "EBM/DBM HMF 1:25";
    partialEbm = "EBM/DBM HMF 1:25 until 35 weeks & >1500g, then Preterm formula instead of DBM";
    specialNotes = "";
  } else if (birthWeight > 1500 && birthWeight <= 2200) {
    ebm = "EBM/DBM HMF 1:25";
    partialEbm = "EBM/DBM HMF 1:25 until 35 weeks, then Preterm formula instead of DBM";
    specialNotes = "(3)Similac Special Care 24, Premature Enfamil 24 Formula";
  } else if (birthWeight > 2200) {
    ebm = "Breastfeed / EBM";
    partialEbm = "Term formula, consider transitional formula if intake <170 mL/kg/day";
    specialNotes = "";
  }

  return (
    <ExpandablePanel title="In Hospital Regimen">
      <div style={{ padding: '10px' }}>
        <p><strong>EBM:</strong> {ebm}</p>
        <p><strong>No/Partial EBM:</strong> {partialEbm}</p>
        {specialNotes && <p><strong>Special Notes:</strong> {specialNotes}</p>}
      </div>
    </ExpandablePanel>
  );
}

export default InHospitalRegimen;
