import React, { useState, useMemo } from 'react';
import ExpandablePanel from './ExpandablePanel';

function InHospitalRegimen({ birthWeight }) {

    const selectedImage = useMemo(() => {
        if (birthWeight <= 1250) {
            return '/images/InHospitalRegimen1250.png';
        } else if (birthWeight > 1250 && birthWeight <= 1500){
            return '/images/InHospitalRegimen1500.png'
        } else if (birthWeight > 1500 && birthWeight <= 2200){
            return '/images/InHospitalRegimen2200.png'
        } else {
            return '/images/InHospitalRegimen2200+.png'
        }
      }, [birthWeight]);

      const imageStyle = useMemo(() => {
        if (selectedImage === '/images/InHospitalRegimen2200+.png') {
            return { width: '476px', height: '106px' };  // New dimensions for "2200+" image
        }
        if (selectedImage === '/images/InHospitalRegimen1250.png') {
            return { width: '406px', height: '267px' };  // New dimensions for "2200+" image
        }
        return { width: '476px', height: '267px' }; // Default dimensions
    }, [selectedImage]);

      return (
        <ExpandablePanel title="In Hospital Regimen">
            <div>
                {(<img src={selectedImage} alt="Trophic Feeds" style={imageStyle} />)}
            </div>
        </ExpandablePanel>
      )
}

export default InHospitalRegimen;