import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';
import './TrophicFeedsPanel.css';

function EarlyAdvFeeds({ birthWeight }) {
  const switchDetails = useMemo(() => ({
    switch0: { id: 0, name: "0", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay01500.png' : '/images/Day0.png', width: '65px', height: '330px' },
    switch1: { id: 1, name: "Day 1", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay11500.png' : '/images/Day1.png', width: '42px', height: '330px' },
    switch2: { id: 2, name: "Day 2", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay21500.png' : '/images/Day2.png', width: '42px', height: '330px' },
    switch3: { id: 3, name: "Day 3", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay31500.png' : '/images/Day3.png', width: '42px', height: '330px' },
    switch4: { id: 4, name: "Day 4", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay41500.png' : '/images/Day4.png', width: '42px', height: '330px' },
    switch5: { id: 5, name: "Day 5", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay51500.png' : '/images/Day5.png', width: '42px', height: '330px' },
    switch6: { id: 6, name: "Full TPN", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay51500.png' : '/images/Day6.png', width: '42px', height: '330px' }
  }), [birthWeight]);

  const [subSwitchStates, setSubSwitchStates] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
    switch5: false,
    switch6: false
  });

  const [selectedImages, setSelectedImages] = useState([]);

  const handleSelectAll = () => {
    const allSwitchesOn = {
      switch1: true,
      switch2: true,
      switch3: true,
      switch4: true,
      switch5: true,
      switch6: birthWeight <= 751
    };

    setSubSwitchStates(allSwitchesOn);

    const allSelectedImages = Object.entries(allSwitchesOn)
        .filter(([key, value]) => value)
        .map(([key]) => ({
            id: switchDetails[key].id,
            imagePath: switchDetails[key].imagePath,
            width: switchDetails[key].width,
            height: switchDetails[key].height
        }))
        .sort((a, b) => a.id - b.id)
        .map(item => ({ path: item.imagePath, width: item.width, height: item.height }));

    setSelectedImages([{ path: switchDetails.switch0.imagePath, width: switchDetails.switch0.width, height: switchDetails.switch0.height }, ...allSelectedImages]);
  };

  const handleSubSwitchChange = (switchKey) => {
    const newState = !subSwitchStates[switchKey];
    setSubSwitchStates(prev => ({ ...prev, [switchKey]: newState }));

    const newSelectedImages = Object.entries(subSwitchStates)
        .filter(([key, value]) => key === switchKey ? newState : value)
        .map(([key]) => ({
            id: switchDetails[key].id,
            imagePath: switchDetails[key].imagePath,
            width: switchDetails[key].width,
            height: switchDetails[key].height
        }))
        .sort((a, b) => a.id - b.id)
        .map(item => ({ path: item.imagePath, width: item.width, height: item.height }));

    const anyActive = newSelectedImages.length > 0;
    setSelectedImages(anyActive ? [{ path: switchDetails.switch0.imagePath, width: switchDetails.switch0.width, height: switchDetails.switch0.height }, ...newSelectedImages] : []);
  };

  return (
    <ExpandablePanel title="Early NPO or trophic feeds + TPN">
      <button onClick={handleSelectAll}>Select All</button>
      {Object.entries(switchDetails)
        .filter(([key]) => key !== 'switch0' && !(key === 'switch6' && birthWeight > 751))  // Exclude Day 0 and conditionally exclude switch6
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
      <div className="image-container scale-down">
        {selectedImages.map((image, index) => (
          <img src={image.path} alt={`Nutritional Plan Day ${index}`} style={{ width: image.width, height: image.height }} key={index} />
        ))}
      </div>
    </ExpandablePanel>
  );
}

export default EarlyAdvFeeds;
