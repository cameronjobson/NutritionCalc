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

    return (
        <ExpandablePanel title="Discharge Regimen">
            <div>
                {(<img src={selectedImage} alt="Trophic Feeds" style={imageStyle} />)}
            </div>
        </ExpandablePanel>
      )
}

export default DischargeRegimen;
