import React, { useState } from 'react';
import {HiBell} from "react-icons/hi";


const PinHiBellUser = () => {
    // Estado para el hover de la imagen
    const [bgColour, setBgColour] = useState("")
    
    // Estos son los estilos propios de la imagen
    const _styleHiBell = {
        iconHiBell:{
            width: '25px',
            height: '25px',
            borderRadius: '33px',
            color: "#767676",
            cursor: 'pointer',
        },
        HiBellHover:{
            padding: '6px',
            backgroundColor: `${bgColour}`,
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    };

    return (
        <div  style={_styleHiBell.HiBellHover}         
        onMouseEnter={() => setBgColour("#efefef")}
        onMouseLeave={() => setBgColour("")}>
        <HiBell style={_styleHiBell.iconHiBell}
        />
        </div>

)
    };

    export default PinHiBellUser;