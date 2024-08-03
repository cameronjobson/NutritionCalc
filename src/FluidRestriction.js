import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function FluidRestriction({ birthWeight }) {
      return (
        <ExpandablePanel title="Fluid Restriction">
            {birthWeight <= 1250 && (
                <div>
                    <ExpandablePanel title="Prolacta" isSubPanel={true}>
                        {(<img src={'/images/FluidRestriction1250.png'} alt="Trophic Feeds" style={{ width: '476px', height: '217px' }} />)}
                    </ExpandablePanel>
                </div>
            )}
            <div>
                <ExpandablePanel title="HMF" defaultOpen={birthWeight <= 1250 ? false : true} isSubPanel={true}>
                    {(<img src={"/images/FluidRestriction2200.png"} alt="Trophic Feeds" style={{ width: '476px', height: '217px' }} />)}
                </ExpandablePanel>
            </div>
        </ExpandablePanel>
      )
}
export default FluidRestriction;