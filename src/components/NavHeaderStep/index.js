import React, { useState, useEffect } from 'react';
import './styles.css';

const NavHeaderStep = props => {
    const [step, setStep] = useState(0);
    useEffect(() => {
        setStep(window.location.pathname);
    })
    return (
        <div className='nav-header-step-container'>
            <div className={step === '/' ? 'step-selected' : ''}>
                SACOLA
            </div>
            <div className={step === '/payment' ? 'step-selected' : ''}>
                PAGAMENTO
            </div>
            <div className={step === '/success' ? 'step-selected' : ''}>
                CONFIRMAÇÃO
            </div>
        </div>
    )
}

export default NavHeaderStep;

