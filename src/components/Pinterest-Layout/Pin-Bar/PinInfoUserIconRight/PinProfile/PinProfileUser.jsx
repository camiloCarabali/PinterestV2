import React, { useState } from 'react';
import {CgProfile} from "react-icons/cg";

const PinProfileUser = () => {
    // Estado para el hover de la imagen
    const [bgColour, setBgColour] = useState("");
    
    // Estos son los estilos propios de la imagen
    const _styleProfile = {
        iconProfile:{
            borderRadius: '33px',
            color: '#767676',
            cursor: 'pointer',
            fontSize: '20px',
        },
        profileHover:{
            padding: '8px',
            backgroundColor: `${bgColour}`,
            borderRadius: '50%',
            cursor: 'pointer',
        }
    };

    return (
        <div style={_styleProfile.iconProfile}
            onMouseEnter={() => setBgColour("#efefef")}
            onMouseLeave={() => setBgColour("")}>
            <CgProfile style={_styleProfile.profileHover}/>
        </div>
    )
};
export default PinProfileUser;
