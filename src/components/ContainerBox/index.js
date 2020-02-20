import React from 'react';
import './styles.css';

const ContainerBox = props => {
    return (
        <div className='list-container'>
            <h4 className='list-name'>{props.title}</h4>
            <div className='list-container-itens'>
                {props.children}
            </div>
        </div>
    )
}

export default ContainerBox;

