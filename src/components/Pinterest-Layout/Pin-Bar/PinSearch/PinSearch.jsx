import React, { useState } from 'react';

const PinSearch = () =>{
    // Estado para el hover de la imagen
    const [bgColour, setBgColour] = useState("#efefef");
    
    // Estos son los estilos propios de la imagen

    const _stylesSearch = {
        iconContainerSearch:{
            width:'100%',
            height:'100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        contenedorSearch:{
            width:'100%',
    
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        iconLupa:{
            fontSize:'20px',
        },
        inputTextSearch: {
            width:'97%',
            height:'100%',
            padding:'8px',
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            borderTopLeftRadius:'20px',
            borderBottomLeftRadius:'20px',
            backgroundColor:`${bgColour}`,
            border: 'solid #efefef',
            outlineColor:'#84c3fd',
            outlineWidth: '100px',
            fontSize:'15px',
        },
        // PinSearchHover:{
        //     padding: '4px',
        //     backgroundColor: ,
        //     borderRadius: '50%',
        //     cursor: 'pointer',
        // }
    };

    return (
            <div style={_stylesSearch.iconContainerSearch}>
                <div style={_stylesSearch.contenedorSearch} >
                <input  style={_stylesSearch.inputTextSearch} type="search" placeholder="Buscar" 
                onMouseEnter={() => setBgColour("#e1e1e1")}
                onMouseLeave={() => setBgColour("#efefef")}
                />
                </div>
            </div>
    )
};

export default PinSearch;