import React from 'react'
import style from './style.module.scss'
import ProgressBar from '../../components/ProgressBar'

const CheckoutLayout: React.FC = ({ children }) => {
    return (
        <div className={style.layout}>
            <ProgressBar />
            <div className={style.container}>
                {children}
            </div>
        </div>
    )
}

export default CheckoutLayout
