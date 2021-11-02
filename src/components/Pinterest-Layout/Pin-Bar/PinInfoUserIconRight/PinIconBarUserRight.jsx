import React from 'react';
import PinHiBellUser from './PinHiBell/PinHiBellUser';
import PinMessageUser from './PinMessage/PinMessageUser';
import PinProfileUser from './PinProfile/PinProfileUser';
import PinChevron from './PinChevronDown/PinChevron';

const _stylesNavLeft = {
    iconContainerRight:{
        width: '33%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '20px',
    }, 
};
function PinIconBarUserRight() {
    return (
        <div  style={_stylesNavLeft.iconContainerRight}>
            <PinHiBellUser  />
            <PinMessageUser  />
            <PinProfileUser  />
            <PinChevron  />
        </div>
    )
}

export default PinIconBarUserRight;
