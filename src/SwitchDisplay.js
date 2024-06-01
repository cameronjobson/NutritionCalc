import React, { useEffect, useState } from 'react';
import './SwitchDisplay.css'; // Make sure to create and import a CSS file for styles

function SwitchDisplay({ label, onSwitchChange, parameters }) {
  const [isEnabled, setIsEnabled] = useState(false);

  // Determine if the switch should be disabled
  const disabled = shouldDisableSwitch(label, parameters);

  useEffect(() => {
    // Automatically turn off the switch if it is disabled
    if (disabled && isEnabled) {
      setIsEnabled(false);
      onSwitchChange(label, false);  // Inform the parent component
    }
  }, [disabled, isEnabled, label, onSwitchChange]);

  const handleToggle = () => {
    if (!disabled) {
      setIsEnabled(!isEnabled);
      onSwitchChange(label, !isEnabled);
    }
  };

  const buttonClass = `switch-display-button ${isEnabled ? 'enabled' : ''} ${disabled ? 'disabled' : ''}`;

  return (
    <button 
      className={buttonClass}
      onClick={handleToggle}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

// Function to determine if a switch should be disabled based on parameters
function shouldDisableSwitch(switchName, params) {
  const { gestAgeDays, birthWeight } = params;
  if (switchName === "Early NPO or trophic feeds + TPN" && birthWeight >= 1500) {
    return true; // Disable switch under specific conditions
  }
  if (switchName === "Early Adv Feeds + TPN" && birthWeight >= 2200) {
    return true; // Disable switch under specific conditions
  }
  if (switchName === "Full Feeds Nut Info" && birthWeight >= 2200) {
    return true; // Disable switch under specific conditions
  }


  return false; // By default, switches are enabled
}

export default SwitchDisplay;
