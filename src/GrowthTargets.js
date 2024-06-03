import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function GrowthTargets({ birthWeight }) {

      return (
        <ExpandablePanel title="Growth Targets">
            <div>
                {(<img src={'/images/GrowthTargetsAll.png'} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
            </div>
        </ExpandablePanel>
      )
}

export default GrowthTargets;