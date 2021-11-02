import React from 'react'
import PinIconNavLeft from '../Pin-Bar/PinInfoNavLeft/PinIconNavLeft';
import PinSearch from '../Pin-Bar/PinSearch/PinSearch';
import PinIconBarUserRight from '../Pin-Bar/PinInfoUserIconRight/PinIconBarUserRight';
import PinBarResponsive from '../Pin-Responsive/PinBarResponsive';
import PinFooterResponsive from '../Pin-Responsive/PinFooterResponsive';

const _stylesBar = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '70px',
        // backgroundColor: 'black',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        },
    };

    const PinBar = ()=> {
    if(window.innerWidth > 590){
        return (
            <div style={_stylesBar.pin_container} >
            <PinIconNavLeft/>
                    <PinSearch/>
                        <PinIconBarUserRight/>
            </div>
        )
    }else{
        return (
            <div>
                    <PinBarResponsive/>
                    <PinFooterResponsive/>
            </div>
            
        )
    }
    
};

export default PinBar;
