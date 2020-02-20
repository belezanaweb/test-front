import React from 'react';
import './styles.css';
import InputMaskText from "react-input-mask";

const InputText = props => {
    return (
        <div className='input-group ' style={{ width: `${props.width}%` }}>
            <label htmlFor={props.labelText}>{props.labelText}</label>
            <br />
            {props.mask ?
                <InputMaskText
                    alwaysShowMask={true}
                    className='input-text'
                    mask={props.mask}
                    onChange={props.onChange}
                    value={props.value}
                    name={props.name}

                />
                :
                <input
                    onChange={props.onChange}
                    className='input-text'
                    type='text' id={props.labeText}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                />
            }
            <br />
            {props.valid && <span className='error-label'>Inválido</span>}
        </div>
    )
}

export default InputText;

