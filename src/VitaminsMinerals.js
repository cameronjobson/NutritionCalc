import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function VitaminsMinerals({ birthWeight }) {

  const lastSentence = (birthWeight) => {
    if (birthWeight < 2500){
      return "Poly-vi-sol with Fe 1 mL/d";
    }
    return "D-visol 400IU<br></br>Vitamin D needs met (400IU/d) when<br></br>taking 1000 mL/d of Term formula<br></br>Begin when tolerating full feeds";
  }

      return (
        <ExpandablePanel title="Vitamins & Minerals">
            <div>
            <ExpandablePanel title="EBM/DBM with Prolacta" defaultOpen={false}>
              <div>
              <p>Poly-vi-sol 0.5 mL BID<br></br>Fe 2-4 mg/kg/d<br></br>Begin DOL 14 and on full feeds</p>
              </div>
            </ExpandablePanel>
            <ExpandablePanel title="EBM/DBM with HMF 1:25" defaultOpen={false}>
              <div>
              <p>D-vi-sol 400 IU<br></br>Fe 2-4 mg/kg/d<br></br>Begin DOL 14 and on full feeds</p>
              </div>
            </ExpandablePanel>
            <ExpandablePanel title="Over 75% Preterm Formula" defaultOpen={false}>
              <div>
              <p>May benefit from Fe 2-3 mg/kg/d<br></br>Begin DOL 14 and on full feeds</p>
              </div>
            </ExpandablePanel>
            <ExpandablePanel title="EBM and SSC30 or PE30" defaultOpen={false}>
              <div>
              <p>Poly-vi-sol with Fe 1 mL/d<br></br>Begin DOL 14 and on full feeds</p>
              </div>
            </ExpandablePanel>
            <ExpandablePanel title="EBM 1:50 or EBM/HMF 1:25 for D/C Regimen" defaultOpen={false}>
              <div>
              <p>Poly-vi-sol with Fe 1 mL/d<br></br>Begin DOL 14 and on full feeds</p>
              </div>
            </ExpandablePanel>
            <ExpandablePanel title="Transitional Formula or EBM with Transitional Formula" defaultOpen={false}>
              <div>
              <p>Poly-vi-sol with Fe 1 mL/d
              <br></br>Vitamin D needs met (400IU/d) when
              <br></br>taking 800 mL/d
              <br></br>of Transitional Formula
              <br></br>Begin DOL 14 and on full feeds
              </p>
              </div>
            </ExpandablePanel>
            <ExpandablePanel title="EBM and/or Term Formula" defaultOpen={false}>
              <div>
              <p dangerouslySetInnerHTML={{ __html: lastSentence(birthWeight) }}></p>
              </div>
            </ExpandablePanel>
            </div>
        </ExpandablePanel>
      )
}

export default VitaminsMinerals;