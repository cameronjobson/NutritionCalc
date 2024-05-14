import React, { useState } from 'react';
import ParameterForm from './ParameterForm';
import SwitchDisplay from './SwitchDisplay';
import ExpandablePanel from './ExpandablePanel';
import TrophicFeedsPanel from './TrophicFeedsPanel';
import MalnutritionCalc from './MalnutritionCalc';
import InHospitalRegimen from './InHospitalRegimen';
import DischargeRegimen from './DischargeRegimen';

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
    "Discharge Regimen": false  // New switch for Discharge Regimen
  });

  const handleParametersSubmit = (params) => {
    setParameters(params);
  };

  const handleSwitchChange = (switchName, newState) => {
    setSwitches({ ...switches, [switchName]: newState });
  };

  const hasValidParameters = parameters.gestAgeDays && parameters.birthWeight;

  return (
    <div>
      <ParameterForm onParametersSubmit={handleParametersSubmit} />
      {hasValidParameters && (
        <>
          {Object.keys(switches).map((switchName, index) => (
            <SwitchDisplay 
              key={index}
              label={switchName}
              onSwitchChange={handleSwitchChange}
              parameters={parameters}
            />
          ))}
          {switches["Special Condition Information"] && (
            <ExpandablePanel title="Special Condition Information">
              {/* Optionally, add more custom content or child components here */}
            </ExpandablePanel>
          )}
          {switches["Malnutrition Calc"] && (
            <MalnutritionCalc />
          )}
          {switches["Early NPO or trophic feeds + TPN"] && (
            <TrophicFeedsPanel parameters={parameters} />
          )}
          {switches["In Hospital Regimen"] && (
            <InHospitalRegimen birthWeight={parseFloat(parameters.birthWeight)} />
          )}
          {switches["Discharge Regimen"] && (
            <DischargeRegimen birthWeight={parseFloat(parameters.birthWeight)} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
