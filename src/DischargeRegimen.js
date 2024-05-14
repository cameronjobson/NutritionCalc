import React from 'react';
import ExpandablePanel from './ExpandablePanel';

function DischargeRegimen({ birthWeight }) {
  let fullSupply, partialBreastMilk, noBreastMilk, transitionalFormulaDuration, specialNotes, dietitianFollowUp;

  // Determine what to display based on the birth weight
  if (birthWeight < 1250) {
    fullSupply = "Option 1: Continue EBM+HMF 1:50 until 3 mo corrected age";
    partialBreastMilk = "Breastfeed/EBM ad lib alternating with Transitional Formula 22 cal";
    noBreastMilk = "Transitional Formula 22 cal";
    specialNotes = "(2)Similac Special Care 30; Premature Enfamil 30; MAX 120mL/day Start with dessert feeds 15mL q3h (better tolerance). Partner w/ parents for home volume/frequency at discharge. AND (4)Neosure 22, Enfacare 22";
  } else if (birthWeight >= 1250 && birthWeight <= 1500) {
    fullSupply = "Option 2: Breastfeed/EBM ad lib plus EBM + HMF 1:25 x 3-4 bottles/day until 3 mo corrected age";
    partialBreastMilk = "Breastfeed/EBM ad lib alternating with Transitional Formula 22 cal";
    noBreastMilk = "Transitional Formula 22 cal";
    specialNotes = "(2)Similac Special Care 30; Premature Enfamil 30; MAX 120mL/day Start with dessert feeds 15mL q3h (better tolerance). Partner w/ parents for home volume/frequency at discharge. AND(4)Neosure 22, Enfacare 22";
    dietitianFollowUp = "NEST Dietitian Follow Up: 2-3 weeks for SSC30/PE30 dessert feeds or HMF fortification; 4-6 weeks for poor weight gain, feeding issues, suboptimal nutrition regimen, high risk social situations or at provider discretion";
  } else if (birthWeight > 1500 && birthWeight <= 2200) {
    fullSupply = "Option 3: Breastfeed/EBM ad lib plus Preterm Formula 30 cal, 120 ml daily until 3 mo corrected age";
    partialBreastMilk = "Breastfeed/EBM ad lib alternating with Transitional Formula 22 cal";
    noBreastMilk = "Breastfeed/EBM ad lib alternating with Transitional Formula 22 cal";
    specialNotes = "(4)Neosure 22, Enfacare 22";
  } else if (birthWeight > 2200) {
    fullSupply = "Breastfeed/EBM ad lib plus Transitional Formula 22 cal 2-3 feeds/day";
    partialBreastMilk = "Breastfeed/EBM ad lib alternating with Transitional Formula 22 cal";
    noBreastMilk = "Breastfeed/EBM or Term formula";
  }

  if (birthWeight < 750) {
    transitionalFormulaDuration = "until 12 months CGA";
  } else if (birthWeight >= 750 && birthWeight < 1000) {
    transitionalFormulaDuration = "until 9-12 months CGA";
  } else if (birthWeight >= 1000 && birthWeight < 1500) {
    transitionalFormulaDuration = "until 6-9 months CGA";
  } else if (birthWeight >= 1500 && birthWeight < 2200) {
    transitionalFormulaDuration = "until 3-6 months CGA";
  }

  return (
    <ExpandablePanel title="Discharge Regimen">
      <div style={{ padding: '10px' }}>
        <p><strong>Growth goals: Individualized using Fenton app or at least 30-35g/d once > 42 wks</strong></p>
        <p><strong>Breast Milk-Full Supply:</strong> {fullSupply}</p>
        <p><strong>Partial Breast Milk:</strong> {partialBreastMilk}</p>
        <p><strong>No Breast Milk:</strong> {noBreastMilk}</p>
        <p><strong>Length of time to continue transitional formula:</strong> {transitionalFormulaDuration}</p>
        {specialNotes && <p><strong>Special Notes:</strong> {specialNotes}</p>}
        {birthWeight < 1500 && <p><strong>NEST Dietitian Follow Up:</strong> 2-3 weeks for SSC30/PE30 dessert feeds or HMF fortification; 4-6 weeks for poor weight gain, feeding issues, suboptimal nutrition regimen, high risk social situations or at provider discretion </p>}
      </div>
    </ExpandablePanel>
  );
}

export default DischargeRegimen;
