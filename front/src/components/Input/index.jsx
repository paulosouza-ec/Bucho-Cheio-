import React from "react";
import './style.css';

export const Input = (props) => {
    return (
        <div className="ContainerInput">
            <h1 className="titulo">{props.titulo}</h1>
            <input 
                placeholder={props?.placeholder}
                value={props?.value}
                onChange={props?.onChange}
                disabled={props.disabled}
                type={props.senha ? 'password' : 'text'}
            >{props?.text}</input>
            <p className="ErrorMessage">{props.error}</p>
       </div>
    )
}