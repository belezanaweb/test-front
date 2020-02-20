import React from 'react';
import './styles.css';
import { FaRegCheckCircle } from "react-icons/fa";

const MessageBox = props => {
    return (
        <div className='container-message'>
            <FaRegCheckCircle />
            <p className='text'>{props.text}</p>
        </div>
    )
}

export default MessageBox;
