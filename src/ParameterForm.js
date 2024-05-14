// File retreves patient data from the user
// ParameterForm.js
import './SwitchDisplay.css';
import React, { useState } from 'react';

function ParameterForm({ onParametersSubmit }) {
  const [gestAgeWeeks, setGestAgeWeeks] = useState('');
  const [gestAgeDays, setGestAgeDays] = useState('');
  const [birthWeight, setBirthWeight] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalGestAgeDays = parseInt(gestAgeWeeks) * 7 + parseInt(gestAgeDays);
    onParametersSubmit({
      gestAgeDays: totalGestAgeDays,
      birthWeight
    });
  };

  return (
    <form onSubmit={handleSubmit} className="parameter-form">
      <input
        type="number"
        value={gestAgeWeeks}
        onChange={(e) => setGestAgeWeeks(e.target.value)}
        placeholder="Gestational Age (Weeks)"
      />
      <input
        type="number"
        value={gestAgeDays}
        onChange={(e) => setGestAgeDays(e.target.value)}
        placeholder="Gestational Age (Days)"
      />
      <input
        type="number"
        value={birthWeight}
        onChange={(e) => setBirthWeight(e.target.value)}
        placeholder="Birth Weight (grams)"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ParameterForm;
