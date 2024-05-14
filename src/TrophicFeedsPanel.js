import React, { useState } from 'react';
import ExpandablePanel from './ExpandablePanel';
import InformationDisplay from './InformationDisplay';

function TrophicFeedsPanel({ parameters }) {
  // Define switch names and their corresponding information strings
  const switchDetails = {
    switch1: { name: "Day of Life 1 (BIRTH)", info: `Details about Nutrition Support. Gestational Age: ${parameters.gestAgeDays} days` },
    switch2: { name: "Day of Life 2", info: `Information on Fluid Management protocols. Birth Weight: ${parameters.birthWeight} grams` },
    switch3: { name: "Day of Life 3", info: "placeholdertext3" },
    switch4: { name: "Day of Life 4", info: "placeholdertext4" },
    switch5: { name: "Day of Life 5", info: "placeholdertext5" },
    switch6: { name: "Full TPN", info: "placeholdertext6" }
  };

  // States for managing the toggling of each switch and storing information
  const [subSwitchStates, setSubSwitchStates] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
    switch5: false,
    switch6: false
  });
  const [infoList, setInfoList] = useState([]);

  const handleSubSwitchChange = (switchKey) => {
    const newState = !subSwitchStates[switchKey];
    setSubSwitchStates({ ...subSwitchStates, [switchKey]: newState });

    // Manage the information list based on the state of the switch
    const info = switchDetails[switchKey].info;
    if (newState) {
      setInfoList(prev => [...prev, info]);
    } else {
      setInfoList(prev => prev.filter(i => i !== info));
    }
  };

  return (
    <ExpandablePanel title="Early NPO or trophic feeds + TPN">
      {Object.entries(switchDetails).map(([key, { name }]) => (
        <div key={key}>
          <label>
            {name}
            <input 
              type="checkbox"
              checked={subSwitchStates[key]}
              onChange={() => handleSubSwitchChange(key)}
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
