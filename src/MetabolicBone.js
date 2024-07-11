import React, { useState } from 'react';
import ExpandablePanel from './ExpandablePanel';

function MetabolicBone(){
    const[riskFactorsVisible, setRiskFactorsVisible] = useState(false);
    const[treatmentGuidlinesVisible, setTreatmentGuidlinesVisible] = useState(false);
    const[PreventionManagementVisible, setPreventionManagementVisible] = useState(false);



    return(
        <ExpandablePanel title="Metabolic Bone Disease">
            <div>
                {(<img src={'/images/MetaBoneMain.png'} alt="Trophic Feeds" style={{ width: '576px', height: '367px' }} />)}
            </div>
            <div>
                <label>
                    Risk Factors
                    <input
                    type="checkbox"
                    checked={riskFactorsVisible}
                    onChange={() => setRiskFactorsVisible(!riskFactorsVisible)}
                    style={{ marginLeft: '10px' }}
                    />
                </label>
                {riskFactorsVisible && (<img src={'/images/MetaBoneRisk.png'} alt="Ca/Phos and Prolacta" style={{ width: '376px', height: '267px' }}/>)}
            </div>
            <div>
                <label>
                    Treatment Guidlines
                    <input
                    type="checkbox"
                    checked={treatmentGuidlinesVisible}
                    onChange={() => setTreatmentGuidlinesVisible(!treatmentGuidlinesVisible)}
                    style={{ marginLeft: '10px' }}
                    />
                </label>
                {treatmentGuidlinesVisible && (<img src={'/images/MetaBoneTreat.png'} alt="Ca/Phos and Prolacta" style={{ width: '476px', height: '227px' }} />)}
            </div>
            <div>
                <label>
                    Prevention Management
                    <input
                    type="checkbox"
                    checked={PreventionManagementVisible}
                    onChange={() => setPreventionManagementVisible(!PreventionManagementVisible)}
                    style={{ marginLeft: '10px' }}
                    />
                </label>
                {PreventionManagementVisible && (<img src={'/images/MetaBonePrev.png'} alt="Ca/Phos and Prolacta" style={{ width: '476px', height: '227px' }}/>)}
            </div>
        </ExpandablePanel>
    )
}
export default MetabolicBone