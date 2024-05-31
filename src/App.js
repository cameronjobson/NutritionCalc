import './App.css';
import React, { useState } from 'react';
import ParameterForm from './ParameterForm';
import SwitchDisplay from './SwitchDisplay';
import ExpandablePanel from './ExpandablePanel';
import TrophicFeedsPanel from './TrophicFeedsPanel';
import MalnutritionCalc from './MalnutritionCalc';
import InHospitalRegimen from './InHospitalRegimen';
import DischargeRegimen from './DischargeRegimen';
import VitaminMineralsPanel from './VitaminsMinerals';
import EarlyAdvFeeds from './EarlyAdvFeeds';

function App() {
  const [parameters, setParameters] = useState({
    gestAgeDays: '',
    birthWeight: ''
  });
  const [switches, setSwitches] = useState({
    "Special Condition Information": false,
    "Malnutrition Calc": false,
    "Early NPO or trophic feeds + TPN": false,
    "In Hospital Regimen": false,
    "Discharge Regimen": false,
    "Vitamins and Minerals": false,
    "Early Adv Feeds + TPN": false
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
      <ParameterForm onParametersSubmit={handleParametersSubmit} />
      {hasValidParameters && (
        <div className="switches-container">
          {Object.keys(switches).map((switchName, index) => (
            <SwitchDisplay 
              key={index}
              label={switchName}
              onSwitchChange={handleSwitchChange}
              parameters={parameters}
            />
          ))}
        </div>
      )}
      {switches["Special Condition Information"] && <ExpandablePanel title="Special Condition Information" />}
      {switches["Malnutrition Calc"] && <MalnutritionCalc />}
      {switches["Early NPO or trophic feeds + TPN"] && <TrophicFeedsPanel birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["In Hospital Regimen"] && <InHospitalRegimen birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Discharge Regimen"] && <DischargeRegimen birthWeight={parseFloat(parameters.birthWeight)} />}
      {switches["Vitamins and Minerals"] && <VitaminMineralsPanel parameters={parameters} />}
      {switches["Early Adv Feeds + TPN"] && <EarlyAdvFeeds birthWeight={parseFloat(parameters.birthWeight)} />}

    </div>
  );
}

export default App;
