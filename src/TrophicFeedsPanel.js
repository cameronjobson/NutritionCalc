import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';
import './TrophicFeedsPanel.css';

function TrophicFeeds({ birthWeight }) {
  const switchDetails = useMemo(() => ({
    switch10: { id: 0, name: "0", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay01500.png' : '/images/Day0.png', width: '65px', height: '330px' },
    switch11: { id: 1, name: "Day 1", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay11500.png' : '/images/Day1.png', width: '42px', height: '330px' },
    switch12: { id: 2, name: "Day 2", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay21500.png' : '/images/Day2.png', width: '42px', height: '330px' },
    switch13: { id: 3, name: "Day 3", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay31500.png' : '/images/Day3.png', width: '42px', height: '330px' },
    switch14: { id: 4, name: "Day 4", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay41500.png' : '/images/Day4.png', width: '42px', height: '330px' },
    switch15: { id: 5, name: birthWeight < 750 ? "Day 5" : "Full TPN", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay51500.png' : '/images/Day5.png', width: '42px', height: '330px' },
    switch16: { id: 6, name: "Full TPN", imagePath: birthWeight >= 750 ? '/images/TrophicFeedsDay51500.png' : '/images/Day6.png', width: '42px', height: '330px' }
  }), [birthWeight]);

  const [subSwitchStates, setSubSwitchStates] = useState({
    switch11: false,
    switch12: false,
    switch13: false,
    switch14: false,
    switch15: false,
    switch16: false
  });

  const [selectedImages, setSelectedImages] = useState([]);

  const handleSelectAll = () => {
    const allSwitchesOn = {
      switch11: true,
      switch12: true,
      switch13: true,
      switch14: true,
      switch15: true,
      switch16: birthWeight <= 751
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

    setSelectedImages([{ path: switchDetails.switch10.imagePath, width: switchDetails.switch10.width, height: switchDetails.switch10.height }, ...allSelectedImages]);
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
    setSelectedImages(anyActive ? [{ path: switchDetails.switch10.imagePath, width: switchDetails.switch10.width, height: switchDetails.switch10.height }, ...newSelectedImages] : []);
  };

  return (
    <ExpandablePanel title="Early NPO or trophic feeds + TPN">
      <button onClick={handleSelectAll}>Select All</button>
      <div className="checkbox-container2">
      {Object.entries(switchDetails)
        .filter(([key]) => key !== 'switch10' && !(key === 'switch16' && birthWeight > 751))  // Exclude Day 0 and conditionally exclude switch6
        .map(([key, { name }]) => (
          <div key={key}>
        <input
          type="checkbox"
          id={key}
          checked={subSwitchStates[key]}
          onChange={() => handleSubSwitchChange(key)}
        />
        <label htmlFor={key}>{name}</label>
      </div>
      ))}
      </div>
      <div className="image-container scale-down">
        {selectedImages.map((image, index) => (
          <img src={image.path} alt={`Nutritional Plan Day ${index}`} style={{ width: image.width, height: image.height }} key={index} />
        ))}
      </div>
    </ExpandablePanel>
  );
}

export default TrophicFeeds;
