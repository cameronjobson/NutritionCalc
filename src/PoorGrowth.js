import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function PoorGrowth({ birthWeight }) {


      return (
        <ExpandablePanel title="Poor Growth">
            {birthWeight <= 1250 && (
                <div>
                    <ExpandablePanel title="Prolacta" isSubPanel={true}>
                        {(<img src={'/images/PoorGrowth1250.png'} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
                    </ExpandablePanel>
                </div>
            )}
            <div>
                <ExpandablePanel title="HMF" defaultOpen={birthWeight <= 1250 ? false : true} isSubPanel={true}>
                    {(<img src={"/images/PoorGrowth2200.png"} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
                </ExpandablePanel>
            </div>
        </ExpandablePanel>
      )
}

export default PoorGrowth;
