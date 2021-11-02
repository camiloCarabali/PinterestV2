import React, { useState } from 'react';
import {AiFillMessage} from "react-icons/ai";


const PinMessageUser = () => {
    // Estado para el hover de la imagen
    const [bgColour, setBgColour] = useState("")
    
    // Estos son los estilos propios de la imagen
    const _styleAiFillMessage = {
        iconMessage:{

            borderRadius: '33px',
            color: "#767676",
            cursor: 'pointer',
            fontSize: '20px',
        },
        MessageHover:{
            padding: '8px',
            backgroundColor: `${bgColour}`,
            borderRadius: '50%',
            cursor: 'pointer',
        }
    };

    return (
        <div  style={_styleAiFillMessage.iconMessage}         
        onMouseEnter={() => setBgColour("#efefef")}
        onMouseLeave={() => setBgColour("")}>
        <AiFillMessage style={_styleAiFillMessage.MessageHover}
        />
        </div>
)
    };

    export default PinMessageUser;