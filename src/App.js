import React, { useState } from 'react';
import ParameterForm from './ParameterForm';
import SwitchDisplay from './SwitchDisplay';
import ExpandablePanel from './ExpandablePanel';
import TrophicFeedsPanel from './TrophicFeedsPanel';

function App() {
  const [parameters, setParameters] = useState({
    gestAgeDays: '',
    birthWeight: ''
  });
  const [switches, setSwitches] = useState({
    "Special Condition Information": false,
    "General Condition Information": false,
    "Early NPO or trophic feeds + TPN": false
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
          {switches["General Condition Information"] && (
            <ExpandablePanel title="General Condition Information">
              {/* Optionally, add more custom content or child components here */}
            </ExpandablePanel>
          )}
          {switches["Early NPO or trophic feeds + TPN"] && (
            <TrophicFeedsPanel parameters={parameters} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
