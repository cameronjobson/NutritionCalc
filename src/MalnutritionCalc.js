import React, { useState } from 'react';
import ExpandablePanel from './ExpandablePanel';

function MalnutritionCalc() {
    const [birthZScore, setBirthZScore] = useState('');
    const [currentZScore, setCurrentZScore] = useState('');
    const [result, setResult] = useState('');
    const [classification, setClassification] = useState('');

    const handleSubmit = () => {
        const changeInZScore = parseFloat(currentZScore) - parseFloat(birthZScore);
        let malnutritionStatus;

        // Define the malnutrition classification based on the change in Z score
        if (changeInZScore > -0.80) {
            malnutritionStatus = "no";
        } else if (changeInZScore >= -1.20) {
            malnutritionStatus = "mild";
        } else if (changeInZScore >= -2.00) {
            malnutritionStatus = "moderate";
        } else {
            malnutritionStatus = "severe";
        }

        setResult(changeInZScore.toFixed(2));
        setClassification(malnutritionStatus);
    };

    return (
        <ExpandablePanel title="Malnutrition Calculation">
          <div style={{ padding: '10px' }}>
            <div>
              <label>
                Enter Birth z Score:
                <input
                  type="number"
                  step="0.01"
                  value={birthZScore}
                  onChange={(e) => setBirthZScore(e.target.value)}
                  style={{ float: 'right', width: '60px', padding: '5px' }}
                  maxLength={3}
                />
                <div style={{ fontSize: '12px' }}>
                  Or chosen ideal weight for <br></br> LGA or erroneous birth weight
                </div>
            
              </label>
            </div>
            <div>
              <label>
                Enter Current z Score:
                <input
                  type="number"
                  step="0.01"
                  value={currentZScore}
                  onChange={(e) => setCurrentZScore(e.target.value)}
                  style={{ float: 'right', width: '60px', padding: '5px' }}
                  maxLength={3}
                />
              </label>
            </div>
            <button onClick={handleSubmit} style={{ margin: '10px' }}>
              Submit
            </button>
            {result && (
              <p>
                Change in z score is {result} and therefore has {classification} malnutrition.
              </p>
            )}
          </div>
        </ExpandablePanel>
      );
    
}

export default MalnutritionCalc;
