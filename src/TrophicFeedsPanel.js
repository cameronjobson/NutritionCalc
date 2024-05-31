import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';
import './TrophicFeedsPanel.css';

function EarlyAdvFeeds({ birthWeight }) {
  const switchDetails = useMemo(() => ({
    switch0: { id: 0, name: "0", imagePath: '/images/Day0.png', width: '65px', height: '330px' },
    switch1: { id: 1, name: "Day1", imagePath: '/images/Day1.png', width: '42px', height: '330px' },
    switch2: { id: 2, name: "Day2", imagePath: '/images/Day2.png', width: '42px', height: '330px' },
    switch3: { id: 3, name: "Day3", imagePath: '/images/Day3.png', width: '42px', height: '330px' },
    switch4: { id: 4, name: "Day4", imagePath: '/images/Day4.png', width: '42px', height: '330px' },
    switch5: { id: 5, name: "Day5", imagePath: '/images/Day5.png', width: '42px', height: '330px' },
    switch6: { id: 6, name: "Day6", imagePath: '/images/Day6.png', width: '42px', height: '330px' }
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
    setSelectedImages(anyActive ? [{ path: switchDetails.switch0.imagePath, width: switchDetails.switch0.width, height: switchDetails.switch0.height }, ...newSelectedImages] : newSelectedImages);
  };

  return (
    <ExpandablePanel title="Early Adv feeds + TPN">
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
      <div className="image-container scale-down"> {/* Apply the scaling class to the container */}
        {selectedImages.map((image, index) => (
          <img src={image.path} alt={`Nutritional Plan Day ${index}`} style={{ width: image.width, height: image.height }} key={index} />
        ))}
      </div>
    </ExpandablePanel>
  );
}

export default EarlyAdvFeeds;
