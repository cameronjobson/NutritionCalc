import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function PoorGrowth({ birthWeight }) {

    const selectedImage = useMemo(() => {
        if (birthWeight <= 1250) {
            return '/images/PoorGrowth1250.png';
        } else {
            return '/images/PoorGrowth2200.png'
        }
      }, [birthWeight]);

      return (
        <ExpandablePanel title="Poor Growth">
            <div>
                {(<img src={selectedImage} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
            </div>
        </ExpandablePanel>
      )
}

export default PoorGrowth;