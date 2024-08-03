import React, { useState } from 'react';
import ExpandablePanel from './ExpandablePanel';

function MetabolicBone(){
    return(
        <ExpandablePanel title="Metabolic Bone Disease">
            <div>
                {(<img src={'/images/MetaBoneMain.png'} alt="Trophic Feeds" style={{ width: '576px', height: '367px' }} />)}
            </div>
            <div>
                <ExpandablePanel title='Risk Factors' defaultOpen={false} isSubPanel={true}>
                    <img src={'/images/MetaBoneRisk.png'} alt="Ca/Phos and Prolacta" style={{ width: '376px', height: '267px' }}/>
                </ExpandablePanel>
            </div>
            <div>
                <ExpandablePanel title='Treatment Guidlines' defaultOpen={false} isSubPanel={true}>
                    <img src={'/images/MetaBoneTreat.png'} alt="Ca/Phos and Prolacta" style={{ width: '476px', height: '227px' }} />
                </ExpandablePanel>
            </div>
            <div>
                <ExpandablePanel title='Prevention Management' defaultOpen={false} isSubPanel={true}>
                    <img src={'/images/MetaBonePrev.png'} alt="Ca/Phos and Prolacta" style={{ width: '476px', height: '227px' }}/>
                </ExpandablePanel>
            </div>
        </ExpandablePanel>
    )
}
export default MetabolicBone