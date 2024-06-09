import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function FluidRestriction({ birthWeight }) {

    const selectedImage = useMemo(() => {
        if (birthWeight <= 1250) {
            return '/images/FluidRestriction1250.png';
        } else {
            return '/images/FluidRestriction2200.png'
        }
      }, [birthWeight]);

      return (
        <ExpandablePanel title="Fluid Restriction">
            <div>
                {(<img src={selectedImage} alt="Trophic Feeds" style={{ width: '476px', height: '217px' }} />)}
            </div>
        </ExpandablePanel>
      )
}

export default FluidRestriction;