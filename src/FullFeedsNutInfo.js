import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function FullFeedsNutInfo({ birthWeight }) {

      return (
        <ExpandablePanel title="Full Feeds Nut Info">
            {birthWeight <= 1250 && (
                <div>
                    <ExpandablePanel title="Prolacta">
                        {(<img src={'/images/FullFeedsNutInfo1250.png'} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
                    </ExpandablePanel>
                </div>
            )}
            <div>
                <ExpandablePanel title="HMF" defaultOpen={birthWeight <= 1250 ? false : true}>
                    {(<img src={"/images/FullFeedsNutInfo2200.png"} alt="Trophic Feeds" style={{ width: '476px', height: '267px' }} />)}
                </ExpandablePanel>
            </div>
        </ExpandablePanel>
      )
}

export default FullFeedsNutInfo;