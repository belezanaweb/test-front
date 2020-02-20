import React from 'react';
import './styles.css';

const ButtonLink = props => {
    return (
        <button disabled={props.disabled} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default ButtonLink;

