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
            <div>
        {/* Header Section */}
      <header className="NeoTool-header">
        <p></p>
        <p> Please report bugs to Cameron Jobson =&gt; Email: <a href="mailto:cameronajobson@gmail.com">cameronajobson@gmail.com</a> Phone: <a href="tel:+18173198996">817-319-8996</a></p>
      </header>
      </div>
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
