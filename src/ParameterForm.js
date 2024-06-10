import './ParameterForm.css';
import React, { useState } from 'react';

function ParameterForm({ onParametersSubmit }) {
  const [birthWeight, setBirthWeight] = useState('');
  const [isLessThan36Weeks, setIsLessThan36Weeks] = useState();  // No initial state set
  const [totalGestAgeDays, setTotalGestAgeDays] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onParametersSubmit({
      gestAgeDays: totalGestAgeDays,
      birthWeight
    });
  };

  return (
    <form onSubmit={handleSubmit} className="parameter-form">
      <label>
        <input 
          type="radio" 
          name="gestationalAge" 
          value="lessThan36" 
          checked={isLessThan36Weeks === true}  // Check if true
          onChange={() => {
            setTotalGestAgeDays(35)
            setIsLessThan36Weeks(true);
          }}
        />
        &lt;/=35w
      </label>
      <div></div>
      <label>
        <input 
          type="radio" 
          name="gestationalAge" 
          value="moreThan36" 
          checked={isLessThan36Weeks === false}  // Check if false
          onChange={() => {
            setTotalGestAgeDays(37)
            setIsLessThan36Weeks(false);
          }}
        />
        &gt;/=36w
      </label>

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
