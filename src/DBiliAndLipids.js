import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function DBiliAndLipids({ birthWeight }) {

      return (
        <ExpandablePanel title="D Bili and Lipids">
            <div>
                {(<img src={'/images/DBiliAndLipidsAll.png'} alt="Trophic Feeds" style={{ width: '476px', height: '217px' }} />)}
            </div>
        </ExpandablePanel>
      )
}

export default DBiliAndLipids;