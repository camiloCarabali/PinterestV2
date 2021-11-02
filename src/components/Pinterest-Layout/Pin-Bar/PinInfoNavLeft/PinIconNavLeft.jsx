import React, { useState } from 'react';
import {IoLogoPinterest} from "react-icons/io";


const PinIconNavLeft = () =>{
    const [bgColour, setBgColour] = useState("");
    const [bgColourPinterest, setBgColourPinterest] = useState("");

    const _stylesNavLeft = {
        iconContainerLeft:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
        },
        iconPinterest:{
            fontSize:'25px',
            borderRadius: '33px',
            color: 'red',
            cursor: 'pointer',
        },
        iconPinterestHover:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6px',
            backgroundColor: `${bgColourPinterest}`,
            borderRadius: '50%',
            cursor: 'pointer',
        },
        iconLeft:{
            color: 'white',
            textDecoration: 'none',
        },
        iconLeftHoy:{
            color: 'black',
            textDecoration: 'none',
        },
        iconInicio:{
            width: '100%',
            height: '100%',
            backgroundColor: '#111111',
            display: 'flex',
            padding:'8px',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            borderTopLeftRadius:'20px',
            borderBottomLeftRadius:'20px',
        },
        iconHoy:{
            width: '100%',
            height: '100%',
            display: 'flex',
            padding:'8px',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            borderTopLeftRadius:'20px',
            borderBottomLeftRadius:'20px',
        },
        iconHoyHover:{
            width: '100%',
            height: '100%',
            marginRight: '3px',
            backgroundColor: `${bgColour}`,
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            borderTopLeftRadius:'20px',
            borderBottomLeftRadius:'20px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
        };

    return (
        <div style={_stylesNavLeft.iconContainerLeft}>
            <div style={_stylesNavLeft.iconPinterestHover}
                onMouseEnter={() => setBgColourPinterest("#efefef")}
                onMouseLeave={() => setBgColourPinterest("")}>
                <IoLogoPinterest style={_stylesNavLeft.iconPinterest}/>
            </div>

            <div style={_stylesNavLeft.iconInicio}>
                <a style={_stylesNavLeft.iconLeft} href="#"> <strong>Inicio</strong> </a>
            </div>
            <div style={_stylesNavLeft.iconHoyHover}
            onMouseEnter={() => setBgColour("#efefef")}
            onMouseLeave={() => setBgColour("")}
            >
                <div style={_stylesNavLeft.iconHoy}>
                    <a style={_stylesNavLeft.iconLeftHoy} href="#"> <strong>Hoy</strong> </a>
                </div>
            </div>
        </div>
    );
};

export default PinIconNavLeft;
