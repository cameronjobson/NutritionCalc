import React, { useState } from 'react';
import ExpandablePanel from './ExpandablePanel';
import './TrophicFeedsPanel.css';

function TrophicFeedsPanel({ parameters }) {
  const switchDetails = {
    switch0: { id: 0, name: "Day of Life 0", imagePath: '/images/Day0.png' },
    switch1: { id: 1, name: "Day of Life 1 (BIRTH)", imagePath: '/images/Day1.png' },
    switch2: { id: 2, name: "Day of Life 2", imagePath: '/images/Day2.png' },
    switch3: { id: 3, name: "Day of Life 3", imagePath: '/images/Day3.png' },
    switch4: { id: 4, name: "Day of Life 4", imagePath: '/images/Day4.png' },
    switch5: { id: 5, name: "Day of Life 5", imagePath: '/images/Day5.png' },
    switch6: { id: 6, name: "Full TPN", imagePath: '/images/Day6.png' }
  };

  const [subSwitchStates, setSubSwitchStates] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
    switch5: false,
    switch6: false
  });

  const [selectedImages, setSelectedImages] = useState([]);

  const handleSubSwitchChange = (switchKey) => {
    const newState = !subSwitchStates[switchKey];
    setSubSwitchStates(prev => ({ ...prev, [switchKey]: newState }));

    const newSelectedImages = Object.entries(subSwitchStates)
        .filter(([key, value]) => key === switchKey ? newState : value)
        .map(([key]) => ({
            id: switchDetails[key].id,
            imagePath: switchDetails[key].imagePath
        }))
        .sort((a, b) => a.id - b.id)
        .map(item => item.imagePath);

    const anyActive = newSelectedImages.length > 0;
    setSelectedImages(anyActive ? [switchDetails.switch0.imagePath, ...newSelectedImages] : newSelectedImages);
  };

  return (
    <ExpandablePanel title="Early NPO or trophic feeds + TPN">
      {Object.entries(switchDetails)
        .filter(([key]) => key !== 'switch0')  // Exclude Day 0 from the UI controls
        .map(([key, { name }]) => (
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
      <div className="image-container">
        {selectedImages.map((imagePath, index) => (
          <img src={imagePath} alt={`Nutritional Plan Day ${index}`} className="image-size" key={index} />
        ))}
      </div>
    </ExpandablePanel>
  );
}

export default TrophicFeedsPanel;
