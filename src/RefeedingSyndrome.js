import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function RefeedingSyndrome({ birthWeight }) {

      return (
        <ExpandablePanel title="Refeeding Syndrome">
            <div>
                {(<img src={'/images/RefeedingSyndromeImage.png'} alt="Trophic Feeds" style={{ width: '476px', height: '367px' }} />)}
            </div>
        </ExpandablePanel>
      )
};

export default RefeedingSyndrome;