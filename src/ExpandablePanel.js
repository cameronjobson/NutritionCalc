import React, { useState } from 'react';
import './ExpandablePanel.css';

function ExpandablePanel({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expandable-panel">
      <button className="expandable-panel-button" onClick={togglePanel}>
        <span className={`expandable-panel-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '▼' : '►'}
        </span>
        {title}
      </button>
      <div className={`expandable-panel-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default ExpandablePanel;
