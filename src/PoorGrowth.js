import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function PoorGrowth({ birthWeight }) {


      return (
        <ExpandablePanel title="Poor Growth">
            <div>
                <ExpandablePanel title="HMF">
                    {(<img src={"/images/PoorGrowth2200.png"} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
                </ExpandablePanel>
            </div>
            {birthWeight <= 1250 && (
                <div>
                    <ExpandablePanel title="Prolacta">
                        {(<img src={'/images/PoorGrowth1250.png'} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
                    </ExpandablePanel>
                </div>
            )}
        </ExpandablePanel>
      )
}

export default PoorGrowth;
