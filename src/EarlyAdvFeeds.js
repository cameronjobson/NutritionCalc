import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';
import './EarlyAdvFeeds.css';

function EarlyAdvFeeds({ birthWeight }) {
  const [imageVisible, setImageVisible] = useState(false);
  const [moreFeedingAdvImageVisible, setMoreFeedingAdvImageVisible] = useState(false);
  const [moreCaPhosProlactaImageVisible, setMoreCaPhosProlactaImageVisible] = useState(false);
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
      switch6: true
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

  const switchDetails = useMemo(() => ({
    switch0: { id: 0, name: "0", imagePath: birthWeight > 1250 ? '/images/ADVFeedsMore0.png' : '/images/ADVFeedsLess0.png', width: '50px', height: '360px' },
    switch1: { id: 1, name: "20", imagePath: birthWeight > 1250 ? '/images/ADVFeedsMore1.png' : '/images/ADVFeedsLess1.png', width: '42px', height: '360px' },
    switch2: { id: 2, name: "50", imagePath: birthWeight > 1250 ? '/images/ADVFeedsMore2.png' : '/images/ADVFeedsLess2.png', width: '42px', height: '360px' },
    switch3: { id: 3, name: "80", imagePath: birthWeight > 1250 ? '/images/ADVFeedsMore3.png' : '/images/ADVFeedsLess3.png', width: '42px', height: '360px' },
    switch4: { id: 4, name: "110", imagePath: birthWeight > 1250 ? '/images/ADVFeedsMore4.png' : '/images/ADVFeedsLess4.png', width: '42px', height: '360px' },
    switch5: { id: 5, name: "140", imagePath: birthWeight > 1250 ? '/images/ADVFeedsMore5.png' : '/images/ADVFeedsLess5.png', width: '42px', height: '360px' },
    switch6: { id: 6, name: "170", imagePath: birthWeight > 1250 ? '/images/ADVFeedsMore6.png' : '/images/ADVFeedsLess6.png', width: '42px', height: '360px' }
  }), [birthWeight]);

  const selectedImage = useMemo(() => {
    if (birthWeight <= 750) return '/images/MoreTrophic750.png';
    if (birthWeight > 750 && birthWeight <= 1250) return '/images/MoreTrophic751-1250.png';
    return '/images/MoreTrophic1250-2200.png';
  }, [birthWeight]);

  const imageStyle = useMemo(() => {
    if (selectedImage === '/images/MoreTrophic750.png') {
        return { width: '476px', height: '267px' };  // New dimensions for "2200+" image
    }
    if (selectedImage === '/images/MoreTrophic751-1250.png') {
        return { width: '476px', height: '267px' };  // New dimensions for "2200+" image
    }
    if (selectedImage === '/images/MoreOnFeeding1250.png') {
      return { width: '476px', height: '267px' };  // New dimensions for "2200+" image
    }
    if (selectedImage === '/images/MoreOnFeeding2200.png') {
      return { width: '476px', height: '267px' };  // New dimensions for "2200+" image
    }

    return { width: '476px', height: '267px' }; // Default dimensions
}, [selectedImage]);

  const feedingAdvImage = useMemo(() => {
     if (birthWeight <= 1250){
      return '/images/MoreOnFeeding1250.png';
     }
     return '/images/MoreOnFeeding2200.png';
  }, [birthWeight]);



  const caPhosProlactaImage = '/images/MoreOnCa.png';

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
      <button onClick={handleSelectAll}>Select All</button>
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
      <div className="image-container scale-down">
        {selectedImages.map((image, index) => (
          <img src={image.path} alt={`Nutritional Plan Day ${index}`} style={{ width: image.width, height: image.height }} key={index} />
        ))}
      </div>
      <div>
        <label>
          More on Trophic Feeds
          <input
            type="checkbox"
            checked={imageVisible}
            onChange={() => setImageVisible(!imageVisible)}
            style={{ marginLeft: '10px' }}
          />
        </label>
        {imageVisible && (
          <img src={selectedImage} alt="Trophic Feeds" style={imageStyle} />
        )}
      </div>
      <div>
        <label>
          More on Feeding Advancements
          <input
            type="checkbox"
            checked={moreFeedingAdvImageVisible}
            onChange={() => setMoreFeedingAdvImageVisible(!moreFeedingAdvImageVisible)}
            style={{ marginLeft: '10px' }}
          />
        </label>
        {moreFeedingAdvImageVisible && (
          <img src={feedingAdvImage} alt="Feeding Advancements" style={imageStyle} />
        )}
      </div>
      <div>
        <label>
          More on Ca/Phos and Prolacta
          <input
            type="checkbox"
            checked={moreCaPhosProlactaImageVisible}
            onChange={() => setMoreCaPhosProlactaImageVisible(!moreCaPhosProlactaImageVisible)}
            style={{ marginLeft: '10px' }}
          />
        </label>
        {moreCaPhosProlactaImageVisible && (
          <img src={caPhosProlactaImage} alt="Ca/Phos and Prolacta" style={{ width: '376px', height: '330px' }} />
        )}
      </div>
    </ExpandablePanel>
  );
}

export default EarlyAdvFeeds;
