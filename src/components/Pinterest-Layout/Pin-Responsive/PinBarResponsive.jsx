import React from 'react'
const _stylesBarResponsive = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80%',
        height: '70px',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        },
        iconParati:{
        color: 'black',
        fontWeight:'bold',
        textDecoration: 'none',
        borderBottom: '5px solid #000000',
        fontSize: '25px',
        marginRight: '30px',
        marginLeft: '10px',
        },
        iconHoy:{
        color: 'black',
        fontWeight:'bold',
        textDecoration: 'none',
        fontSize: '25px',

        },
    };
function PinBarResponsive() {
    return (
        <div style={_stylesBarResponsive.pin_container}>
            <a href=""  style={_stylesBarResponsive.iconParati}>Para ti</a>
            <a href=""  style={_stylesBarResponsive.iconHoy}>Hoy</a>
        </div>
    )
}

export default PinBarResponsive
