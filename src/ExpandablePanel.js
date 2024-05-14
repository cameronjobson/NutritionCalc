import React, { useState } from 'react';

function ExpandablePanel({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={togglePanel} style={{ width: '100%', textAlign: 'left', padding: '10px', fontSize: '16px', backgroundColor: 'lightgrey', border: 'none', cursor: 'pointer' }}>
        <span style={{ marginRight: '10px' }}>{isOpen ? '▼' : '►'}</span>
        {title}
      </button>
      {isOpen && (
        <div style={{ padding: '10px', border: '1px solid lightgrey', borderTop: 'none' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpandablePanel;
