import React from "react";
import './style.css';

export const Botao = (props) => {
    return (
       <button style={{
        backgroundColor: props?.backgroundColor,
        color: props?.color,
        width: props?.width,
        border: props?.border,
       }}
       onMouseOut={(e) => {
            e.target.style.backgroundColor = props?.backgroundColor;
            e.target.style.color = props?.color;
            e.target.style.border = props?.border;
        }}
       onMouseOver={(e) => {
            e.target.style.backgroundColor = props?.backgroundColorHover;
            e.target.style.color = props?.colorHover;
            e.target.style.border = props?.borderHover;
        }}
        onClick={props?.onClick}
        >{props?.text}</button>
    )
}