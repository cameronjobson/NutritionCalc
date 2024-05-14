import React, { useState } from 'react';
import ExpandablePanel from './ExpandablePanel';
import InformationDisplay from './InformationDisplay';

function TrophicFeedsPanel({ parameters }) {
  const [infoList, setInfoList] = useState([]);
  const [subSwitches, setSubSwitches] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
    switch5: false,
    switch6: false
  });

  const handleSubSwitchChange = (switchName) => {
    const newState = !subSwitches[switchName];
    setSubSwitches({ ...subSwitches, [switchName]: newState });

    // Manage the information list based on the state of the switch
    const info = `Information for ${switchName} (Gestational Age: ${parameters.gestAgeDays} days, Birth Weight: ${parameters.birthWeight} grams)`;
    if (newState) {
      setInfoList(prev => [...prev, info]);
    } else {
      setInfoList(prev => prev.filter(i => i !== info));
    }
  };

  return (
    <ExpandablePanel title="Early NPO or trophic feeds + TPN">
      {Object.keys(subSwitches).map(switchName => (
        <div key={switchName}>
          <label>
            {switchName}
            <input 
              type="checkbox"
              checked={subSwitches[switchName]}
              onChange={() => handleSubSwitchChange(switchName)}
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
      ))}
      {infoList.map((info, index) => (
        <InformationDisplay key={index} info={info} />
      ))}
    </ExpandablePanel>
  );
}

export default TrophicFeedsPanel;
