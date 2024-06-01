import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function FullFeedsNutInfo({ birthWeight }) {

    const selectedImage = useMemo(() => {
        if (birthWeight <= 1250) {
            return '/images/FullFeedsNutInfo1250.png';
        } else {
            return '/images/FullFeedsNutInfo2200.png'
        }
      }, [birthWeight]);

      return (
        <ExpandablePanel title="Full Feeds Nut Info">
            <div>
                {(<img src={selectedImage} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
            </div>
        </ExpandablePanel>
      )
}

export default FullFeedsNutInfo;