import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function DischargeRegimen({ birthWeight }) {

    const selectedImage = useMemo(() => {
        if (birthWeight <= 750) {
            return '/images/DischargeRegimen750.png';
        } else if (birthWeight > 750 && birthWeight <= 1000){
            return '/images/DischargeRegimen1000.png'
        } else if (birthWeight > 1000 && birthWeight <= 1500){
            return '/images/DischargeRegimen1500.png'
        } else if (birthWeight > 1500 && birthWeight <= 2200){
            return '/images/DischargeRegimen2200.png'
        } else {
            return '/images/DischargeRegimen2200+.png'
        }
      }, [birthWeight]);

    // Conditional styling based on the selected image
    const imageStyle = useMemo(() => {
        if (selectedImage === '/images/DischargeRegimen2200+.png') {
            return { width: '476px', height: '230px' };  // New dimensions for "2200+" image
        } else if (selectedImage === '/images/DischargeRegimen2200.png'){
            return { width: '676px', height: '330px' };  // New dimensions for "2200+" image
        }

        return { width: '700px', height: '424px' }; // Default dimensions
    }, [selectedImage]);

    const copyPasteContent = useMemo(() => {
        if (birthWeight < 750){
            return `
<p><b>EBM+HMF1:50:</b><br/>
Discharge home on EBM+HMF 1 pack per 50mls of EBM until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+HMF1:25:</b><br/>
Discharge home breastfeeding/EBM ad lib plus EBM + HMF 1 pack per 25mls for 3-4 bottles per<br/>
day until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+30cal:</b><br/>
Discharge home breastfeeding/EBM ad lib plus Premature Enfamil or Similac Special Care 30 cal<br/>
120mls daily until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+transitional:</b><br/>
Discharge home breastfeeding/EBM ad lib alternating with Neosure or Enfacare 22 cal formula.<br/>
Continue transitional formula until 12 mo corrected age.<br/>
Poly vi sol with fe daily until taking >800mls of transitional formula.</p>

<p><b>Transitional only:</b><br/>
Discharge home on Neosure or Enfacare 22 cal formula until 12 mo corrected age.<br/>
Poly vi sol with fe daily until taking >800mls of transitional formula.</p>
`;
        } else if (birthWeight <= 1000){
            return `
<p><b>EBM+HMF1:50:</b><br/>
Discharge home on EBM+HMF 1 pack per 50mls of EBM until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+HMF1:25:</b><br/>
Discharge home breastfeeding/EBM ad lib plus EBM + HMF 1 pack per 25mls for 3-4 bottles per<br/>
day until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+30cal:</b><br/>
Discharge home breastfeeding/EBM ad lib plus Premature Enfamil or Similac Special Care 30 cal<br/>
120mls daily until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+transitional:</b><br/>
Discharge home breastfeeding/EBM ad lib alternating with Neosure or Enfacare 22 cal formula.<br/>
Continue transitional formula until 9-12 mo corrected age.<br/>
Poly vi sol with fe daily until taking &gt;800mls of transitional formula.</p>

<p><b>Transitional only:</b><br/>
Discharge home on Neosure or Enfacare 22 cal formula until 9-12 mo corrected age.<br/>
Poly vi sol with fe daily until taking &gt;800mls of transitional formula.</p>
`;
        } else if (birthWeight <= 1500){
            return `
<p><b>EBM+HMF1:50:</b><br/>
Discharge home on EBM+HMF 1 pack per 50mls of EBM until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+HMF1:25:</b><br/>
Discharge home breastfeeding/EBM ad lib plus EBM + HMF 1 pack per 25mls for 3-4 bottles per<br/>
day until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+30cal:</b><br/>
Discharge home breastfeeding/EBM ad lib plus Premature Enfamil or Similac Special Care 30 cal<br/>
120mls daily until 3 mo corrected age.<br/>
Poly vi sol with fe daily.<br/>
Follow up with NEST dietician 2-3 weeks after discharge.</p>

<p><b>EBM+alt transitional:</b><br/>
Discharge home breastfeeding/EBM ad lib alternating with Neosure or Enfacare 22 cal formula.<br/>
Continue transitional formula until 6-9 mo corrected age.<br/>
Poly vi sol with fe daily until taking &gt;800mls of transitional formula.</p>

<p><b>Transitional only:</b><br/>
Discharge home on Neosure or Enfacare 22 cal formula until 6-9 mo corrected age.<br/>
Poly vi sol with fe daily until taking &gt;800mls of transitional formula.</p>
`;
        } else if (birthWeight <= 2200){
            return `
<p><b>EBM+transitional 2-3/d:</b><br/>
Discharge home breastfeeding/EBM ad lib plus Neosure or Enfacare 22 cal 2-3 feeds per day.<br/>
Continue transitional formula until 3-6 mo corrected age.<br/>
Poly vi sol with fe daily until taking &gt;800mls of transitional formula.</p>

<p><b>EBM+alt transitional:</b><br/>
Discharge home breastfeeding/EBM ad lib alternating with Neosure or Enfacare 22 cal formula.<br/>
Continue transitional formula until 3-6 mo corrected age.<br/>
Poly vi sol with fe daily until taking &gt;800mls of transitional formula.</p>

<p><b>Transitional only:</b><br/>
Discharge home on Neosure or Enfacare 22 cal formula until 3-6 mo corrected age.<br/>
Poly vi sol with fe daily until taking &gt;800mls of transitional formula.</p>
`;
        } else if (birthWeight <= 2500){
            return `
<p><b>Breastmilk only:</b><br/>
Discharge home breastfeeding or EBM ad lib.<br/>
Poly vi sol with fe until taking &gt; 1000mls of term formula per day.</p>

<p><b>Breastmilk and term formula:</b><br/>
Discharge home on breastfeeding or term formula ad lib.<br/>
Poly vi sol with fe until taking &gt; 1000mls of term formula per day.</p>

<p><b>Term formula only:</b><br/>
Discharge home on term formula.<br/>
Poly vi sol with fe until taking &gt; 1000mls of term formula per day.</p>
`;
        } else {
            return `
<p><b>Breastmilk only:</b><br/>
Discharge home breastfeeding or EBM ad lib.<br/>
D vi sol with fe until taking &gt; 1000mls of term formula per day.</p>

<p><b>Breastmilk and term formula:</b><br/>
Discharge home on breastfeeding or term formula ad lib.<br/>
D vi sol with fe until taking &gt; 1000mls of term formula per day.</p>

<p><b>Term formula only:</b><br/>
Discharge home on term formula.<br/>
D vi sol with fe until taking &gt; 1000mls of term formula per day.</p>
`;
        }
    }, [birthWeight]);

    return (
        <ExpandablePanel title="Discharge Regimen">
            <div>
                {(<img src={selectedImage} alt="Trophic Feeds" style={imageStyle} />)}
            </div>
            <ExpandablePanel title="Copy & Paste for Notes" defaultOpen={false}>
                <div dangerouslySetInnerHTML={{ __html: copyPasteContent }} />
            </ExpandablePanel>
        </ExpandablePanel>
      )
}

export default DischargeRegimen;
