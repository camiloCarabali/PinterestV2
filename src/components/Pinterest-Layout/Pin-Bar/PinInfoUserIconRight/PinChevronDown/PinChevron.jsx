import React, { useState } from 'react';
import {BiChevronDown} from "react-icons/bi";

const PinChevron = () => {
    // Estado para el hover de la imagen
    const [bgColour, setBgColour] = useState("");
    
    // Estos son los estilos propios de la imagen
    const _styleChevron = {
        iconChevron:{
            width: '25px',
            height: '25px',
            borderRadius: '33px',
            color: '#767676',
            cursor: 'pointer',
        },
        ChevronHover:{
            padding: '2px',
            backgroundColor: `${bgColour}`,
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    };

    return (
        <div style={_styleChevron.ChevronHover}
            onMouseEnter={() => setBgColour("#efefef")}
            onMouseLeave={() => setBgColour("")}>
            <BiChevronDown style={_styleChevron.iconChevron}/>
        </div>
    )
};
export default PinChevron;
