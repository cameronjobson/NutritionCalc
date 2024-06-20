import './App.css';
import React, { useState } from 'react';
import ParameterForm from './ParameterForm';
import SwitchDisplay from './SwitchDisplay';
import ExpandablePanel from './ExpandablePanel';
import TrophicFeedsPanel from './TrophicFeedsPanel';
import MalnutritionCalc from './MalnutritionCalc';
import InHospitalRegimen from './InHospitalRegimen';
import DischargeRegimen from './DischargeRegimen';
import VitaminsMinerals from './VitaminsMinerals';
import EarlyAdvFeeds from './EarlyAdvFeeds';
import FullFeedsNutInfo from './FullFeedsNutInfo'
import PoorGrowth from './PoorGrowth'
import FluidRestriction from './FluidRestriction'
import DBiliAndLipids from './DBiliAndLipids'
import GrowthTargets from './GrowthTargets';
import RefeedingSyndrome from './RefeedingSyndrome';

function App() {
  const [parameters, setParameters] = useState({
    gestAgeDays: '',
    birthWeight: ''
  });
  
  const [switches, setSwitches] = useState({
    "Malnutrition Calc": false,
    "Early NPO or trophic feeds + TPN": false,
    "In Hospital Regimen": false,
    "Discharge Regimen": false,
    "Vitamins & Minerals": false,
    "Early Adv Feeds + TPN": false,
    "Full Feeds Nut Info": false,
    "Poor Growth": false,
    "Fluid Restriction": false,
    "D Bili & Lipids": false,
    "Growth Targets": false,
    "Refeeding Syndrome": false
  });

  const handleParametersSubmit = (params) => {
    setParameters(params);
  };

  const handleSwitchChange = (switchName, newState) => {
    setSwitches({ ...switches, [switchName]: newState });
  };

  const hasValidParameters = parameters.gestAgeDays && parameters.birthWeight;

  return (
    <div className="app-container">
            <div className="first-header">
                {(<img src={'/images/pediatrixlogo.jpg'} alt="Trophic Feeds" style={{ width: '430px', height: '240px' }} />)}
                <div className="disclaimer">
                <h1>NICU Nutrition Guidline Hub</h1>
                <h2>(Not Affiliated with Pediatrix)</h2>
                <p>
    <strong>Disclaimer:</strong> The tools and information on this site are designed to aid neonatologists in managing and caring for newborns following the Pediatrix Fort Worth guidlines. Please note that I am not affiliated with Pediatrix Fort Worth.
</p>
<p>
    The data and treatment recommendations are meant as a guideline only. Every newborn is unique, and it is critical to consider variations in clinical conditions and responses to treatments. Healthcare professionals should exercise clinical judgment and consult the relevant medical literature and guidelines.
</p>
<p>
    The contributers to this website and I will not be liable for any inaccuracies or errors, nor for actions taken based on the information provided here. Ensuring patient safety and appropriate care should always be a priority, and consultation with experienced colleagues or specialists is recommended.
</p>
<p>
    For inquiries about creating a tailored website for your practice, or to report an issue, please contact me using the info in the header.
</p>

                </div>
            </div>
            <div>
        {/* Header Section */}
      <header className="NeoTool-header">
        <p></p>
        <p> Please report bugs to Cameron Jobson =&gt; Email: <a href="mailto:cameronajobson@gmail.com">cameronajobson@gmail.com</a> Phone: <a href="tel:+18173198996">817-319-8996</a></p>
      </header>
      </div>
      <div className="parameters-and-switches">
      <ParameterForm onParametersSubmit={handleParametersSubmit} />
      {hasValidParameters && (
        <div className="switches-container">
          {Object.keys(switches).map((switchName, index) => (
            <SwitchDisplay 
              key={index}
              label={switchName}
              onSwitchChange={handleSwitchChange}
              parameters={parameters} // Pass parameters here
            />
          ))}
        </div>
      )}
      </div>
      {switches["Malnutrition Calc"] && <MalnutritionCalc />}
      {switches["Early NPO or trophic feeds + TPN"] && <TrophicFeedsPanel birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["In Hospital Regimen"] && <InHospitalRegimen birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Discharge Regimen"] && <DischargeRegimen birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Vitamins & Minerals"] && <VitaminsMinerals birthWeight={parameters.birthWeight} />}
      {switches["Early Adv Feeds + TPN"] && <EarlyAdvFeeds birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Full Feeds Nut Info"] && <FullFeedsNutInfo birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Poor Growth"] && <PoorGrowth birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Fluid Restriction"] && <FluidRestriction birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["D Bili & Lipids"] && <DBiliAndLipids birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Growth Targets"] && <GrowthTargets birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Refeeding Syndrome"] && <RefeedingSyndrome birthWeight={parseFloat(parameters.birthWeight)} />}
    </div>
    
  );
}

export default App;
